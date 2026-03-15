package server

import (
	"context"
	"encoding/json"
	"embed"
	"io/fs"
	"log"
	"net/http"
	"path"
	"sort"
	"strings"
	"time"

	"github.com/gorilla/websocket"
	gh "github.com/your-username/devdive/internal/github"
	"github.com/your-username/devdive/internal/state"
)

//go:embed dist
var webFS embed.FS

type Hub struct {
	clients    map[*websocket.Conn]bool
	broadcast  chan []byte
	register   chan *websocket.Conn
	unregister chan *websocket.Conn
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func NewHub() *Hub {
	return &Hub{
		clients:    map[*websocket.Conn]bool{},
		broadcast:  make(chan []byte, 32),
		register:   make(chan *websocket.Conn, 16),
		unregister: make(chan *websocket.Conn, 16),
	}
}

func (h *Hub) Run() {
	for {
		select {
		case conn := <-h.register:
			h.clients[conn] = true
		case conn := <-h.unregister:
			if h.clients[conn] {
				delete(h.clients, conn)
				conn.Close()
			}
		case data := <-h.broadcast:
			for conn := range h.clients {
				if err := conn.WriteMessage(websocket.TextMessage, data); err != nil {
					log.Printf("websocket broadcast failed: %v", err)
					delete(h.clients, conn)
					conn.Close()
				}
			}
		}
	}
}

func (h *Hub) Broadcast(data []byte) {
	copyData := append([]byte(nil), data...)
	h.broadcast <- copyData
}

func Start(port string, statePath string, hub *Hub) error {
	fsys, err := fs.Sub(webFS, "dist")
	if err != nil {
		return err
	}

	fileServer := http.FileServer(http.FS(fsys))
	mux := http.NewServeMux()

	mux.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		HandleWS(hub, w, r)
	})
	mux.HandleFunc("/api/state", func(w http.ResponseWriter, r *http.Request) {
		data, err := enrichedStateJSON(r.Context(), statePath)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Cache-Control", "no-store")
		w.Header().Set("Content-Type", "application/json")
		w.Write(data)
	})
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		requestPath := strings.TrimPrefix(path.Clean(r.URL.Path), "/")
		if requestPath == "" || requestPath == "." {
			serveIndex(w, fsys)
			return
		}

		if _, err := fs.Stat(fsys, requestPath); err == nil {
			fileServer.ServeHTTP(w, r)
			return
		}

		// Asset requests should fail fast instead of falling back to index.html.
		// Otherwise browsers receive HTML for missing JS modules and the app boots to a blank page.
		if path.Ext(requestPath) != "" {
			http.NotFound(w, r)
			return
		}

		serveIndex(w, fsys)
	})

	return http.ListenAndServe(":"+port, mux)
}

func HandleWS(hub *Hub, w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	hub.register <- conn
	defer func() {
		hub.unregister <- conn
	}()

	for {
		if _, _, err := conn.ReadMessage(); err != nil {
			return
		}
	}
}

func serveIndex(w http.ResponseWriter, fsys fs.FS) {
	index, err := fs.ReadFile(fsys, "index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Cache-Control", "no-store")
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Write(index)
}

func enrichedStateJSON(ctx context.Context, statePath string) ([]byte, error) {
	current, err := state.Load(statePath)
	if err != nil {
		return nil, err
	}

	if repo := strings.TrimSpace(current.Project.Repo); repo != "" {
		if remoteState, err := gh.GetCurrentState(ctx, repo); err == nil {
			current = remoteState
		}
		if commits, err := gh.ListStateCommits(ctx, repo); err == nil {
			current.StateCommits = current.StateCommits[:0]
			for _, commit := range commits {
				current.StateCommits = append(current.StateCommits, state.RemoteStateCommit{
					SHA:       commit.SHA,
					Message:   commit.Message,
					Timestamp: commit.Timestamp,
				})
			}
			sort.SliceStable(current.StateCommits, func(i, j int) bool {
				return parseRemoteStateCommitTime(current.StateCommits[i].Timestamp).After(parseRemoteStateCommitTime(current.StateCommits[j].Timestamp))
			})
		}
	}

	data, err := json.Marshal(current)
	if err != nil {
		return nil, err
	}
	return data, nil
}

func parseRemoteStateCommitTime(value string) time.Time {
	parsed, err := time.Parse(time.RFC3339, strings.TrimSpace(value))
	if err != nil {
		return time.Time{}
	}
	return parsed
}

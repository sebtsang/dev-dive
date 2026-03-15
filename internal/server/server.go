package server

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path"
	"strings"

	"github.com/gorilla/websocket"
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
		data, err := os.ReadFile(statePath)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
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
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Write(index)
}

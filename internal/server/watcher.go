package server

import (
	"context"
	"log"
	"path/filepath"
	"time"

	"github.com/fsnotify/fsnotify"
)

func WatchAndBroadcast(ctx context.Context, statePath string, hub *Hub) error {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		return err
	}
	defer watcher.Close()

	dir := filepath.Dir(statePath)
	cleanStatePath := filepath.Clean(statePath)

	if err := watcher.Add(dir); err != nil {
		return err
	}

	for {
		select {
		case <-ctx.Done():
			return nil
		case event, ok := <-watcher.Events:
			if !ok {
				return nil
			}
			if filepath.Clean(event.Name) != cleanStatePath {
				continue
			}
			if event.Op&(fsnotify.Write|fsnotify.Create) == 0 {
				continue
			}

			time.Sleep(50 * time.Millisecond)
			data, err := enrichedStateJSON(ctx, statePath)
			if err != nil {
				log.Printf("state watcher read failed: %v", err)
				continue
			}
			hub.Broadcast(data)
		case err, ok := <-watcher.Errors:
			if !ok {
				return nil
			}
			log.Printf("state watcher error: %v", err)
		}
	}
}

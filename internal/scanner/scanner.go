package scanner

import (
	"bytes"
	"fmt"
	"io"
	"io/fs"
	"os"
	"path/filepath"
	"sort"
	"strings"
)

func Summarise(root string) (string, error) {
	readme := "No README found"
	if data, err := os.ReadFile(filepath.Join(root, "README.md")); err == nil {
		readme = truncateRunes(string(data), 800)
	}

	entries := make([]string, 0, 60)
	err := filepath.WalkDir(root, func(path string, d fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		if path == root {
			return nil
		}

		rel, err := filepath.Rel(root, path)
		if err != nil {
			return err
		}
		rel = filepath.ToSlash(rel)
		depth := strings.Count(rel, "/") + 1

		if d.IsDir() {
			if shouldSkipDir(d.Name()) {
				return filepath.SkipDir
			}
			if depth >= 2 {
				entries = appendLimited(entries, rel+"/", 60)
				return filepath.SkipDir
			}
			return nil
		}

		if depth > 2 || shouldSkipFile(rel) {
			return nil
		}
		if binary, err := isBinaryFile(path); err == nil && binary {
			return nil
		}

		entries = appendLimited(entries, rel, 60)
		return nil
	})
	if err != nil {
		return "", err
	}

	sort.Strings(entries)
	return fmt.Sprintf("README:\n%s\n\nFile tree:\n%s", readme, strings.Join(entries, "\n")), nil
}

func appendLimited(entries []string, entry string, max int) []string {
	if len(entries) >= max {
		return entries
	}
	return append(entries, entry)
}

func shouldSkipDir(name string) bool {
	switch name {
	case ".git", "node_modules", "vendor", "dist":
		return true
	default:
		return false
	}
}

func shouldSkipFile(path string) bool {
	return strings.HasSuffix(path, ".sum")
}

func isBinaryFile(path string) (bool, error) {
	file, err := os.Open(path)
	if err != nil {
		return false, err
	}
	defer file.Close()

	buf := make([]byte, 8000)
	n, err := file.Read(buf)
	if err != nil && err != io.EOF {
		return false, err
	}
	return bytes.IndexByte(buf[:n], 0) >= 0, nil
}

func truncateRunes(value string, max int) string {
	runes := []rune(value)
	if len(runes) <= max {
		return value
	}
	return string(runes[:max])
}

package main

import (
	"encoding/json"
	"net/http"
	"time"
)

func seedGhostHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost && r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Add one "old" auth event 40 days ago
	lock.Lock()
	authLogs = append(authLogs, AuthLog{
		VID:       "VID_OLD_001",
		Method:    "face",
		Timestamp: time.Now().AddDate(0, 0, -40),
	})
	lock.Unlock()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]any{
		"status":   "seeded",
		"vid":      "VID_OLD_001",
		"days_ago": 40,
	})
}

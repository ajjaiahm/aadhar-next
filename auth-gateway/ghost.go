package main

import (
	"encoding/json"
	"net/http"
	"time"
)

type GhostScanRequest struct {
	InactiveDays int `json:"inactive_days"`
}

type GhostCandidate struct {
	VID      string  `json:"vid"`
	Risk     float64 `json:"risk"`
	Reason   string  `json:"reason"`
	LastSeen string  `json:"last_seen"`
}

type GhostScanResponse struct {
	Scanned int              `json:"scanned"`
	Flagged int              `json:"flagged"`
	Results []GhostCandidate `json:"ghost_candidates"`
}

func ghostScanHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req GhostScanRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		// allow empty body -> default
		req.InactiveDays = 365
	}

	if req.InactiveDays <= 0 {
		req.InactiveDays = 365
	}

	cutoff := time.Now().Add(-time.Duration(req.InactiveDays) * 24 * time.Hour)

	// snapshot logs
	lock.Lock()
	logCopy := make([]AuthLog, len(authLogs))
	copy(logCopy, authLogs)
	lock.Unlock()

	// last seen per VID
	lastSeen := map[string]time.Time{}
	for _, entry := range logCopy {
		t := entry.Timestamp
		if old, ok := lastSeen[entry.VID]; !ok || t.After(old) {
			lastSeen[entry.VID] = t
		}
	}

	results := []GhostCandidate{}
	for vid, ts := range lastSeen {
		if ts.Before(cutoff) {
			results = append(results, GhostCandidate{
				VID:      vid,
				LastSeen: ts.Format(time.RFC3339),
				Risk:     0.8,
				Reason:   "No authentication activity within inactive_days threshold",
			})
		}
	}

	resp := GhostScanResponse{
		Scanned: len(lastSeen),
		Flagged: len(results),
		Results: results,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

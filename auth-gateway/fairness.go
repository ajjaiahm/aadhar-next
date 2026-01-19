package main

import (
	"encoding/json"
	"net/http"
)

type FairnessResponse struct {
	Group        string             `json:"group"`
	Counts       map[string]int     `json:"counts"`
	EscalateRate map[string]float64 `json:"escalate_rate"`
	BlockRate    map[string]float64 `json:"block_rate"`
	Warnings     []string           `json:"warnings"`
}

func fairnessHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	group := r.URL.Query().Get("group")
	if group == "" {
		group = "method"
	}

	// snapshot decisions
	dlock.Lock()
	snap := make([]DecisionRecord, 0, len(lastDecision))
	for _, v := range lastDecision {
		snap = append(snap, v)
	}
	dlock.Unlock()

	counts := map[string]int{}
	escalates := map[string]int{}
	blocks := map[string]int{}

	for _, rec := range snap {
		key := "unknown"
		if group == "method" {
			key = rec.Method
		}

		counts[key]++
		if rec.Action == "ESCALATE" {
			escalates[key]++
		}
		if rec.Action == "BLOCK" {
			blocks[key]++
		}
	}

	escalateRate := map[string]float64{}
	blockRate := map[string]float64{}
	for k, c := range counts {
		if c == 0 {
			escalateRate[k] = 0
			blockRate[k] = 0
			continue
		}
		escalateRate[k] = float64(escalates[k]) / float64(c)
		blockRate[k] = float64(blocks[k]) / float64(c)
	}

	// basic disparity warning (demo)
	warnings := []string{}
	var min, max float64
	first := true
	for _, v := range escalateRate {
		if first {
			min, max = v, v
			first = false
			continue
		}
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	if !first && min >= 0 && (max-min) > 0.15 {
		warnings = append(warnings, "Escalation rate differs notably across groups. Check fairness/bias.")
	}

	resp := FairnessResponse{
		Group:        group,
		Counts:       counts,
		EscalateRate: escalateRate,
		BlockRate:    blockRate,
		Warnings:     warnings,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

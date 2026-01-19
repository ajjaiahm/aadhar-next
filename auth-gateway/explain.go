package main

import (
	"encoding/json"
	"net/http"
)

type ExplainReason struct {
	Rule     string  `json:"rule"`
	Weight   float64 `json:"weight"`
	Evidence string  `json:"evidence"`
}

type ExplainResponse struct {
	VID        string          `json:"vid"`
	Action     string          `json:"action"`
	Reason     string          `json:"reason"`
	Confidence float64         `json:"confidence"`
	RiskScore  float64         `json:"risk_score"`
	Method     string          `json:"method"`
	Reasons    []ExplainReason `json:"reasons"`
}

func explainHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	vid := r.URL.Query().Get("id")
	if vid == "" {
		http.Error(w, "missing query param: id", http.StatusBadRequest)
		return
	}

	// fetch last decision
	dlock.Lock()
	rec, ok := lastDecision[vid]
	dlock.Unlock()

	if !ok {
		http.Error(w, "no auth record found for this vid yet", http.StatusNotFound)
		return
	}

	reasons := []ExplainReason{}

	// Explain based on actual decision
	if rec.Reason == "FRAUD_SUSPECTED" {
		reasons = append(reasons, ExplainReason{
			Rule:     "FRAUD_SUSPECTED",
			Weight:   0.65,
			Evidence: "Rule-based fraud detector triggered for this VID.",
		})
	}

	if rec.Reason == "LOW_CONFIDENCE" {
		reasons = append(reasons, ExplainReason{
			Rule:     "LOW_CONFIDENCE",
			Weight:   0.55,
			Evidence: "Confidence too low caused risk to exceed threshold (0.5), hence escalation.",
		})
	}

	// Always include formula explanation (demo transparency)
	reasons = append(reasons, ExplainReason{
		Rule:     "RISK_FORMULA",
		Weight:   0.35,
		Evidence: "Risk = (1 - confidence) + random_noise(0..0.2).",
	})

	resp := ExplainResponse{
		VID:        rec.VID,
		Action:     rec.Action,
		Reason:     rec.Reason,
		Confidence: rec.Confidence,
		RiskScore:  rec.RiskScore,
		Method:     rec.Method,
		Reasons:    reasons,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

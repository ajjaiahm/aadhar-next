package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"time"
)

type AuthRequest struct {
	VID        string  `json:"vid"`
	Confidence float64 `json:"confidence"`
	Method     string  `json:"method"`
}

type AuthResponse struct {
	Status    string  `json:"status"`
	RiskScore float64 `json:"risk_score"`
	Action    string  `json:"action"`
}

func authenticate(w http.ResponseWriter, r *http.Request) {
	var req AuthRequest
	json.NewDecoder(r.Body).Decode(&req)

	rand.Seed(time.Now().UnixNano())
	risk := 1.0 - req.Confidence + rand.Float64()*0.2

	action := "ALLOW"
	if risk > 0.5 {
		action = "ESCALATE"
	}

	resp := AuthResponse{
		Status:    "OK",
		RiskScore: risk,
		Action:    action,
	}

	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/authenticate", authenticate)
	log.Println("Auth Gateway running on :8080")
	http.ListenAndServe(":8080", nil)
}

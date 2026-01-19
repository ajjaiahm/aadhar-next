package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"sync"
	"time"
)

type DecisionRecord struct {
	VID        string
	Action     string
	Reason     string
	RiskScore  float64
	Confidence float64
	Method     string
	Timestamp  time.Time
}

var (
	lastDecision = map[string]DecisionRecord{}
	dlock        sync.Mutex
)

// datasturucttres
type AuthRequest struct {
	VID        string  `json:"vid"`
	Confidence float64 `json:"confidence"`
	Method     string  `json:"method"`
}

type AuthResponse struct {
	Status    string  `json:"status"`
	RiskScore float64 `json:"risk_score"`
	Action    string  `json:"action"`
	Reason    string  `json:"reason"`
}

type AuthLog struct {
	VID       string
	Method    string
	Timestamp time.Time
}

// in-memory log store
var (
	authLogs []AuthLog
	lock     sync.Mutex
)

// helper funcs
func logAuth(vid string, method string) {
	lock.Lock()
	defer lock.Unlock()

	authLogs = append(authLogs, AuthLog{
		VID:       vid,
		Method:    method,
		Timestamp: time.Now(),
	})
}

// auth handler
func authenticate(w http.ResponseWriter, r *http.Request) {
	var req AuthRequest
	json.NewDecoder(r.Body).Decode(&req)

	//log request
	logAuth(req.VID, req.Method)

	//base risk calculation
	rand.Seed(time.Now().UnixNano())
	risk := 1.0 - req.Confidence + rand.Float64()*0.2

	action := "ALLOW"
	reason := "NORMAL"

	//fraud+adaptive logic
	if detectFraud(req.VID) {
		action = "BLOCK"
		reason = "FRAUD_SUSPECTED"
	} else if risk > 0.5 {
		action = "ESCALATE"
		reason = "LOW_CONFIDENCE"
	}

	resp := AuthResponse{
		Status:    "OK",
		RiskScore: risk,
		Action:    action,
		Reason:    reason,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)

	dlock.Lock()
	lastDecision[req.VID] = DecisionRecord{
		VID:        req.VID,
		Action:     action,
		Reason:     reason,
		RiskScore:  risk,
		Confidence: req.Confidence,
		Method:     req.Method,
		Timestamp:  time.Now(),
	}
	dlock.Unlock()

}

//main

func main() {
	http.HandleFunc("/authenticate", authenticate)

	// new endpoints
	http.HandleFunc("/explain", explainHandler)              // GET ?id=VID
	http.HandleFunc("/fairness", fairnessHandler)            // GET ?group=method
	http.HandleFunc("/cleanup/ghost-scan", ghostScanHandler) // POST

	// debug/demo endpoint (optional)
	http.HandleFunc("/debug/seed-ghost", seedGhostHandler) // GET/POST

	log.Println("Auth Gateway running on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

package main

import (
	"sync"
	"time"
)

type Attempt struct {
	Timestamp time.Time
}

var attempts = make(map[string][]Attempt)
var mu sync.Mutex

func detectFraud(vid string) bool {
	mu.Lock()
	defer mu.Unlock()

	now := time.Now()
	attempts[vid] = append(attempts[vid], Attempt{Timestamp: now})

	// Keep last 1 minute attempts
	recent := []Attempt{}
	for _, a := range attempts[vid] {
		if now.Sub(a.Timestamp) < time.Minute {
			recent = append(recent, a)
		}
	}
	attempts[vid] = recent

	// Rule: more than 5 attempts in 1 minute
	return len(recent) > 5
}

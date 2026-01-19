# API Reference

Base URL: http://127.0.0.1:8080

## 1) Authenticate
POST /authenticate

Body:
{
  "vid": "VID123",
  "confidence": 0.35,
  "method": "face"
}

Response:
{
  "status": "OK",
  "risk_score": 0.71,
  "action": "ESCALATE",
  "reason": "LOW_CONFIDENCE"
}

Actions:
- ALLOW
- ESCALATE
- BLOCK

## 2) Explainability
GET /explain?id=VID123

Response (example):
{
  "vid": "VID123",
  "action": "ESCALATE",
  "reason": "LOW_CONFIDENCE",
  "confidence": 0.35,
  "risk_score": 0.78,
  "method": "face",
  "reasons": [
    {"rule":"LOW_CONFIDENCE","weight":0.55,"evidence":"..."},
    {"rule":"RISK_FORMULA","weight":0.35,"evidence":"..."}
  ]
}

## 3) Fairness
GET /fairness?group=method

Response:
{
  "group":"method",
  "counts":{"face":3,"finger":1,"otp":2},
  "escalate_rate":{"face":1,"finger":0,"otp":1},
  "block_rate":{"face":0,"finger":0,"otp":0},
  "warnings":[]
}

## 4) Ghost Scan
POST /cleanup/ghost-scan

Body:
{
  "inactive_days": 30
}

Response:
{
  "scanned": 2,
  "flagged": 1,
  "ghost_candidates": [
    {
      "vid":"VID_OLD_001",
      "risk":0.8,
      "reason":"No authentication activity within inactive_days threshold",
      "last_seen":"2025-12-10T15:50:55+05:30"
    }
  ]
}

## 5) Demo Seed Ghost (Dev only)
GET /debug/seed-ghost

Seeds an old activity record (40 days ago) for demo.

Response:
{
  "status":"seeded",
  "vid":"VID_OLD_001",
  "days_ago": 40
}

---

# ML Engine API
Base URL: http://127.0.0.1:8000

Swagger:
- /docs

Note:
ML endpoints are stubs used for demonstrating architecture wiring.

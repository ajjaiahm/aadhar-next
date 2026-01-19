# Demo Script (3–5 minutes)

## 0) Start Services
- Go: auth-gateway → :8080
- Python: ml-engine → :8000
- Next: dashboard → :3000

## 1) Adaptive Authentication
Open /auth
- VID: VID123
- method: face
- confidence: 0.20
Click Authenticate
Highlight:
- ESCALATE due to low confidence

## 2) Explainability
Open /explain
Enter VID123
Click Explain
Highlight:
- reasons array
- chart shows relative weights
- evidence explains threshold logic

## 3) Fairness
Open /auth again:
Run 3 calls:
- face (0.2), finger (0.9), otp (0.2)
Open /fairness
Highlight:
- counts by method
- escalate rate differs
- sample-size warning (if < 20) (planned/improvement)

## 4) Ghost Cleanup
Open /ghost
Click Seed Old VID
Click Scan
Highlight:
- flagged candidate shows last_seen + reason
- civic impact narrative: ghost identities must be reviewed to prevent misuse

## 5) Close with Official Dataset Story
Mention:
- Enrolment analytics supports inclusion monitoring
- Demographic updates support churn & anomaly monitoring
- Biometric updates support biometric lifecycle and reducing exclusion

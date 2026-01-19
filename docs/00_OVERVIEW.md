# Aadhaar-NEXT — Overview

Aadhaar-NEXT is a privacy-first, adaptive multimodal digital identity prototype designed for the UIDAI hackathon.

It demonstrates:
- Adaptive authentication (ALLOW / ESCALATE / BLOCK)
- Explainability (why a decision was made)
- Fairness analytics (disparity monitoring across groups)
- Ghost/deceased account cleanup logic (inactivity-based detection)
- Official dataset-based analytics dashboards (enrolment, demographic updates, biometric updates)
- Synthetic-data-driven development with no real Aadhaar data

## Key Idea

Identity systems must balance:
- Inclusion (reduce biometric exclusion)
- Fraud resistance (detect suspicious patterns)
- Privacy-by-design (use virtual IDs, avoid raw identifiers)
- Auditability (explain decisions & monitor fairness)

Aadhaar-NEXT uses:
- A Go Auth Gateway for authentication and analytics APIs
- A Python FastAPI ML engine (stubbed models) for quality/liveness scoring
- A Next.js dashboard UI for interactive visualization and demo flow

## What’s Included Today (MVP)

Frontend routes:
- /auth: Auth tester (frontend → backend)
- /explain: Explainability view + chart
- /fairness: Fairness charts + warnings
- /ghost: Ghost scan + demo seed flow

Backend endpoints:
- POST /authenticate
- GET /explain?id=VID
- GET /fairness?group=method
- POST /cleanup/ghost-scan
- GET /debug/seed-ghost (demo-only)

Datasets:
- Aadhaar Enrolment (time + geo + age buckets)
- Aadhaar Demographic Update (time + geo + age buckets)
- Aadhaar Biometric Update (time + geo + age buckets)

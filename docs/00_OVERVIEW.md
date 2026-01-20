# Aadhaar-NEXT — Consolidated Documentation (UIDAI Hackathon)

## Problem
Large-scale identity systems face: biometric exclusion, fraud, privacy concerns, and operational friction during updates (e.g., KYC mismatches across institutions).

## Approach
Aadhaar-NEXT is a privacy-first prototype that combines:
- Adaptive multimodal authentication (face/finger/OTP)
- Rule-based fraud detection (burst patterns, duplicates, risk thresholds)
- Explainable decisions (human-readable “why this action”)
- Fairness monitoring (rates by group, sample-size warnings)
- Ghost/deceased account candidate flagging (inactive activity scan)
- Dataset-driven analytics and dashboards using UIDAI aggregated datasets

## What this repo contains
- **auth-gateway/** (Go): authentication gateway + fraud + explainability + fairness + ghost scan endpoints
- **ml-engine/** / **app/** (Python): ML stubs / analytics services (varies by branch phase)
- **dashboard/** (Next.js): UI pages for auth, explainability, fairness, and cleanup workflows
- **data/**: UIDAI datasets and cleaned derivatives
- **scripts/**: dataset loading/cleaning scripts
- **docs/**: full documentation pack (this folder)

## Deliverables
- Working backend APIs (Go)
- Working UI dashboard (Next.js)
- Dataset handling + preprocessing scripts (Python)
- Documentation aligned with UIDAI submission requirements

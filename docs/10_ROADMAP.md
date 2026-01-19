# Roadmap

## Short-term (Hackathon)
- Implement official dataset analytics endpoints:
  - /analytics/enrolment/*
  - /analytics/demographic/*
  - /analytics/biometric/*
- Add 3 dashboard pages:
  - /enrolment /demographic /biometric
- Add anomaly alerts tables with explainable baseline and z-score
- Finalize docs + screenshots

## Medium-term
- Persist logs to Postgres/Redis instead of in-memory
- Real ML models for liveness/quality/dedupe
- Add authentication + role-based access to dashboards
- Add CI tests for APIs and frontend build

## Long-term
- Production-grade privacy controls
- Cryptographic template protection
- Differential privacy for certain analytics

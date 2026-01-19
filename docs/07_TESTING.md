# Testing

## Manual API Smoke Tests (PowerShell)
Authenticate:
curl -Method POST http://127.0.0.1:8080/authenticate -ContentType "application/json" -Body '{"vid":"VID123","confidence":0.2,"method":"face"}'

Explain:
curl "http://127.0.0.1:8080/explain?id=VID123"

Fairness:
curl "http://127.0.0.1:8080/fairness?group=method"

Seed ghost:
curl "http://127.0.0.1:8080/debug/seed-ghost"

Scan ghost:
curl -Method POST "http://127.0.0.1:8080/cleanup/ghost-scan" -ContentType "application/json" -Body '{"inactive_days":30}'

## UI Smoke Tests
- /auth returns JSON
- /explain shows chart
- /fairness shows charts
- /ghost shows seeded VID in table

## Common Issues
- Port 8080 already in use → stop prior Go process or kill PID
- Next.js lock error → stop other next dev instance
- If CORS occurs → add CORS middleware in Go (optional; currently working in local setup)

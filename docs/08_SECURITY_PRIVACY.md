# Security & Privacy

## Data Handling
- No personal identifiers are collected or stored
- Demo uses Virtual IDs (VID)
- Official datasets are aggregated and non-identifying
- Synthetic data is used for development and demo

## Privacy-by-Design Techniques (prototype)
- Tokenization / VID concept
- Avoid storing raw identifiers
- Use aggregated metrics for dashboards
- Explainability focuses on rule outputs, not sensitive attributes

## Demo Debug Endpoints
/debug/seed-ghost is demo-only.
In production:
- restrict behind env flag or authentication

# Fairness & Explainability

## Explainability
Every auth decision should answer:
- What was the decision?
- Why was it made?
- Which rules/signals influenced it most?
- What threshold was crossed?

Explain endpoint returns:
- decision summary (action, reason, risk, confidence)
- weighted reasons
- evidence strings

## Fairness
Goal: monitor whether system behavior is uneven across groups.

Current fairness grouping:
- by authentication method (face/finger/otp)

Metrics:
- counts
- escalate_rate
- block_rate
- warnings (disparity flags; extendable)

Planned fairness extensions:
- geographic fairness using official datasets
- age bucket fairness signals
- sample size stability warnings (< 20)

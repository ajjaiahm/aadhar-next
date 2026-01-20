## Aadhaar-NEXT Architecture

1. User interacts with Next.js frontend
2. Authentication request sent to Go Auth Gateway
3. Auth Gateway queries ML Engine for confidence
4. Adaptive logic decides ALLOW or ESCALATE
5. All events logged for fraud & fairness analysis

Privacy:
- Virtual IDs only
- No Aadhaar numbers
- Synthetic biometric templates

# Official UIDAI Hackathon Datasets

All datasets are aggregated and do not contain personal identifiers. They support descriptive analytics, trend analysis, and anomaly monitoring.

## Dataset 1 — Aadhaar Enrolment
Purpose:
- Monitor enrolment coverage and inclusion patterns

Schema:
- date
- state
- district
- pincode
- age_0_5
- age_5_17
- age_18_greater

Insights:
- Time trend of enrolments
- Geographic comparison (state/district/pincode)
- Age distribution coverage (child inclusion)
- Under-enrolment pockets (alerts)

## Dataset 2 — Aadhaar Demographic Updates
Purpose:
- Monitor demographic correction/updates across regions and time

Schema (observed):
- date
- state
- district
- pincode
- demo_age_5_17
- demo_age_17_  (normalize to demo_age_17_plus)

Insights:
- Update spikes by district/pincode
- “Churn index”: high update rates indicate operational pressure or risk signals
- Fairness view: differential update access across geographies

## Dataset 3 — Aadhaar Biometric Updates
Purpose:
- Track biometric refresh lifecycle (esp. children transitioning to adulthood)

Schema (observed):
- date
- state
- district
- pincode
- bio_age_5_17
- bio_age_17_  (normalize to bio_age_17_plus)

Insights:
- Biometric refresh coverage by region
- Under-refresh pockets → potential risk for biometric exclusion
- Spike anomalies (drives vs suspicious bursts)

## Data Folder Convention
Recommended:
data/official/enrolment/
data/official/demographic/
data/official/biometric/

Do NOT commit large official CSVs to git (use .gitignore or Git LFS).
Keep a small sample in data/samples/ for reproducible demos.

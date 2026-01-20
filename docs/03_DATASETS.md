# Datasets Used (UIDAI)

This project uses UIDAI-provided aggregated datasets (no real Aadhaar numbers, no resident-level PII).

## 1) Aadhaar Enrolment Dataset
**What it represents:** enrolments aggregated by time and geography (state/district/PIN) and age buckets (0–5, 5–17, 18+).
**Files:** `data/aadhaar_enrolment/*`
**Used for:** trend analysis, geo comparisons, age-share analysis, anomaly spikes.

## 2) Aadhaar Demographic Update Dataset
**What it represents:** aggregated updates to demographic attributes (name, address, DOB, gender, mobile) across time/geography.
**Used for:** update-frequency insights, regional patterns, operational load and anomaly patterns.

## 3) Aadhaar Biometric Update Dataset
**What it represents:** aggregated biometric updates (fingerprints/iris/face) over time/geography.
**Used for:** lifecycle patterns (child-to-adult), modality update trends, anomaly and surge analysis.

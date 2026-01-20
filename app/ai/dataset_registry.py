from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]

DATASETS = {
    "biometric": {
        "paths": list(
            (BASE_DIR / "data/aadhaar_biometric_updates")
            .glob("api_data_aadhar_biometric_*.csv")
        )
    },
    "demographic": {
        "paths": list(
            (BASE_DIR / "data/aadhaar_demographic_updates")
            .glob("api_data_aadhar_demographic_*.csv")
        )
    },
    "enrolment": {
        "paths": (
            list(
                (BASE_DIR / "data/aadhaar_enrolment/raw_parts")
                .glob("api_data_aadhar_enrolment_*.csv")
            )
            + [
                BASE_DIR / "data/aadhaar_enrolment/enrolment_cleaned.csv"
            ]
        )
    }
}

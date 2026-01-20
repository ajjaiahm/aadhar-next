def route_dataset(intent: str) -> str:
    """
    Routes detected intent to the correct UIDAI dataset.
    """
    if intent.startswith("biometric"):
        return "biometric"

    if intent.startswith("demographic"):
        return "demographic"

    return "enrolment"

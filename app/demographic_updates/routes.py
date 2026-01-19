from fastapi import APIRouter, Query
from . import analytics

router = APIRouter()

@router.get("/summary")
def get_summary():
    return analytics.summary()

@router.get("/demographic-wise")
def get_demo_wise():
    return analytics.demographic_wise()

@router.get("/state")
def get_state_wise():
    return analytics.state_wise()

@router.get("/district")
def get_district_wise(state: str = Query(...)):
    return analytics.district_wise(state)

@router.get("/pin")
def get_pin_wise(pincode: int = Query(...)):
    return analytics.pin_wise(pincode)

@router.get("/trends")
def get_trends():
    return analytics.trends()

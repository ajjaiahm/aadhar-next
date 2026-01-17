import random
import uuid
import json

N = 200

regions = ["KA", "TN", "MH", "UP", "RJ"]
genders = ["M", "F"]

def random_embedding(dim=128):
    return [round(random.uniform(-1, 1), 4) for _ in range(dim)]

users = []

for i in range(N):
    user = {
        "vid": str(uuid.uuid4()),
        "name": f"User{i}",
        "age": random.randint(18, 80),
        "gender": random.choice(genders),
        "region": random.choice(regions),
        "face_embedding": random_embedding(),
        "fingerprint_hash": uuid.uuid4().hex,
        "status": "ACTIVE"
    }
    users.append(user)

with open("synthetic_users.json", "w") as f:
    json.dump(users, f, indent=2)

print("Synthetic Aadhaar-like dataset generated.")

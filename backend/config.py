from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017/"

client = MongoClient(MONGO_URI)

db = client["careerpilot_ai"]
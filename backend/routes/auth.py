from flask import Blueprint, request, jsonify
from models.user import users_collection
import bcrypt

auth = Blueprint("auth", __name__)

@auth.route("/register", methods=["POST"])
def register():

    data = request.json

    full_name = data.get("fullName")
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    # Check if email already exists
    if users_collection.find_one({"email": email}):
        return jsonify({"message": "Email already exists!"}), 400
    # Check if username already exists
    if users_collection.find_one({"username": username}):
        return jsonify({"message": "Username already exists!"}), 400

    # Hash password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    )

    user = {
        "fullName": full_name,
        "username": username,
        "email": email,
        "password": hashed_password.decode("utf-8"),

        # Initial Dashboard Values
        "level": 1,
        "xp": 0,
        "streak": 0
    }
    
    users_collection.insert_one(user)

    return jsonify({"message": "Account Created Successfully!"}), 201
@auth.route("/login", methods=["POST"])
def login():

    data = request.json

    username_or_email = data.get("username")
    password = data.get("password")

    user = users_collection.find_one({
        "$or": [
            {"email": username_or_email},
            {"username": username_or_email}
        ]
    })

    if not user:
        return jsonify({"message": "User not found!"}), 404

    if not bcrypt.checkpw(
        password.encode("utf-8"),
        user["password"].encode("utf-8")
    ):
        return jsonify({"message": "Invalid password!"}), 401

    return jsonify({
        "message": "Login Successful!",
        "user": {
            "fullName": user["fullName"],
            "username": user["username"],
            "email": user["email"],
            "level": user["level"],
            "xp": user["xp"],
            "streak": user["streak"]
        }
    }), 200
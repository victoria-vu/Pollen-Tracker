from flask import Flask, request, jsonify, session
from model import connect_to_db, db
import model
from flask_cors import CORS


app = Flask(__name__)
app.app_context().push()
app.secret_key = "dev"
CORS(app)

@app.route("/signup", methods=["POST"])
def create_user():
    """Create a new user."""

    email = request.json["email"]
    password = request.json["password"]
    fname = request.json["fname"]
    lname = request.json["lname"]
    zipcode = request.json["zipcode"]

    existing_user = model.get_user_by_email(email)

    if existing_user:
        return jsonify({
            "error": "User already exists. Please use another email."
        })
    
    user = model.create_user(email, password, fname, lname, zipcode)
    db.session.add(user)
    db.session.commit()

    return jsonify({
        "status": "Success"
    })


@app.route("/login", methods=["POST"])
def login_user():
    """Login a user."""

    email = request.json["email"]
    password = request.json["password"]

    user = model.get_user_by_email(email)

    if not user:
        return jsonify({
            "error": "User does not exist. Please create an account."
        })
    
    if user.password != password:
        return jsonify({
            "error": "Incorrect password. Please try again."
        })

    session["user_id"] = user.user_id
    session["name"]= user.fname
    session["email"] = user.email
    
    return jsonify({
        "status": "Success"
    })


if __name__ == "__main__":
    connect_to_db(app)
    app.run(debug=True, host="0.0.0.0")
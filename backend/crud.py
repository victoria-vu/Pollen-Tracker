"""CRUD Operations: Functions to create, retrieve, update, or delete data from the database."""

from model import User, connect_to_db

### FUNCTIONS TO CREATE ###
def create_user(email, password, fname, lname, zipcode):
    """Create and return a new user."""

    user = User(
        email=email, 
        password=password, 
        fname=fname,
        lname=lname, 
        zipcode=zipcode
    )

    return user


### FUNCTIONS TO RETRIEVE ###
def get_user_by_email(email):
    """Return a user with a given email."""

    return User.query.filter(User.email == email).first()


if __name__ == "__main__":
    from server import app
    connect_to_db(app)
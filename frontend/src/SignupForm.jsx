import React, { useState } from "react";
import axios from "axios";

function SignUpForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState("");

    const handleFirstName = e => {
        setFirstName(e.target.value)
    }

    const handleLastName = e => {
        setLastName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleZipcode = e => {
        setZipcode(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/signup", {
            email: email,
            password: password,
            fname: firstName,
            lname: lastName,
            zipcode: zipcode 
        })
        .then((res) => {
            console.log(res.data.status)
        })
        .catch((err) => console.error(err.message))
    }
    
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="fname">First Name:</label>
                    <br />
                    <input type="text" name="fname" id="fname" onChange={handleFirstName} value={firstName} />
                    <br />
                </div>

                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <br />
                    <input type="text" name="lname" id="lname" onChange={handleLastName} value={lastName} />
                    <br />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="email" name="email" id="email" onChange={handleEmail} value={email} />
                    <br />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input type="password" name="password" id="password" onChange={handlePassword} value={password} required minLength={8} />
                </div>

                <div>
                    <label htmlFor="zipcode">Zipcode:</label>
                    <br />
                    <input type="text" name="zipcode" id="zipcode" onChange={handleZipcode} value={zipcode} required maxLength={5} />
                    <br />
                </div>

                <button>Sign Up</button>

            </form>
        </div>
    );
}

export default SignUpForm;


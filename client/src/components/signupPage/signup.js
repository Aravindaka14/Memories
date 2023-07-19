import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpState, setSignUpState] = useState({})

    const sendSignUpInput = async (e) => {
        e.preventDefault()
        // console.log(signUpState)
        axios({
            url: "http://localhost:3005/signUp",
            method: "POST",
            headers: {
                // header content comes here
            },
            data: signUpState
        }).then((res) => {
            // console.log(res)
            navigate("/")
        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <div>
            <h1 id="register-h1">
                SignUp page
            </h1>
            <br></br>
            <div id="div-container">
                <div id="left-div">
                    <img src="photo3.webp" alt="register" />
                </div>
                <div id="right-div">
                    <form id="reg-form" onSubmit={sendSignUpInput}>
                        <label>Name</label>
                        <input type="text" placeholder="name..." onChange={(e) => { setSignUpState({ ...signUpState, name: e.target.value }) }} required={true}></input>
                        <label>Email</label>
                        <input type="email" placeholder="email..." onChange={(e) => { setSignUpState({ ...signUpState, email: e.target.value }) }} required={true}></input>
                        <label>Password</label>
                        <input type="password" placeholder="********" onChange={(e) => { setSignUpState({ ...signUpState, password: e.target.value }) }} required={true}></input>
                        <label>Phone no.</label>
                        <input type="number" placeholder="phone no...." onChange={(e) => { setSignUpState({ ...signUpState, phone: e.target.value }) }}></input>
                        <button className="form-btn2" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <footer id="register-footer">
                &copy; 2023 - All Rights Reserved.
            </footer>
        </div>
    )
}

export default SignUp;
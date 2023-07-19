import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    let [loginState, setLoginState] = useState({})
    const sendLoginInput = async (e) => {
        e.preventDefault()
        // console.log(loginState)
        axios({
            url: "http://localhost:3005/login",
            method: "POST",
            data: { email: loginState.email, password: loginState.password }
        }).then((res) => {
            // console.log(data)
            localStorage.setItem("authorization", res.data.authToken)
            // authToken stored in cookie
            // document.cookie= `authToken : ${res.data.authToken}`
        }).catch((err) => {
            console.log(err)
        })
    }
    const naviSignUp = () => {
        navigate("/signUp")
    }
    return (
        <div>
            <h1 id="login-h1">
                Login page
            </h1>
            <br></br>
            <div id="div-container">
                <div id="left-div">
                    <img src="photo3.webp" alt="login" />
                </div>
                <div id="right-div">
                    <form id="log-form" onSubmit={sendLoginInput}>
                        <label >Email</label>
                        <input type="email" placeholder="email..." onChange={(e) => { setLoginState({ ...loginState, email: e.target.value }) }} required={true}></input>
                        <label>Password</label>
                        <input type="password" placeholder="password..." onChange={(e) => { setLoginState({ ...loginState, password: e.target.value }) }} required={true}></input>
                        <button className="form-btn2" type="submit">Submit</button>
                    </form>
                    <div id="navigate-section">
                        <h3>Don't have an account <button className="form-btn" onClick={() => { naviSignUp() }}>SignUp</button></h3>

                    </div>
                </div>
            </div>
            <footer id="login-footer">
                &copy; 2023 - All Rights Reserved.
            </footer>
        </div>
    )
}

export default Login;
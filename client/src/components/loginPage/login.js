import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css'

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
            navigate('/home')
            // authToken stored in cookie
            // document.cookie= `authToken : ${res.data.authToken}`
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleRegister = () => {
        navigate("/register")
    }
    return (
        <div id="pageContainer">
            <br></br>
            <div id="innerContainer">
                <img src="bg-01.jpg" alt='coverPhoto' />
                <div className="login-right-div">
                    <h3 id='login-title'>Login Page</h3>
                    <form id="login-form" onSubmit={sendLoginInput}>
                        <label >Your Email:</label>
                        <input type="email" placeholder="email..." onChange={(e) => { setLoginState({ ...loginState, email: e.target.value }) }} required={true}></input>
                        <label>Password:</label>
                        <input type="password" placeholder="password..." onChange={(e) => { setLoginState({ ...loginState, password: e.target.value }) }} required={true}></input>
                        <button className="login-form-btn" type="submit">Submit</button>
                    </form>
                    <div id="navigate-section">
                        <p>Don't have an account: <button className="form-btn" onClick={() => { handleRegister() }}>Register</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
    const navigate = useNavigate();
    let [loginState, setLoginState] = useState({})
    let [userErr, setUserErr] = useState('')

    const sendLoginInput = async (e) => {
        e.preventDefault()
        // console.log(loginState)
        axios({
            // url: "http://localhost:3005/login",
            url: "https://memories-cwyy.onrender.com/login",
            method: "POST",
            data: { email: loginState.email, password: loginState.password }
        }).then((response) => {
            localStorage.setItem("userName", response.data.name)
            navigate('/home')
        }).catch((err) => {
            // console.log(err.response.data)
            setUserErr(err.response.data)
        })
    }
    const handleRegister = () => {
        navigate("/register")
    }
    const handleUserErr = () => {
        setUserErr("")
    }
    return (
        <div id="pageContainer">
            {userErr !== "" ? <div className="errContainer"> <div className="errBox"> <h1>{userErr}</h1><button onClick={() => { handleUserErr() }}>Retry</button></div></div> : null}
            <br></br>
            <div id="innerContainer">
                <img src="bg-01.jpg" alt='coverPhoto' />
                <div className="login-right-div">
                    <h3 id='login-title'>Login Page</h3>
                    <form id="login-form" onSubmit={sendLoginInput}>
                        <label for='loginEmail'>Your Email:</label>
                        <input id='loginEmail' type="email" placeholder="email..." onChange={(e) => { setLoginState({ ...loginState, email: e.target.value }) }} required={true}></input>
                        <label for='loginPassword'>Password:</label>
                        <input id="loginPassword" type="password" placeholder="password..." onChange={(e) => { setLoginState({ ...loginState, password: e.target.value }) }} required={true}></input>
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
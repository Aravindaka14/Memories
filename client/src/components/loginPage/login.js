import React from "react";
import { useState } from "react";
import axios from "axios";
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    let [loginState, setLoginState] = useState({})
    let [userErr, setUserErr] = useState('')

    const sendLoginInput = (e) => {
        e.preventDefault()

        // console.log(loginState)
        //local host - url: "http://localhost:3005/login",

        axios({
            url: "https://memories-server-delta.vercel.app/login",           
            method: "POST",
            data: { email: loginState.email, password: loginState.password }
        }).then((response) => {
            localStorage.setItem("userName", response.data[0].name)
            navigate('/layout/home')
        }).catch((err) => {
            
            //To check response data from the error
            // console.log(err.response.data)
            setUserErr(err.response.data)
        })
    }
    const handlePath = (path) => {
        navigate(`/${path}`)
    }
    return (

       <div id="pageContainer" >
            {userErr !== "" ? <div className="errContainer"> <div className="errBox"> <h2>{userErr}</h2><button onClick={() => { setUserErr('') }}>Retry</button></div></div> : null}
            {/* <br></br> */}
            <div id="innerContainer">
                    <img src="bg-02.png" alt="coverPhoto"/>
                <div className="loginRightDiv">
                    <h3 id='loginTitle'>Welcome back!</h3>
                    <form id="loginForm" onSubmit={sendLoginInput}>
                        <label htmlFor='loginEmail'>Your Email:</label>
                        <input id='loginEmail' type="email" placeholder="email..." onChange={(e) => { setLoginState({ ...loginState, email: e.target.value }) }} required={true}></input>
                        <label htmlFor='loginPassword'>Password:</label>
                        <input id="loginPassword" type="password" placeholder="password..." onChange={(e) => { setLoginState({ ...loginState, password: e.target.value }) }} required={true}></input>
                        <button className="loginFormBtn" type="submit">Submit</button> 
                    </form>
                    <div id="navSectionLog">
                        <p>Don't have an account: <button className="formBtn" onClick={() => { handlePath('register') }}>Register</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login;
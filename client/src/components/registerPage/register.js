import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './register.css'

const Register = () => {
    const navigate = useNavigate();
    let [registerState, setRegisterState] = useState({})
    let [userErr, setUserErr] = useState('')

    const sendRegisterInput = async (e) => {
        e.preventDefault()
        axios({
            url: "http://localhost:3005/register",
            method: "POST",
            data: registerState
        }).then((res) => {
            navigate('/')
        }).catch((err) => {
            console.log(err.response.data)
            // alert(`${err.response.data}`)
            setUserErr(err.response.data)
        })
    }
    const handleLogin = () => {
        navigate("/")
    }
    const handleUserErr = () => {
        setUserErr("")
    }
    return (
        <div id="pageContainer">
            {userErr !== "" ? <div className="errContainer"> <div className="errBox"> <h1>{userErr}</h1><button onClick={() => { handleUserErr() }}>Retry</button></div></div> : null}
            <br></br>
            <div id="innerContainerReg">
                <img src="bg-01.jpg" alt='coverPhoto' />
                <div className="register-right-div">
                    <h3 id='register-title'>Register Page</h3>
                    <form id="register-form" onSubmit={sendRegisterInput}>
                        <label for='regName'>Nick name:</label>
                        <input id='regName' type="text" placeholder="name..." onChange={(e) => { setRegisterState({ ...registerState, name: e.target.value }) }} required={true}></input>
                        <label for='regEmail'>Your Email:</label>
                        <input id='regEmail' type="email" placeholder="email..." onChange={(e) => { setRegisterState({ ...registerState, email: e.target.value }) }} required={true}></input>
                        <label for='regPassword'>Password:</label>
                        <input id='regPassword' type="password" placeholder="password..." onChange={(e) => { setRegisterState({ ...registerState, password: e.target.value }) }} required={true}></input>
                        <label for='regPhone'>Phone no.</label>
                        <input id='regPhone' type="number" placeholder="phone no...." onChange={(e) => { setRegisterState({ ...registerState, phone: e.target.value }) }}></input>
                        <button className="login-form-btn" type="submit">Submit</button>
                    </form>
                    <div id="navigate-section-reg">
                        <p>Already have an account: <button className="form-btn" onClick={() => { handleLogin() }}>Login</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;
import React from "react";
import { useState } from "react";
import axios from "axios";
import './register.css'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    let [registerState, setRegisterState] = useState({})
    let [userErr, setUserErr] = useState('')

    const sendRegisterInput = async (e) => {
        e.preventDefault()
        axios({
            url: "http://localhost:3005/register",
            // url: "https://memories-cwyy.onrender.com/register",
            method: "POST",
            data: registerState
        }).then((res) => {
            navigate("/")
        }).catch((err) => {
            // console.log(err.response.data)
            // alert(`${err.response.data}`)
            setUserErr(err.response.data)
        })
    }
    const handlePath = (path) => {
        navigate(`/${path}`)
    }
    return (
        <div id="pageContainer">
            {userErr !== "" ? <div className="errContainer"> <div className="errBox"> <h1>{userErr}</h1><button onClick={() => { setUserErr('') }}>Retry</button></div></div> : null}
            <br></br>
            <div id="innerContainerReg">
                <img src="bg-01.jpg" alt='coverPhoto' />
                <div className="registerRightDiv">
                    <h3 id='registerTitle'>Register Page</h3>
                    <form id="registerForm" onSubmit={sendRegisterInput}>
                        <label htmlFor='regName'>Nick name:</label>
                        <input id='regName' type="text" placeholder="name..." onChange={(e) => { setRegisterState({ ...registerState, name: e.target.value }) }} required={true}></input>
                        <label htmlFor='regEmail'>Your Email:</label>
                        <input id='regEmail' type="email" placeholder="email..." onChange={(e) => { setRegisterState({ ...registerState, email: e.target.value }) }} required={true}></input>
                        <label htmlFor='regPassword'>Password:</label>
                        <input id='regPassword' type="password" placeholder="password..." onChange={(e) => { setRegisterState({ ...registerState, password: e.target.value }) }} required={true}></input>
                        <label htmlFor='regPhone'>Phone no.</label>
                        <input id='regPhone' type="tel" placeholder="phone no...." onChange={(e) => { setRegisterState({ ...registerState, phone: e.target.value }) }}></input>
                        <button className="loginFormBtn" type="submit">Submit</button>
                    </form>
                    <div id="navSectionReg">
                        <p>Already have an account: <button className="formBtn" onClick={() => { handlePath("") }}>Login</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;
import React from "react";
import "./postWidget.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import FileBase64 from "react-file-base64";

const PostWidget = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const handleData = async (e) => {
        e.preventDefault()
        // "http://localhost:3005/postwidget"
        await axios({ method: "POST", url: "https://memories-cwyy.onrender.com/postwidget", data: post }).catch((err) => {
            console.log(err)
        }).finally(() => {
            navigate("/home")
        })
    }
    const naviForm = (path) => {
        navigate(`/${path}`)
    }
    const logout = () => {
        navigate('/')
    }
    return (
        <div className="formDiv">
            <header>
                <i className="fa fa-instagram"></i>
                <span>Memories</span>
                <select onChange={() => logout()}>
                    <option>Username</option>
                    <option><button >Logout</button></option>
                </select>
                <button className="camera" onClick={() => naviForm("postWidget")}><i className="fa fa-camera"></i></button>
                <button className="camera" onClick={() => naviForm("home")}><i className="fa fa-home"></i></button>
            </header>
            <form id="post-form" onSubmit={handleData} >
                <h3 id="post-form-title">Share your post here...</h3>
                <div id="filebase64">
                    <FileBase64 type="file" onDone={(base64) => { setPost({ ...post, image: base64 }) }} required={true} ></FileBase64>
                </div>
                <input className="post-form-input" type="text" placeholder="Author..." onChange={(e) => { setPost({ ...post, name: e.target.value }) }} required={true} />
                <input className="post-form-input" type="text" placeholder="Location..." onChange={(e) => { setPost({ ...post, location: e.target.value }) }} required={true} />
                <input className="post-form-input" type="text" placeholder="Description..." onChange={(e) => { setPost({ ...post, description: e.target.value }) }} required={true} />
                <button className="post-form-btn" type="submit">Post</button>
            </form>
            <footer id="form-footer">
                &copy; 2023 - All Rights Reserved.
            </footer>
        </div>
    )
}

export default PostWidget;
import React from "react";
import "./postWidget.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import FileBase64 from "react-file-base64";

const PostWidget = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState({})

    //To get the name from local storage
    // const name = localStorage.getItem("userName")

    const handleData = async (e) => {
        e.preventDefault()
        
    // local host  -  url: "http://localhost:3005/postwidget" 

        await axios({ method: "POST", url:"https://memories-server-delta.vercel.app/postwidget", data: post }).catch((err) => {
            console.log(err)
        }).finally(() => {
            navigate("/layout/home")
        })
    }
    return (
        <div id="pageContainer">
            <main id="postWidMain">
                <form id="postForm" onSubmit={handleData} >
                    <h3 id="postFormTitle">Share your post here...</h3>
                    <div id="filebase64">
                        <FileBase64 type="file" onDone={(base64) => { setPost({ ...post, image: base64 }) }} required={true} ></FileBase64>
                    </div>
                    <input className="postFormInput" type="text" placeholder="Author..." onChange={(e) => { setPost({ ...post, name: e.target.value }) }} required={true} />
                    <input className="postFormInput" type="text" placeholder="Location..." onChange={(e) => { setPost({ ...post, location: e.target.value }) }} required={true} />
                    <input className="postFormInput" type="text" placeholder="Description..." onChange={(e) => { setPost({ ...post, description: e.target.value }) }} required={true} />
                    <button className="postFormBtn" type="submit">Post</button>
                </form>
            </main>
        </div>
    )
}

export default PostWidget;
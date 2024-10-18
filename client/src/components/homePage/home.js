import React from "react";
import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([])
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate()
    const name = localStorage.getItem("userName")

    useEffect(() => {
        //"https://memories-cwyy.onrender.com/home" 
        axios.get("http://localhost:3005/home").then((data) => {
            setPosts(data.data.reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [posts])

    const likeHandler = (post) => {
        const id = post._id
        //"https://memories-cwyy.onrender.com/home/update" 
        axios({ url: "http://localhost:3005/home/update", method: "PUT", data: { id: id } }).then((post) => {
            setUpdate(!update)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handlePath = (path) => {
        navigate(`/${path}`)
    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for a smooth scrolling animation
          });
          
    }  
    const logout = () => {
        localStorage.removeItem('userName')
        navigate("/")
    }
    return (
        <div className="postDiv">
            <header>
                <i className="fa fa-instagram" ></i>
                <span>Memories</span>
                <select onChange={() => logout()}>
                    <option>{name}</option>
                    <option>Logout</option>
                </select>
                <button className="camera" onClick={() => handlePath("home")}><i className="fa fa-home"></i></button>
                <button className="camera" onClick={() => handlePath("postWidget")}><i className="fa fa-camera"></i></button>
            </header>
            <main>
                {
                    posts.length === 0 ? <h2 style={{ textAlign: "center", fontFamily: "Rubik sans-serif" }}><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>There is no content.</h2> :
                        posts.map((post, i) => {

                            return (
                                <div className="contentDiv" key={i}>
                                    <i className="fa fa-user-circle"></i>
                                    <h5 className="userName">{post.name}</h5>
                                    <i className="fa fa-bookmark"></i>
                                    <p className="userLoc">{post.location}</p>
                                    <div className="imgContainer">
                                    <img className="postImage" src={post.image.base64} alt="" />
                                    </div>
                                    <button className="post-btn" onClick={() => { likeHandler(post) }}><i className="fa fa-heart"></i></button><span className="postLikes">{post.likes}</span>
                                    <button className="post-btn2"><i className="fa fa-share-alt"></i></button>
                                    <p className="postDate">{post.date}</p>
                                    {/* <p className="postLikes">{post.likes} Likes</p> */}
                                    <p className="postDes">{post.description}</p>
                                </div>
                            )
                        })}
                        <p onClick={()=>{scrollToTop()}}>Scroll To Top</p>
            </main >
            <footer id="home-footer">
                &copy; 2024 - All Rights Reserved.
            </footer>
        </div >
    )
};

export default Home;
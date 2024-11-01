import React from "react";
import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [posts, setPosts] = useState([])
    const [update, setUpdate] = useState(false)

    // local host - url
    // http://localhost:3005/home
    
    useEffect(() => {
        axios.get("https://memories-server-sigma.vercel.app/home").then((data) => {
            setPosts(data.data.reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [posts])

    const likeHandler = (post) => {
        const id = post._id

    //local host - url
    // http://localhost:3005/home/update

        axios({ url: "https://memories-server-sigma.vercel.app/home/update", method: "PUT", data: { id: id } }).then((post) => {
            setUpdate(!update)
        }).catch((err) => {
            console.log(err)
        })
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        }
        )
    }

    return (
        <div id="pageContainer">
            <main id="homeWidMain">
                {posts.length === 0 ? <h2 style={{ textAlign: "center" }}>There is no content.</h2> :
                    posts.map((post, i) => {
                        return (
                            <div className="contentDiv" key={i}>
                                <i className="fa fa-user-circle"></i>
                                <h5 className="userName">{post.name}</h5>
                                <i className="fa fa-bookmark"></i>
                                <p className="userLoc">{post.location}</p>
                                <div id="imgContainer">
                                    <img className="postImage" src={post.image.base64} alt="" />
                                </div>
                                <button className="postBtn" onClick={() => { likeHandler(post) }}><i className="fa fa-heart"></i></button><span className="postLikes">{post.likes}</span>
                                <button className="postBtn2"><i className="fa fa-share-alt"></i></button>
                                <p className="postDate">{post.date}</p>
                                <p className="postDes">{post.description}</p>
                            </div>
                        )
                    })}
                <div className="goToTop">
                    <i className="fa fa-caret-square-o-up fa-3x" aria-hidden="true" onClick={() => { goToTop() }}></i>
                </div>
            </main >
        </div >
    )
};
export default Home;
import React from "react";
import { useNavigate} from "react-router-dom";
import "./navbar.css";

const NavBar = ()=>{

    const name = localStorage.getItem("userName")

    const navigate = useNavigate();
    const handlePath = (path) => {
        navigate(`/${path}`)
    }
    const logout = () => {
        localStorage.removeItem('userName')
        navigate("/")
    }
    return(
        <header id='homeWidHeader'> 
        <div className="logo">
            <i className="fa fa-instagram"></i>
            <span>Memories</span>
        </div>
        <div className="headerIcons">
            <button className="camera" onClick={() => handlePath("layout/postWidget")}><i className="fa fa-camera"></i></button>
            <button className="camera" onClick={() => handlePath("layout/home")}><i className="fa fa-home"></i></button>
            <select onChange={() => logout()}>
                <option>{name}</option>
                <option>Logout</option>
            </select>
        </div>
    </header>
    )
}

export default NavBar;
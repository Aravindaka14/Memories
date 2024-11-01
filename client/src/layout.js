import React from "react";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";



const Layout = ()=>{

    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;
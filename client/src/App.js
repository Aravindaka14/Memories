import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signupPage/signup";
import Login from "./components/loginPage/login";
import Home from "./components/homePage/home";
import PostWidget from "./components/postWidgetPage/postWidget";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/postWidget' element={<PostWidget />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

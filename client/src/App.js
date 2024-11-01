import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/registerPage/register";
import Login from "./components/loginPage/login";
import Layout from './layout';
import Home from "./components/homePage/home";
import PostWidget from "./components/postWidgetPage/postWidget";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/layout' element={<Layout/>}>
            <Route  path='/layout/home' element={<Home />}></Route>
            <Route path='/layout/postWidget' element={<PostWidget />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

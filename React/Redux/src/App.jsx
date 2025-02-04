import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Popup from "./Components/Popup";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            LOGO
          </NavLink>
          <div className="navbar-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

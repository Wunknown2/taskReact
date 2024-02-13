import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import { NavLink, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/blog/1">Blog Post 1</NavLink>
        <NavLink to="/blog/2">Blog Post 2</NavLink>
      </nav>
    </div>
  );
};

export default App;

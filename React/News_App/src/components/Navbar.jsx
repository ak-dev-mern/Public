import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <h2 className="navbar-brand">
            <NavLink to="/">
              <h3>News API</h3>
            </NavLink>
          </h2>
        </div>

        <div>
          <ul className="navbar-nav">
            <li>
              <NavLink to="/">All News</NavLink>
            </li>
            <li>
              <NavLink to="/topHeadlines">Top Headlines</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

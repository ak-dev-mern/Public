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
              <NavLink to="/breakingNews">Breaking News</NavLink>
            </li>
            <li>
              <NavLink to="/topHeadlines">Top Headlines</NavLink>
            </li>
            <li className="dropdown-menu">
              <NavLink to="/categories/general">
                Category <i className="bi bi-chevron-down"></i>
              </NavLink>

              <ul className="dropdown-menu-items">
                <li>
                  <NavLink>General</NavLink>
                </li>
                <li>
                  <NavLink>Business</NavLink>
                </li>
                <li>
                  <NavLink>Entertainment</NavLink>
                </li>
                <li>
                  <NavLink>Health</NavLink>
                </li>
                <li>
                  <NavLink>Science</NavLink>
                </li>
                <li>
                  <NavLink>Sports</NavLink>
                </li>
                <li>
                  <NavLink>Technology</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

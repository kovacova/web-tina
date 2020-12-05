import React from "react";
import { Link } from "react-router-dom";

// The "?" is a part of regular expressions - it means the content is optional

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog/:year?/:month?">Blog</Link>
      </li>
    </ul>
  );
};

export default NavBar;
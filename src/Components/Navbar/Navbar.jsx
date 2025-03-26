import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Translate Titans</div>
      <ul className="navbar-links">
        <li>  
            <Link to="/home">Home</Link>

          </li>
        <li>
            <Link to="/texttranslater">EasyTranslate</Link>
          </li>
          <li>  
            <Link to="/file">File</Link>

          </li>
          <li>  
            <Link to="/about">About</Link>
          </li>
          

      </ul>
    </nav>
  );
};

export default Navbar;

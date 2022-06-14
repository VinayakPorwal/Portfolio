import React from "react";
import "./css/header/header.css"
function Header() {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Vinayak Porwal</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{Color: 'white'}}>
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* <li>
            <a href="#">
              <label className="switch">
                <input type="checkbox" /> 
                <span className="slider round"></span>
              </label>
            </a>
          </li> */}
        </ul>
      </header>
    </div>
  );
}

export default Header;

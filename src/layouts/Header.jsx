import React from "react";
import "./Header.css";
import menuIcon from "../assets/menu.png";
function Header() {
  return (
    <>
      <header></header>
      <nav></nav>
      <div className="nav-bar">
        <img
          className="logo"
          src="https://res.cloudinary.com/dj1umpbbs/image/upload/v1683716192/kgf_hyexpe.png"
          alt="logo"
        />
        <ul>
          <li>
            <a href="#program">PROGRAMS</a>
          </li>
          <li>
            <a href="#membership">MEMBERSHIP</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <button>SIGN IN FOR MEMBERS</button>
          </li>
        </ul>
        <img src={menuIcon} alt="menu" className="hambarger" />
      </div>
      <div className="menu">
        <ul>
          <li>PROGRAMS</li>
          <li>TESTIMONIALS</li>
          <li>CONTACT</li>
          <li>
            <button>SIGN IN FOR MEMBERS</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="trapezoid"></div>
          <a href="/">HOME</a>
          <a href="/">PORTFOLIO</a>
          <a href="/">ABOUT</a>
          <a href="/">CONTACT</a>
        </nav>
        <div className="sb-logo">
          <p>MAX TOWER</p>
        </div>
      </header>
      <div className="fade"></div>
    </>
  );
};

export default Navbar;

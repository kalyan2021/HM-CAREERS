import React, { useState } from "react";
import logo from "../images/logo.png";
import "../App.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <header className="headerTop">
    <nav className="pl-0 navbar navbar-expand-lg navbar-light">
      <div className="pl-3 pr-3 container">
        <a
          href="https://www.happiestminds.com"
          className="header-navbarBrand navbar-brand"
        >
          <img src={logo} alt="Happiest Minds Logo"></img>
          <span className="logoCareer">Careers</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="header-nav ml-auto navbar-nav">
            <div className="header-navItem header-navItemBorder nav-item">
              <NavLink  to='/'className="header-navLink active nav-link"
              >
                Home
              </NavLink>
            </div>
            <div className="header-navItem header-navItemBorder nav-item">
              <NavLink to='/joblist' className="header-navLink nav-link">
                Current Openings
              </NavLink>
            </div>
            <div className="header-navItem header-navItemBorder nav-item">
              <NavLink to='/benefits' className="header-navLink nav-link">
                Benefits
              </NavLink>
            </div>
            <div className="header-navItem nav-item">
              <NavLink to='/life@work' className="header-navLink nav-link" >
                Life@Work
              </NavLink>
            </div>
            <div className="header-navItem nav-item">
              <NavLink
                className="header-navLink  header-btnWeb nav-link"
                href="#"
                alt=""
              >
                COMPANY WEBSITE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>


  );
}

export default NavBar;

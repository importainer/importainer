import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import LoginUser from "../LoginUser/LoginUser";
import navBarSe from "./NavBarSec.module.css";

export default function NavBarSec(props) {

  const history = useHistory();

  //Show - remove menu
  const firstClick = () => {

    document.getElementsByClassName(navBarSe.navMenu)[0]?.classList.toggle(navBarSe.show);
    document.getElementById("nav-icon")?.classList.toggle("fa-times");

  }

  return (
    <div className={navBarSe.header}>
      <div className={navBarSe.menuBar}>
        <div className={navBarSe.logoP}>

          <Link to="/">
            <img src='https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Logos%2FLOGO%201000X1000_Mesa%20de%20trabajo%201.png?alt=media&token=544ff206-b6d6-41cd-b6b6-bcee5f06a347' className="logo" alt="logo" />
          </Link>

        </div>

        <nav className={navBarSe.navMenu} id="nav-menu">
          <ul className={navBarSe.navRight}>
            {/* <Link to={link ? link : history.location.pathname} className={navBarSe.subrayado}>
                {title}
              </Link> */}
            <li><Link to="/PaginaNueva" style={{ color: '#fff'}} >Inicio</Link></li>
            <li><Link to="/proyectosNew" style={{ color: '#fff'}} >Proyectos</Link></li>
            <li><Link to="/contactoTest" style={{ color: '#fff'}} >Contacto</Link></li>
          </ul>

          {/* <LoginUser /> */}

        </nav>
      </div>

      <div className={navBarSe.menuBtnS} id="menu-btn">
        <i className="fas fa-bars fa-2x" id="nav-icon" onClick={firstClick}></i>
      </div>
    </div>
  );
}

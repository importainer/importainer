import React, { Component } from "react";
import { Link, HashRouter } from 'react-router-dom';
import LoginUser from '../LoginUser/LoginUser';
import NBPrinc from "./NavBarPrinc.module.css";

export default function NavBarPrinc() {
  //Show - remove menu
  
  const firstClick = () => {
    document.querySelector(NBPrinc.navMenuP).classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("fa-times");
  }

  return ( 
    <div className={NBPrinc.all}>

      <HashRouter>

        <div className={NBPrinc.menuBarP}>

          <div className={NBPrinc.logoP}>

            <Link to="/">
              <img src='https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Logos%2FLOGO%201000X1000_Mesa%20de%20trabajo%201.png?alt=media&token=544ff206-b6d6-41cd-b6b6-bcee5f06a347' className="logo" alt="logo" />
            </Link>

          </div>

          <nav className={NBPrinc.navMenuP} id="nav-menu">
            <ul className={NBPrinc.navRightP}>
              {/* <Link to="/compañia" onClick={firstClick} >Compañias</Link> */}
              <a href="#compañia" onClick={firstClick}>Compañias</a>
              <Link to="../franquicias">Franquicias</Link>
              <Link to="../proyectos" >Proyectos</Link>
              <Link to="../entregas" >Entregas</Link>
              <a href="#contacto" onClick={firstClick}>Contacto</a>
            </ul>
            {/* <LoginUser /> */}
          </nav>
        </div>

        <div className={NBPrinc.menuBtnP} id="menu-btn">
          {/* <i className="fas fa-bars fa-2x" id="nav-icon" onClick={firstClick}></i> */}
        </div>
      
      </HashRouter>
    </div>
  );
}


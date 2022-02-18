import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./NavBarSec.css";
import { Link } from 'react-router-dom';
import LogoImportainer from './../../images/Logo500.png';
import LoginUser from "../LoginUser/LoginUser";

export default function NavBarSec(props) {

  const history = useHistory();

  //Show - remove menu
  const firstClick = () => {

      document.querySelector(".nav-menu").classList.toggle("show");

      document.getElementById("nav-icon").classList.toggle("fa-times");

  }

  const { title, link } = props;

    return (
      <div className="header">
        <div className="menu-bar">
          <div className="logo-princ">
            <Link to="/">
              <img src={LogoImportainer} className="logo" alt="logo" />
            </Link>
          </div>

          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-right">
              <Link to={link ? link : history.location.pathname} className="subrayado">
                {title}
              </Link>
              <Link to="/" >Inicio</Link>
              <Link to="../contacto">Contacto</Link>
            </ul>

            <LoginUser />

          </nav>
        </div>

        <div className="menu-btn-s" id="menu-btn">
          <i className="fas fa-bars fa-2x" id="nav-icon" onClick={firstClick}></i>
        </div>
      </div>
    );
}

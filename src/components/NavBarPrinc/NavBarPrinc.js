import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import LoginUser from "../LoginUser/LoginUser";
import "./NavBarPrinc.css";
import LogoImportainer from './../../images/Logo500.png';
=======
import { Link, HashRouter } from 'react-router-dom';
import LoginUser from '../LoginUser/LoginUser';
import LogoImportainer from './../../images/Logo500.png';
import "./NavBarPrinc.css";
>>>>>>> 73c5989 (conect emanuel)

export default class NavBarPrinc extends Component {
  //Show - remove menu
  firstClick() {
    document.querySelector(".nav-menu-p").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("fa-times");
  }

  render() {
    return ( 
      <div className="all">
<<<<<<< HEAD
        <div className="menu-bar-p">
          <div className="logo-princ">
            <Link to="/">
              <img src={LogoImportainer} className="logo" alt="logo" />
            </Link>
          </div>

          <nav className="nav-menu-p" id="nav-menu">
            <ul className="nav-right-p">
              <a href="#compañia" onClick={this.firstClick}>Compañias</a>
              <Link to="../franquicias">Franquicias</Link>
              <Link to="../proyectos" >Proyectos</Link>
              <a href="#contacto" onClick={this.firstClick}>Contacto</a>
            </ul>
            {/* <LoginUser /> */}
          </nav>
        </div>

        <div className="menu-btn-p" id="menu-btn">
          <i className="fas fa-bars fa-2x" id="nav-icon" onClick={this.firstClick}></i>
        </div>
=======

        <HashRouter>

          <div className="menu-bar-p">
            <div className="logo-princ">
              <Link to="/">
                <img src={LogoImportainer} className="logo" alt="logo" />
              </Link>
            </div>

            <nav className="nav-menu-p" id="nav-menu">
              <ul className="nav-right-p">
                <a href="#compañia" onClick={this.firstClick}>Compañias</a>
                <Link to="../franquicias">Franquicias</Link>
                <Link to="../proyectos" >Proyectos</Link>
                <a href="#contacto" onClick={this.firstClick}>Contacto</a>
              </ul>
              <LoginUser />
            </nav>
          </div>

          <div className="menu-btn-p" id="menu-btn">
            <i className="fas fa-bars fa-2x" id="nav-icon" onClick={this.firstClick}></i>
          </div>
        
        </HashRouter>
>>>>>>> 73c5989 (conect emanuel)
      </div>
    );
  }
}


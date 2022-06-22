import React, { Component } from "react";
import "./../NavBarSec/NavBarSec.css";
import { Link } from "react-router-dom";
import LogoImportainer from "./../../images/Logo500.png";

export default class NavBarTerc extends Component {
  //Show - remove menu
  firstClick() {
    document.querySelector(".nav-menu").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("fa-times");
  }

  render() {
    const { title, link } = this.props;

    return (
      <div className="header">
        <div className="menu-bar">
          <div className="logo-P">

            <Link to="/">
              <img src='https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Logos%2FLOGO%201000X1000_Mesa%20de%20trabajo%201.png?alt=media&token=544ff206-b6d6-41cd-b6b6-bcee5f06a347' className="logo" alt="logo" />
            </Link>

          </div>

          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-right">
              <Link to={link} className="subrayado">
                {title}
              </Link>
              <Link to="/">Inicio</Link>
            </ul>
          </nav>
        </div>

        <div className="menu-btn-s" id="menu-btn">
          <i
            className="fas fa-bars fa-2x"
            id="nav-icon"
            onClick={this.firstClick}
          ></i>
        </div>
      </div>
    );
  }
}

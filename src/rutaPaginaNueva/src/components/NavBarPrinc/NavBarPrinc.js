import React from "react";
import { useDispatch } from "react-redux";
import { Link, HashRouter } from 'react-router-dom';
import LoginUser from '../LoginUser/LoginUser';
import BarRedSoc from "../BarRedSoc/BarRedSoc";
import { setOfertStatus } from "../../Redux/Actions/index";
import NavBarPr from "./NavBarPrinc.module.css";

export default function NavBarPrinc() {

  const dispatch = useDispatch();

  //Show - remove menu
  
  const firstClick = () => {

    document.getElementsByClassName(NavBarPr.navMenu)[0]?.classList.toggle(NavBarPr.show);
    document.getElementById("nav-icon")?.classList.toggle("fa-times");

  }

  return ( 
    <div className={NavBarPr.Cont}>

      {/* <div className={NavBarPr.redSocBar} ><BarRedSoc /></div> */}

      <HashRouter>

        <div className={NavBarPr.menuBar}>

          <div className={NavBarPr.logoC}>

            <Link to="/PaginaNueva">
              <img src='https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Logos%2FLOGO%201000X1000_Mesa%20de%20trabajo%201.png?alt=media&token=544ff206-b6d6-41cd-b6b6-bcee5f06a347' className={NavBarPr.logo} alt="logo" />
            </Link>

          </div>

          <nav className={NavBarPr.navMenu} id="nav-menu">
            <ul className={NavBarPr.navRight}>
              {/* <Link to="/compañia" onClick={firstClick} >Compañias</Link>
              <a href="#compañia" onClick={firstClick}>Compañias</a>
              <Link to="../franquicias">Franquicias</Link>
              <Link to="../proyectos" >Proyectos</Link>
              <Link to="../entregas" >Entregas</Link>
              <a href="#contacto" onClick={firstClick}>Contacto</a> */}

              <li><Link to="/PaginaNueva" style={{ color: '#fff'}} ><p>INICIO</p></Link></li>
              <li><Link to="/proyectosNew" style={{ color: '#fff'}} onClick={e => dispatch(setOfertStatus(false))} ><p>PROYECTOS</p></Link></li>
              {/* <li><Link to="/" ><p>FRANQUICIAS</p></Link></li>
              <li><Link to="/" ><p>ASPECTOS TECNICOS</p></Link></li>
              <li><Link to="/" ><p>ENTREGAS</p></Link></li>
              <li><Link to="/" ><p>SOBRE NOSOTROS</p></Link></li>
              <li><Link to="/" ><p>SUCURSALES</p></Link></li> */}
              <li><Link to="/contactoTest" style={{ color: '#fff'}} ><p>CONTACTO</p></Link></li>
              {/* <li><LoginUser /></li> */}

            </ul>
          </nav>
        </div>

        <div className={NavBarPr.menuBtn} id="menu-btn">
          <i className="fas fa-bars fa-2x" id="nav-icon" onClick={firstClick}></i>
        </div>
      
      </HashRouter>
    </div>
  );
}
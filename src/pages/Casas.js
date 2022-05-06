import React from "react";
import CardList from "../components/ProyectosCards/CardList";
import Titulo from "../components/Titulo";
import NavBarSec from "../components/NavBarSec/NavBarSec";
import FooterSec from "../components/FooterSec/FooterSec";

const Casas = () => {

  window.scroll(0, 0);

  return (
    <div>
      <NavBarSec title="Casas" link="/proyectos"/>
      <Titulo titulo="Casas" />

      <CardList />

      <FooterSec />
    </div>
  );
};

export default Casas;

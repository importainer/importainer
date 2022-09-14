import React from 'react'
import InfoContainer from '../../components/InfoContainers/InfoContainer'
import FooterSec from '../../components/FooterSec/FooterSec'
import NavBarSec from '../../components/NavBarSec/NavBarSec'
import SlideShow from '../../components/SlideShow/SlideShow'
import Slide from "../../components/SlideShow/Slide";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Phone from "../../components/phone/Phone";
import ContDStyle from "./ContDetailStyle.module.css";

export default function Cont15M2({ location }) {

  // const { img, title } = location;

  window.scroll(0, 0);

  setTimeout(() => {

    var acc = document.getElementsByClassName(ContDStyle.accordion);

    var i;

    for (i = 0; i < acc.length; i++) {

      acc[i].addEventListener("click", function () {

        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */

        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */

        var panel = this.nextElementSibling;
        console.log(panel.style.visibility === "visible", '-----')
        if (panel.style.visibility === "visible") {

          // panel.style.display = "none";
          panel.style.visibility = "hidden";
          panel.style.opacity = "0";
          panel.style.height = "0em";

        } else {

          // panel.style.display = "block";
          panel.style.visibility = "visible";
          panel.style.opacity = "1";
          panel.style.height = "22em";

        }

      });
    }

  }, 100);

  return (
    <div className={ContDStyle.contDetail} >

      <h1>Container Casa</h1>

      <img id="imgHead" src="" alt="" />

      <img id="imgPlano" src="" alt="" />

      <button className={ContDStyle.accordion}>RESUMEN

        {/* <div className={ContDStyle.accordArrow} >
        
          <div className={ContDStyle.arrowLeft} ><ChevronLeftIcon sx={{fontSize: 40, margin: 0, padding: 0}} /></div>

          <div className={ContDStyle.arrowRight} ><ChevronRightIcon sx={{fontSize: 40, margin: 0, padding: 0}} /></div>
            
        </div> */}

      </button>

      <div className={ContDStyle.panel}>

        <ul>

          <li id="ambPop" >-Habitacion</li>
          <li id="bañoPop" >-Baño</li>

        </ul>

      </div>

      <button className={ContDStyle.accordion}>BAÑOS</button>

      <div className={ContDStyle.panel}>

        <ul>

          <li>-Vanitory</li>
          <li>-Lavamanos</li>
          <li id="bidetPop" >-Bidet</li>
          <li>-inodoro</li>
          <li>-Ducha en box de 0.80 x 0.80 cm y mampara de Vidrio</li>
          <li>-Griferias marca (Piazza, Moza o Hidro)</li>

        </ul>

        <p>*El baño contara con revestimiento ceramico (a media altura, box de ducha de piso a techo).</p>
        <p id="duchaOptionPop" >*Opcional: El cliente tendra la opcion de cambiar el box de ducha por una bañera de 1.50m.</p>

      </div>

      <button className={ContDStyle.accordion}>COCINA</button>

      <div className={ContDStyle.panel}>

        <ul>

          <li>-Bajo Mesada desde 1.20m hasta 1.60m</li>
          <li>-Mesada de Granito Sintetico de 1.20m hasta 1.60m</li>
          <li>-Bacha de Acero Inoxidable</li>

        </ul>

      </div>

      <button className={ContDStyle.accordion}>EQUIPAMIENTO</button>

      <div className={ContDStyle.panel}>

        <ul>

          <li id="termotanquePop" >-Termotanque Electrico de 40 Lts</li>
          <li id="airePop" >-Aire Acondicionado Split de 2200 F (frio/calor)</li>

        </ul>

      </div>

      <button className={ContDStyle.accordion}>REVESTIMIENTO</button>

      <div className={ContDStyle.panel}>

        <p>Interior: Placa de yeso color blanco (Durlock) o como opcion machimbre de PVC color blanco</p>
        <p>Exterior: Esmalte sintetico, color a eleccion de la linea Emapi o Tersuave. Color estandar</p>
        <p>Aislacion termica y acustica: Lana de Vidrio de 50mm.</p>

      </div><button className={ContDStyle.accordion}>INSTALACIONES</button>

      <div className={ContDStyle.panel}>

        <ul>

          <li>Instalacion Electrica

            <ul>

              <li id="tomaDistriPop" >-Instalacion reglamentaria por cañeria embutudas, con 10 tomas distribuidos entre tomacorrientes simples y tomacorrientes dobles</li>
              <li>-Caja para termicas de luz con 12 modulos, con 01 disyuntor y 03 termicas</li>
              <li id="llaveEncendidoPop" >-06 llaves de encendido</li>
              <li id="lucesLedPop" >-06 Luces LED en cielorraso de alta calidad y de bajo consumo</li>
              <li id="luzExtPop" >-04 Luces exteriores tipo tortuga de PVC</li>

            </ul>

          </li>


        </ul>

        <ul>

          <li>Instalacion De Agua

            <ul>

              <li>-Fria y Caliente</li>
              <li>-Caños termofusion de 20</li>
              <li>-Desagues Aguaduc de 110, 40, 50 y 60</li>

            </ul>

          </li>


        </ul>
        
      </div>

      <button className={ContDStyle.accordion}>PISOS</button>

      <div className={ContDStyle.panel}>

        <ul>

          <li>-Vinílico simil madera (alto transito)</li>
          <li>-Hidrolaqueado, piso original del contenedor tratado con dos manos de hidrolaca</li>
          <li>-Flotante simil madera (a cotizar)</li>

        </ul>

      </div>

      <button className={ContDStyle.accordion}>ABERTURA</button>

      <div className={ContDStyle.panel}>

        <ul>

          <li>-Ventanas Linea Herrero con vidrio de 3mm</li>
          <li>-Con rejas como medida de seguridad</li>
          <li id="venPop" >-03 Ventana de 1.50 x 1.10 con traba interior</li>
          <li id="venBalconPop" >-02 Ventana balcon 2.00 x 2.00m</li>
          <li>-01 Ventana de 1.00 x 0.40 hasta 1.50 x 0.40 para cocina</li>
          <li>-01 Ventana 0.60 x 0.40m para baño</li>
          <li id="puertaPop" >-Puerta de entrada doble chapa o mitad vidrio y mitad aluminio</li>

        </ul>

        <p>*Opcional: Porton romano.</p>

      </div>

      {/* <NavBarSec title="Casas" link="/casas"/> */}
      {/* <SlideShow>
                <Slide img={img} />
                <Slide img= "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-2.jpg?alt=media&token=93da54cb-eb47-4157-bf8a-6b33fc92d326"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-1.jpg?alt=media&token=b803aab6-7599-4651-8ebb-f70bf8a6cfd3" />
            </SlideShow> */}
      {/* <InfoContainer
                title={`Container ${title}`}
                img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F15m2%2002.jpg?alt=media&token=54bf9810-e877-4c74-8ccc-0fb3e7f4182d" 
                aires=""
                ventanas=""
                litros=""
            /> */}
      <Phone />
      <FooterSec />
    </div>
  )
}


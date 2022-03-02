import React from "react";
import { Link } from "react-router-dom";
import "./HomeAspectos.css";

export default function HomeAspectosCard() {

  const containerIMG = "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Aspectos%2Fcontainer.jpg?alt=media&token=a49f7386-3d5e-4e44-8fcb-f010cda43f2d";
  const lanaVidrioIMG = "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Aspectos%2FlanaVidrio.jpg?alt=media&token=734a5dfc-9d89-4065-a33c-78e59ca41b93";
  const piloteIMG = "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Aspectos%2Fpilote.JPG?alt=media&token=fdf36e74-d819-4b5e-b78b-91354bfcdd5d";

  return (
    <div>
      <section className="aspectos container">
        <h2 className="pr">Aspectos</h2>
        <div className="galeria-asp">
          <div className="card-asp">
            <img src={containerIMG} alt="" loading="lazy" />
            <div className="card-asp-content">
              <h4>Container</h4>
              <p>
                El material de los contenedores marítimos es Acero Autopatinable
                o también conocido como Acero Corten. Es un tipo de acero
                fabricado de una composición química que le proporciona
                características unicas que protegen las piezas ante cualquier
                tipo de corrosión u oxidación.
              </p>
            </div>
            <div className="boton">
              <Link className="btn2" to="./aspectos">
                Ver Mas
              </Link>
            </div>
          </div>
          <div className="card-asp">
            <img src={lanaVidrioIMG} alt="" loading="lazy" />
            <div className="card-asp-content">
              <h4>Aislación térmica</h4>
              <p>
                La lana de vidrio es una fibra mineral fabricada con millones de
                filamentos de vidrio unidos con un aglutinante. El espacio libre
                con aire atrapado entre las fibras aumentan la resistencia a
                la transmisión del frio y calor.
              </p>
            </div>
            <div className="boton">
              <Link className="btn2" to="./aspectos">
                Ver Mas
              </Link>
            </div>
          </div>
          <div className="card-asp">
            <img src={piloteIMG} alt="" loading="lazy" />
            <div className="card-asp-content">
              <h4>Pilotes</h4>
              <p>
                Simplemente con la construcción de pilotes de 40 x 40 cm en
                forma de cubo con una altura indeterminada (queda a gusto del
                cliente) nos ahorramos grandes cantidades de dinero (a
                comparación de si se construiría una base, platea, estructura o
                encadenado).
              </p>
            </div>
            <div className="boton">
              <Link className="btn2" to="./aspectos">
                Ver Mas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

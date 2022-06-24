import React from "react";
import "./InfoContainer.css";

const InfoBares = ({
  title,
  img,
  baños,
  equipamiento,
  medidas,  
  vanitory,
  lavamanos,
  inodoro,
  extra,
  mesones,
}) => {
  return (
    <div className="descripcion">
      <div className="left">
        <h1>{title}</h1>
        <img src={img} alt="" className="image" />

        <h2>Detalles Constructivos</h2>

        <div className="cont-right">
          <h3>Baño ({baños}):</h3>
          <h4>- Vanitory</h4>
          <h4>- Lavamanos</h4>
          <h4>-Inodoro</h4>
          <h4>{extra}</h4>
          <h4>- Griferías (Marca Piazza, Moza o Hidro)</h4>
        </div>

        <div className="cont-right">
          <h3>Bar:</h3>
          <h4>- 01 Bajo mesada desde {medidas}</h4>
          <h4>- Mesada de granito sintético</h4>
          <h4>- Bacha de acero inoxidable</h4>
        </div>
      </div>

      <div className="right">
        <div className="cont-right">
          <h3>Equipamiento</h3>
          <p>{mesones} Mesones para barra de 2.40 x 0.50m</p>
          <p>{equipamiento}</p>
        </div>

        <div className="cont-right">
          <h3>Aberturas:</h3>
          <h4>- Ventanas Línea Herrero con vidrio de 3mm</h4>
          <h4>- 06 Ventanas paño fijo de 2.00 x 2.00m</h4>
          <h4>- 02 Ventana paño fijo de 1.00 x 2.00m</h4>
          <h4>- 01 Puerta ventana de 2.00 x 2.00m</h4>
          <h4>- 01 Ventana de 0.60 x 0.40m para baño</h4>
          <h4>- 01 Puerta interior de 0.70 x 2.00m</h4>
        </div>

        <div className="cont-right">
          <h3>Revestimientos</h3>
          <h4>Interior:</h4>
          <h4>- Placa de yeso color blanco (Durlock)</h4>
          <h4>Exterior:</h4>
          <h4>
            - Esmalte sintético, color a elección de línea Emapi o Tersuave,
            colores estándar a decidir por el cliente
          </h4>
          <h4>- Aislación térmica y acústica: Placas de Tergopol de 20mm.</h4>
        </div>

        <div className="cont-right">
          <h3>Pisos</h3>
          <h4>Interior:</h4>
          <h4>- Piso original del container con tratamiento de pintura especial para pisos.</h4>
        </div>
      </div>
    </div>
  );
};

export default InfoBares;

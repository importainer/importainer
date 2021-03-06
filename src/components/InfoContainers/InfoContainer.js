import React from "react";
import "./InfoContainer.css";

const InfoContainer = ({ title, ventanas, img, aires, litros }) => {
  return (
    <div className="descripcion">
      <div className="left">
        <h1>{title}</h1>
        <img src={img} alt="" className="image" />

        <h2>Detalles Constructivos</h2>

        <div className="cont-right">  
          <h3>Baños:</h3>
          <h4>- Vanitory</h4>
          <h4>- Lavamanos</h4>
          <h4>- Bidet</h4>
          <h4>- Inodoro</h4>
          <h4>- Ducha en box de 0.80 x 0.80 cm y mampara de vidrio</h4>
          <h4>- Griferías Marca (Piazza, Moza o Hidro)</h4>
          <p>
            El baño contará con revestimiento cerámico (a media altura, box de
            ducha de piso a techo).
          </p>
          <p>
            Opcional: El cliente tendrá la opción de cambiar el box de ducha por una
            bañera de 1.50m.
          </p>
        </div>

        <div className="cont-right">
          <h3>Cocina:</h3>
          <h4>- 01 Bajo mesada de 1.40m hasta 1.60m.</h4>
          <h4>- 01 Mesada de granito sintético desde 1.40 hasta 1.60m.</h4>
          <h4>- Bacha de acero inoxidable</h4>
        </div>
      </div>

      <div className="right">
        <div className="cont-right">
          <h3>Equipamiento</h3>
          <p>
            01 Termotanque eléctrico de {litros} litros.
            <br />
            {aires} Aires acondicionados Split de 2200 F (frío/calor)
          </p>
        </div>
        <div className="cont-right">
          <h3>Revestimientos</h3>
          <p>
            Interior: Placa de yeso color blanco (Durlock)  o como opción machimbre de PVC color blanco.
            <br />
            Exterior: Esmalte sintético, color a elección de línea Emapi o
            Tersuave, colores estándar a decidir por el cliente. <br />
            Aislación térmica y acústica: Lana de vidrio de 50mm.
          </p>

          <br />

          <h3>Pisos</h3>
          <p>
            - Vinílico símil madera (alto tránsito) <br />
            - Hidrolaqueado, piso original del contenedor tratado con dos manos de hidrolaca. <br />
            - Flotante simil madera (a cotizar)
          </p>
        </div>

        <div className="cont-right">
          <h3>Aberturas:</h3>
          <h4>- Ventanas Línea Herrero con vidrio de 3mm</h4>
          <h4>- Con rejas como medida de seguridad</h4>
          <h4>- {ventanas} ventanas de 1.50 x 1.10m con traba interior</h4>
          <h4>- 02 Ventanas balcón de 2.00 x 2.00m</h4>
          <h4>- 01 Ventana 0.60 x 0.40m para baño</h4>
          <h4>- 01 Ventana de 1.00 x 0.40 hasta 1.50 x 0.40 para cocina</h4>
          <h4>- 01 Puerta de entrada doble chapa o mitad vidrio y mitad aluminio.</h4>
          <p> 
            Opcional: 01 Portón Romano de 2.00 x 2.00m.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;

import React from "react";
import { Link } from "react-router-dom";
import "./ProyectoCard.css";

const ProyectoCard = ({ title, img, link }) => {
  return (
    <div className="">
      <div className="TheProyectCard">
        <Link to={link} className="TitleProyectCard">
           {title}
        </Link>
        <img src={img} alt="" className="ImgProyectCard" />
        <div className="ProyectCardTransp"></div>
      </div>
    </div>
  );
};

export default ProyectoCard;

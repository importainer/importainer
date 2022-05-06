import React from "react";
import EmprendimientoCard from "./EmprendimientosCard";
import "../ProyectosCards/CardList.css";

const EmprendimientosList = () => {

  window.scroll(0, 100);

  return (
    <div className="card">
      <EmprendimientoCard
        title="Bar 15M2"
        beds="4"
        baths="1"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack15M-4.jpg?alt=media&token=433d5b7e-ea0b-4e35-91ad-92fb3d4f79f4"
        link="/emprendimientos/foodtrack15m2"
      />
      <EmprendimientoCard
        title="Bar 30M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack30M-6.jpg?alt=media&token=65b42cdb-8e01-4b27-808b-3bcf728ce6e8"
        link="/emprendimientos/foodtrack30m2"
      />
      <EmprendimientoCard
        title="Bar 45M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Bar%2FBar45M-7.jpg?alt=media&token=b371052e-da03-4b19-bea6-fcad362aee43"
        link="/emprendimientos/bar45m2"
      />
      <EmprendimientoCard
        title="Bar 120M2"
        beds="4"
        baths="2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack120M-1.jpg?alt=media&token=ce49d647-d313-4262-a250-3dd60e2431a7"
        link="/emprendimientos/foodtrack120m2"
      />
    </div>
  );
};

export default EmprendimientosList;

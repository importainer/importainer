import React, { useState } from "react";
import Checkboxs from "./Checkboxs";
import "./MiniTabs.css";

export default function MiniTabs({
    cuota120A,
    cuota120B,
    cuota120C,
    cuota240A,
    cuota240B,
    cuota240C,
    nameCuota120,
    nameCuota240,
    nameCuotaPrinc,
    cuotaP1,
    cuotaP2,
    link120,
    link240,
    cuotaPrecio120A,
    cuotaPrecio120B,
    cuotaPrecio120C,
    cuotaPrecio240A,
    cuotaPrecio240B,
    cuotaPrecio240C,
    precioLista,
    precioCuota,
  }) {
  
  const [activeRadius, setActiveRadius] = useState(1);

  const activeRadiusFun = (i) => {

    setActiveRadius(i);

  }

  return (
    <div className="ContainerMiniTabs">
      <div className="ContainerTop">
        <div
          className='ContInput'
          onClick={() => activeRadiusFun(1)}
          // htmlFor={cuotaP1}
        >
          <label className="PrincCheckBox" >
            <input
              type="radio"
              id={cuotaP1}
              name={nameCuotaPrinc}
              value={cuotaP1}
              onChange=""
              defaultChecked
            />
            {

              activeRadius === 1 ? <span className="PrincChecked"></span> : null

            }
          </label>

          <label className="InputTitle" >
            120 Cuotas
          </label>
        </div>

        <div
          className={activeRadius === 2 ? "ContInput active-check" : "ContInput"}
          onClick={() => activeRadiusFun(2)}
          htmlFor={cuotaP2}
        >
          <label className="PrincCheckBox" >
            <input
              type="radio"
              id={cuotaP2}
              name={nameCuotaPrinc}
              value={cuotaP2}
              onChange=""
            />
            {

              activeRadius === 2 ? <span className="PrincChecked"></span> : null

            }
          </label>
          <label className="InputTitle" >
            240 Cuotas
          </label>
        </div>
      </div>

      <div className="MiniTabsContent">
        <h4>Precio especial : $ {precioLista}</h4>
        <h4>Cuotas de : $ {precioCuota}</h4>
        <div
          className={
            activeRadius === 1 ? "Check120  active-check-content" : "Check120"
          }
        >

          <br />

          <h3>Entregas Programadas</h3>

          {/* <Checkboxs
            cuota1={cuota120A}
            nameCuota={nameCuota120}
            cuotaPrecioA={cuotaPrecio120A}
            cuota2={cuota120B}
            cuotaPrecioB={cuotaPrecio120B}
            cuota3={cuota120C}
            cuotaPrecioC={cuotaPrecio120C}
            link={link120}
          /> */}
          
        </div>

        <div
          className={
            activeRadius === 2 ? "Check120  active-check-content" : "Check120"
          }
        >
          <Checkboxs
            cuota1={cuota240A}
            nameCuota={nameCuota240}
            cuotaPrecioA={cuotaPrecio240A}
            cuota2={cuota240B}
            cuotaPrecioB={cuotaPrecio240B}
            cuota3={cuota240C}
            cuotaPrecioC={cuotaPrecio240C}
            link={link240}
          />
        </div>
      </div>
    </div>
  );
}

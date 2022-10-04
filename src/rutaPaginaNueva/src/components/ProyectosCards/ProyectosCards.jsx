import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertStatus } from "../../Redux/Actions/index";
import StyleProyectCards from "./ProyectosCardsStyle.module.css";

export default function ProyectosCards({ title, txtDesc, image, tipo }) {

    const dispatch = useDispatch();

    return (

        <div className={StyleProyectCards.contentProyectsCards} >

            <div className={StyleProyectCards.contentImg} >
                
                <img src={image} alt={`images de ${title}`} />
                
            </div>

            <div className={StyleProyectCards.bodyProyectCard} >

                <h2>{title}</h2>

                <p>{txtDesc}</p>

                <div className={StyleProyectCards.contentBTN} >

                    <div className={StyleProyectCards.btnVer} onClick={e => { dispatch(getProyectGoup(tipo)); dispatch(setOfertStatus(false)) }} ><Link to={`/Proyectos/${title}`} >VER TODOS</Link></div>

                    <div className={StyleProyectCards.btnCon} >CONSULTAR</div> 

                </div>

            </div>

        </div>

    )

}
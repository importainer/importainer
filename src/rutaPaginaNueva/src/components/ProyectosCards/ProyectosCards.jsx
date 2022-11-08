import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertStatus, setFilterEnt } from "../../Redux/Actions/index";
import StyleProyectCards from "./ProyectosCardsStyle.module.css";

export default function ProyectosCards({ tipoLanding, title, txtDesc, image, tipo, linkT, btnFirs, btnSecond, dispatch1, dispatch2, dispatch3, id }) {

    const dispatch = useDispatch();

    const history = useHistory();

    const location = useLocation();

    const disProyect = () => {

        dispatch(getProyectGoup(tipo));

    }

    const OptionResult = () => {

        switch (tipoLanding) {

            case "proyect":

                return (

                    <div className={StyleProyectCards.btnVer} onClick={e => { dispatch(getProyectGoup(tipo)) }} ><Link to={`/Proyectos/${title}`} >{"VER TODOS"}</Link></div>
    
                )
        
            case "testi":

                return (

                    <div className={StyleProyectCards.btnVer} onClick={e => { dispatch(setFilterEnt(id)) }} ><Link to={linkT} >{"VER ENTREGA"}</Link></div>
    
                )
        
            default:
                break;
        }
        
    }

    return (

        <div className={StyleProyectCards.contentProyectsCards} >

            <div className={StyleProyectCards.contentImg} >
                
                <img src={image} alt={`images de ${title}`} />
                
            </div>

            <div className={StyleProyectCards.bodyProyectCard} >

                <h2>{title}</h2>

                <p>{txtDesc}</p>

                <div className={StyleProyectCards.contentBTN} >

                    {

                        OptionResult()

                    }

                    {/* <div className={StyleProyectCards.btnVer} ><Link to={linkT ? linkT : `/Proyectos/${id}`} >{ btnFirs ? btnFirs : "VER TODOS"}</Link></div> */}
                    
                    {/* <div className={StyleProyectCards.btnVer} onClick={e => { dispatch1 && dispatch(getProyectGoup(tipo)); dispatch2 && dispatch(setOfertStatus(false)); dispatch3 && dispatch(setFilterEnt(id)) }} ><Link to={linkT ? linkT : `/Proyectos/${title}`} >{ btnFirs ? btnFirs : "VER TODOS"}</Link></div> */}

                    {

                        btnSecond && <div className={StyleProyectCards.btnCon} onClick={e => history.push("/contactoTest")} >{"CONSULTAR"}</div>

                    }

                </div>

            </div>

        </div>

    )

}
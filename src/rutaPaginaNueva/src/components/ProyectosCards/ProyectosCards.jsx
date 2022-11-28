import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProyect, getAllProducts, getProyectGoup, setOfertStatus, setFilterEnt } from "../../Redux/Actions/index";
import StyleProyectCards from "./ProyectosCardsStyle.module.css";

export default function ProyectosCards({ tipoLanding, title, txtDesc, image, tipo, linkT, btnFirs, btnSecond, dispatch1, dispatch2, dispatch3, id }) {

    const dispatch = useDispatch();

    const history = useHistory();

    const location = useLocation();

    const [active, setActive] = useState(true);

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

    const verMasF = () => {

        document.getElementsByClassName(StyleProyectCards.contentTxtDesc)[id - 1].classList.toggle(StyleProyectCards.contentTxtDescActive);

        document.getElementsByClassName(StyleProyectCards.verMas)[id - 1].classList.toggle(StyleProyectCards.verMasClose)

        setTimeout(() => {

            document.getElementsByClassName(StyleProyectCards.bodyProyectCard)[id - 1].classList.toggle(StyleProyectCards.contentTxtDescActive)

        }, 500);

    }

    // console.log(document.getElementsByClassName(StyleProyectCards.verMas)[id - 1], 'uuu')

    return (

        <div className={StyleProyectCards.contentProyectsCards} >

            {/* <div className={StyleProyectCards.prueba} ></div> */}

            <div className={StyleProyectCards.contentImg} >

                <img src={image} alt={`images de ${title}`} />

            </div>

            <div className={StyleProyectCards.bodyProyectCard} >

                <h2>{title}</h2>

                <p className={StyleProyectCards.contentTxtDesc} >

                    {txtDesc}

                </p>

                <div className={StyleProyectCards.verMas} onClick={verMasF} ></div>

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
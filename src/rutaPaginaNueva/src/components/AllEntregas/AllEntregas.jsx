import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBarSec from "../NavBarSec/NavBarSec";
import ProyectosCards from "../ProyectosCards/ProyectosCards";
import FooterSec from "../FooterSec/FooterSec";
import { getAllEntregas, setFilterEnt } from "../../Redux/Actions/index";
import AllEntregasSt from "./AllEntregasSt.module.css";

export default function AllEntregas() {

    const dispatch = useDispatch();

    const allEntregas = useSelector(state => state.allEntregas);

    useEffect(() => {

        dispatch(getAllEntregas());

    }, []);

    return (

        <div>

            <NavBarSec />

            <div className={AllEntregasSt.contentEnt} >

                {

                    allEntregas.map(e => {

                        return <ProyectosCards

                            tipoLanding="testi"
                            key={e.id}
                            title={e.title1}
                            image={e.img[0]}
                            tipo={e.tipo}
                            linkT={`/Entregas/${e.id}`}
                            btnFirs="DESCUBRIR"
                            btnSecond={true}
                            dispatch1={false}
                            dispatch2={false}
                            dispatch3={true}
                            id={e.id}

                        />

                    })

                }

            </div>

            {/* <ProyectosCards title={e.title} txtDesc={e.txtDetail} image={e.imgLink} tipo={e.tipo} /> */}

            <FooterSec />

        </div>

    )

}
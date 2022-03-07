import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import ConsultasCard from "../ConsultasCard/ConsultasCard";
import Consulta from "./Consultas.module.css";

export default function Consultas({location}) {

    const [conUsers, setConUsers] = useState([]);

    useEffect(() => {

        getDocs(collection(db, "users"))
            .then(e => {

                setConUsers(e.docs.map(e => e.data()));

            })
            .catch(e => console.log(e, 'error'))

    }, []);

    console.log(conUsers, 'users');

    const arr = [{ email: 'prueba@pruega.com', name: 'prueba', phone: '3215648',
                    usado: true, message: 'quiero saber los precios de la casita de campanita', fecha: '12/02/2022'}]

    return (

        <div className={Consulta.ConsultasContent} >
        
            <NavBar tipo={location?.state.tipo} />

            <h1>Consultas de Usuarios</h1>

            {

                arr.map(e => {

                    return (

                        <ConsultasCard email={e.email} name={e.name} phone={e.phone} 
                            usado={e.usado} message={e.message} fecha={e.fecha} />

                    )

                })

            }

        </div>

    )

}
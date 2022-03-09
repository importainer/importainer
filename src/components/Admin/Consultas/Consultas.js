import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import NavBar from "../NavBar/NavBar";
import ConsultasCard from "../ConsultasCard/ConsultasCard";
import Consulta from "./Consultas.module.css";

export default function Consultas({location}) {

    const [conUsers, setConUsers] = useState([]);

    const [paginationIz, setPaginationIz] = useState(0);

    const [paginationDer, setPaginationDer] = useState(10);

    useEffect(() => {

        getDocs(collection(db, "users"))
            .then(e => {

                const consultas = e.docs.filter(e => e.data().userObject.fecha !== undefined);
                    
                setConUsers(consultas.map(e => {

                    const arr = e.data().userObject.fecha.split('/');

                    const dia = arr[0];

                    const mes = arr[1];

                    const año = arr[2];

                    const hoy = new Date(año,mes,dia);
                    
                    return {

                        id: e.id,
                        email: e.data().userObject.email,
                        fecha: hoy.toISOString(),
                        message: e.data().userObject.message,
                        name: e.data().userObject.name,
                        phone: e.data().userObject.phone,
                        usado: e.data().userObject.usado,

                    }

                }));

            })
            .catch(e => console.log(e, 'error'))

    }, []);

    console.log(conUsers, 'users');

    const ordenarFecha = (a, b) => {

        if(a > b) return -1
        else if(a < b) return 1
        else return 0

    }

    return (

        <div className={Consulta.ConsultasContent} >
        
            <NavBar tipo={location?.state.tipo} />

            <h1>Consultas de Usuarios</h1>

            <div className={Consulta.arrowContent}>

                <div className={Consulta.arrowLeft} >

                    <ArrowLeftIcon sx={{ fontSize: 100, color: '#FF0000', margin: '0px', padding: '0px' }} />   
                    
                </div>

                <div>

                    <ArrowRightIcon sx={{ fontSize: 100, color: '#FF0000' }} />
                    
                </div>   

            </div>

            {

                conUsers.sort((a, b) => ordenarFecha(a.fecha, b.fecha)).slice(paginationIz, paginationDer).map((e, i) => {

                    const fechaMap = new Date(e.fecha);
                    
                    return (

                        <ConsultasCard id={e.id} email={e.email} name={e.name} phone={e.phone} 
                            usado={e.usado} message={e.message} fecha={`${fechaMap.getDate()}/${fechaMap.getMonth()}/${fechaMap.getFullYear()}`} />

                    )

                })

            }

        </div>

    )

}
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import NavBar from "../NavBar/NavBar";
import Pagination from "../../Pagination/Pagination";
import ConsultasCard from "../ConsultasCard/ConsultasCard";

import Consulta from "./Consultas.module.css";

export default function Consultas({location}) {

    const [conUsers, setConUsers] = useState([]);

    const [conActual, setConActual] = useState([]);

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

    const ordenarFecha = (a, b) => {

        if(a > b) return -1

        else if(a < b) return 1

        else return 0

    }
// console.log(conActual.length === 0, 'pp')

    const conPag = () => {

        setConActual(conUsers.sort((a, b) => ordenarFecha(a.fecha, b.fecha)).slice(paginationIz, paginationDer));

    }

    setTimeout(() => {

        if(conActual.length === 0) {

            conPag()

        }

    }, 100);

   

    const anterior = () => {

        console.log('chau')

        setPaginationIz(paginationIz - 10);

        setPaginationDer(paginationDer - 10);

        conPag()

    }

    const siguiente = () => {

        console.log('hola')

        setPaginationIz(paginationIz + 10); 

        setPaginationDer(paginationDer + 10);

        conPag()

    }
    
    // const active = () => {

    //     const idActive = document?.getElementById('1');
    //     console.log(idActive, 'active');
    //     idActive.className = Consulta.active;
    //     console.log(idActive, 'active2');
    // }

    // setTimeout(() => active(), 200)

    return (

        <div className={Consulta.ConsultasContent} >
        
            <NavBar tipo={location?.state.tipo} />

            <h1>Consultas de Usuarios</h1>

            <div className={Consulta.arrowContent}>

                <div className={Consulta.arrowLeft} >

                    <ArrowBackIosNewIcon sx={{ fontSize: 30, color: '#FF0000' }} onClick={anterior} />
                    
                </div>

                {/* <Stack spacing={2}>
                    {/* <Pagination count={10} variant="outlined" />
                    <Pagination count={10} variant="outlined" color="primary" /> */}
                    {/* <Pagination count={10} variant="outlined" color="standard" size="large" />
                    {/* <Pagination count={10} variant="outlined" disabled /> */}
                {/* </Stack> */}

                <Pagination />

                <div className={Consulta.arrowRight} >

                    <ArrowForwardIosIcon sx={{ fontSize: 30, color: '#FF0000' }} onClick={siguiente} />
                    
                </div>   

            </div>

            {

                conActual.map((e, i) => {

                    const fechaMap = new Date(e.fecha);
                    // console.log(e.usado)
                    return (

                        <ConsultasCard key={i} id={e.id} email={e.email} name={e.name} phone={e.phone} 
                            usado={e.usado} message={e.message} fecha={`${fechaMap.getDate()}/${fechaMap.getMonth()}/${fechaMap.getFullYear()}`} />

                    )

                })

            }

        </div>

    )

}
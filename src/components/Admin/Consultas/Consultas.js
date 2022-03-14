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

    const [indice, setIndice] = useState(0);

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

    const cantPag = () => {

        const paginas = Math.ceil(conUsers.length / 10);

        let iz = 0;
        let d = 10;

        const arr = [];
        let arrI = 0;

        arr[arrI] = []

        while(d <= paginas * 10) {
            
            arr[arrI] = conUsers.sort((a, b) => ordenarFecha(a.fecha, b.fecha)).slice(iz, d)

            iz = iz + 10;
            d = d + 10;
            arrI ++;

        }

        return {

            array: arr,
            
            paginas: paginas,
        }
    }

    const anterior = () => {

        if(indice === 0) {

            setIndice((cantPag().paginas - 1));
            
        } else {

            setIndice(indice - 1);

        }

    }

    const siguiente = () => {

        if(indice === (cantPag().paginas - 1)) {

            setIndice(0);

        } else {

            setIndice(indice + 1);

        }

    }
    
    const selectPag = (n) => {
        
        setIndice((n - 1))

    }
    
    console.log(cantPag().array, (cantPag().paginas - 1), 'return')
    return (

        <div className={Consulta.ConsultasContent} >
        
            <NavBar tipo={location?.state.tipo} />

            <h1>Consultas de Usuarios</h1>

            <div className={Consulta.arrowContent}>

                {/* <div className={Consulta.arrowLeft} >

                    <ArrowBackIosNewIcon sx={{ fontSize: 30, color: '#FF0000' }} onClick={anterior} />
                    
                </div> */}

                <Pagination count={cantPag().paginas} indice={indice} pagSelect={selectPag} anterior={anterior} siguiente={siguiente} />

                {/* <div className={Consulta.arrowRight} >

                    <ArrowForwardIosIcon sx={{ fontSize: 30, color: '#FF0000' }} onClick={siguiente} />
                    
                </div>    */}

            </div>

            {
 
                cantPag().array[indice].map((e, i) => {

                    const fechaMap = new Date(e.fecha);
                    
                    return (

                        <ConsultasCard key={i} id={e.id} email={e.email} name={e.name} phone={e.phone} 
                            usado={e.usado} message={e.message} fecha={`${fechaMap.getDate()}/${fechaMap.getMonth()}/${fechaMap.getFullYear()}`} />

                    )

                })

            }

        </div>

    )

}
import React, { useState, useEffect } from "react";
import { app, db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import ConsultasCard from "../ConsultasCard/ConsultasCard";
import Consulta from "./Consultas.module.css";

export default function Consultas({location}) {

    const [conUsers, setConUsers] = useState([]);

    const [indice, setIndice] = useState(0);

    useEffect(() => {

        getDocs(collection(db, "users"))
            .then(e => {

                // e.docs.map(e => {
                //     console.log(Object.keys(e.data().userObject), Object.keys(e.data().userObject).length > 1)
                //     if(Object.keys(e.data().userObject).length > 1) {

                //         const diaArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
                //         const mesArr = [9, 10, 11, 12];
                //         const randomElement = mesArr[Math.floor(Math.random() * mesArr.length)];
                //         const randomDay = diaArr[Math.floor(Math.random() * diaArr.length)];
                //         console.log(Object.keys(e.data().userObject).length);
    
                //         console.log(typeof fechaRandom() === 'string')

                //         const userObject = {
    
                //             email: e.data().userObject.email === undefined ? 'no tiene correo' : e.data().userObject.email,
                //             fecha: e.data().userObject.fecha === undefined ? `${randomDay}/${randomElement}/2021` : e.data().userObject.fecha,
                //             message: e.data().userObject.message,
                //             name: e.data().userObject.name,
                //             phone: e.data().userObject.phone,
                //             usado: e.data().userObject.usado !== undefined ? e.data().userObject.usado : true,
    
                //         }

                //         app.firestore().collection("users").add({userObject})

                //     }

                // })
                
                const consultas = e.docs.filter(e => e.data().userObject.fecha !== undefined);
                
                setConUsers(consultas.map(e => {
                    // console.log(e.data().userObject)
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
    
    return (

        <div className={Consulta.ConsultasContent} >
        
            <NavBar tipo={location?.state.tipo} />

            <h1>Consultas de Usuarios</h1>

            <div className={Consulta.arrowContent}>

                <Pagination count={cantPag().paginas} indice={indice} pagSelect={selectPag} anterior={anterior} siguiente={siguiente} />

            </div>

            {
 
                cantPag().array[indice].map((e, i) => {

                    const fechaMap = new Date(e.fecha);
                    
                    return (

                        <ConsultasCard key={e.id} id={e.id} email={e.email} name={e.name} phone={e.phone} 
                            usado={e.usado} message={e.message} fecha={`${fechaMap.getDate()}/${fechaMap.getMonth()}/${fechaMap.getFullYear()}`} />

                    )

                })

            }

        </div>

    )

}
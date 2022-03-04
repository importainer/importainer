import React, { useEffect, useState } from 'react';
import { db, app } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import ResCard from "../ResCard/ResCard";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./Reservas.css";

export default function Reservas({location}) {

    const [reservas, setReservas] = useState([]);
    const [reservasBakup, setReservasBakup] = useState([]);
    const [alignment, setAlignment] = useState('all');
    const [alignment2, setAlignment2] = useState(alignment);

    const callResDB = async () => {

        const getcollec = await getDocs(collection(db, 'reservas'));
        
        // setReservas(getcollec.docs.map(e => {
            
        //     const arr = e.data().userObject.fecha.split('/');

        //     const dia = arr[0];

        //     const mes = arr[1];

        //     const año = arr[2];

        //     const hoy = new Date(año,mes,dia)

        //     return {

        //         id: e.id,
        //         checked: e.data().userObject.checked,
        //         codCRM: e.data().userObject.codCRM,
        //         email: e.data().userObject.email,
        //         message: e.data().userObject.message,
        //         name: e.data().userObject.name,
        //         phone: e.data().userObject.phone,
        //         fecha: hoy.toISOString(),

        //     }

        // }));

        setReservasBakup(getcollec.docs.map(e => {

            const arr = e.data().userObject.fecha.split('/');

            const dia = arr[0];

            const mes = arr[1];

            const año = arr[2];

            const hoy = new Date(año,mes,dia)
            console.log('hola')
            return {

                id: e.id,
                checked: e.data().userObject.checked,
                codCRM: e.data().userObject.codCRM,
                email: e.data().userObject.email,
                message: e.data().userObject.message,
                name: e.data().userObject.name,
                phone: e.data().userObject.phone,
                fecha: hoy.toISOString(),

            }

        }));

    }

    useEffect(() => {

        

        callResDB();
        
    }, [reservas]);

    setTimeout(() => {

        if(reservas.length === 0 && alignment !== 'notPast') {

            setReservas(reservasBakup);
            
            console.log('ss')

        } 
        
    }, 100)
    
    const filterList = (estado) => {
        // callResDB();
        
        if(estado === 'past') {
            console.log('1')
            setReservas(reservasBakup.filter(e => e.checked === true));

        } else if(estado === 'notPast') {

            if(reservas.length === reservasBakup.length) console.log('ahora')
            console.log(reservasBakup, '2')
                            
            setReservas(reservasBakup.filter(e => e.checked === false));

        } else {
            console.log('3')
            setReservas(reservasBakup)

        }

    }

    const handleChange = (event, newAlignment) => {
        console.log(newAlignment, 'change');
        setAlignment(newAlignment);

        filterList(newAlignment)

    };

    // filterList(true);

    const ordenarFecha = (a, b) => {

        if(a > b) return -1
        else if(a < b) return 1
        else return 0

    }

    const estadoActualizado = async (estadoAct) => {

        console.log(estadoAct, 'ver')
        callResDB();
        // const arr = estadoAct.fecha.split('/');

        // const dia = arr[0];

        // const mes = arr[1];

        // const año = arr[2];

        // const hoy = new Date(año,mes,dia);

        // setReservas(reservasBakup.map((e, i) => {
        //     console.log(e.id === estadoAct.id, estadoAct.checked, 'ver34')
        //     if(e.id === estadoAct.id) {

        //         return {

        //             id: estadoAct.id,
        //             checked: estadoAct.checked,
        //             codCRM: estadoAct.codCRM,
        //             email: estadoAct.email,
        //             message: estadoAct.message,
        //             name: estadoAct.name,
        //             phone: estadoAct.phone,
        //             fecha: hoy.toISOString(),

        //         }

        //     } else if(e.id !== estadoAct.id) return e

        // }));

        

        setTimeout(() => filterList(alignment), 500)

    }

    // window.onscroll = () => {
        
    //     const contenedor = document.getElementsByClassName("contReservas")

    

    //     contenedor[0].style.height = "100%";

    // }
    // console.log(reservas, 'resultado')
    console.log(reservasBakup, 'act');
    return (

        <div className="contReservas">

            <NavBar tipo={location.state.tipo} />

            <div className="contReservas__fil" >

                <h1>Reservas</h1>   
                
                <div className="fill__toggleButtonGroup" >

                    <ToggleButtonGroup
                        color="error"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        size="small"
                    >
                        <ToggleButton value="all">Todos</ToggleButton>
                        <ToggleButton value="past">Pasados</ToggleButton>
                        <ToggleButton value="notPast">No Pasados</ToggleButton>
                    </ToggleButtonGroup>

                </div>

            </div>

            <div className="contReservas__contResCard">

            {

                reservas.sort((a, b) => ordenarFecha(a.fecha, b.fecha)).map((e, i) => {

                    const fechaMap = new Date(e.fecha);

                    return (

                        <ResCard 

                            id={e.id}
                            checkedDB={e.checked}
                            name={e.name} 
                            email={e.email} 
                            codCRM={e.codCRM} 
                            phone={e.phone} 
                            message={e.message !== "" ? e.message : "No hay mensajes"} 
                            fecha={`${fechaMap.getDate()}/${fechaMap.getMonth()}/${fechaMap.getFullYear()}`}
                            key={i}
                            add={estadoActualizado}
                            
                        />

                    )

                })

            }        
                
            </div>    

        </div>

    )

}
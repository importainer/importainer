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

    useEffect(() => {

        const callResDB = async () => {

            const getcollec = await getDocs(collection(db, 'reservas'));

            setReservas(getcollec.docs.map(e => {
                
                return {

                    id: e.id,
                    checked: e.data().userObject.checked,
                    codCRM: e.data().userObject.codCRM,
                    email: e.data().userObject.email,
                    message: e.data().userObject.message,
                    name: e.data().userObject.name,
                    phone: e.data().userObject.phone,

                }

            }));

            setReservasBakup(getcollec.docs.map(e => {
                
                return {

                    id: e.id,
                    checked: e.data().userObject.checked,
                    codCRM: e.data().userObject.codCRM,
                    email: e.data().userObject.email,
                    message: e.data().userObject.message,
                    name: e.data().userObject.name,
                    phone: e.data().userObject.phone,

                }

            }));

        }

        callResDB();

    }, []);

    const filterList = () => {

        if(alignment !== alignment2) {

            if(alignment === 'past') {
    
                setReservas(reservasBakup.filter(e => e.checked === true));
    
            } else if(alignment === 'notPast') {
                
                setReservas(reservasBakup.filter(e => e.checked === false));
    
            } else {

                setReservas(reservasBakup);

            }

            setAlignment2(alignment);

        }

    }

    const handleChange = (event, newAlignment) => {

        setAlignment(newAlignment);

    };

    filterList();

    return (

        <div className="contReservas">

            <NavBar tipo={location.state.tipo} />

            <div className="contReservas__fil" >

                <h1>Reservas</h1>   
                
                <div>

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

                reservas.map((e, i) => {
                    
                    return (

                        <ResCard 

                            id={e.id}
                            checkedDB={e.checked}
                            name={e.name} 
                            email={e.email} 
                            codCRM={e.codCRM} 
                            phone={e.phone} 
                            message={e.message !== "" ? e.message : "No hay mensajes"} 
                            
                        />

                    )

                })

            }        
                
            </div>    

        </div>

    )

}
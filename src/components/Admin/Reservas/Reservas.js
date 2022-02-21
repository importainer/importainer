import React, { useEffect, useState } from 'react';
import { db, app } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import ResCard from "../ResCard/ResCard";
import "./Reservas.css";

export default function Reservas() {

    const [reservas, setReservas] = useState([])

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

        }

        callResDB();

    }, []);

    // console.log(reservas, 'reservas');

    return (

        <div className="contReservas">

            <NavBar />

            <div className="contReservas__fil" >

                <h1>Reservas</h1>   
                
                <div>



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
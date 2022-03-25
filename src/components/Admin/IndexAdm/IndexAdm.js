import React, { useState, useEffect } from "react";
import { db, } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Graphics from "../Graphic/Graphic";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./IndexAdm.css";

export default function IndexAdm({location}) {

    const auth = getAuth();

    const [publicaciones, setPublicaciones] = useState([]);
    const [reservas, setReservas] = useState([]);

    const score = [];

    useEffect(() => {

        const getPub = async () => {
      
            const querySnapshot = await getDocs(collection(db, "publicacion"));

            setPublicaciones(querySnapshot.docs.map(doc => {

                let pubRecorrida = doc.data().codCRM;

                return pubRecorrida;

            }));
      
        }
        
        getPub()

        const getRes = async () => {

            const querySnapshot = await getDocs(collection(db, "reservas"));

            setReservas(querySnapshot.docs.map(e => {

                return e.data().userObject.codCRM

            }));

        }

        getRes();
      
        
    }, []);
    
    onAuthStateChanged(auth, (user) => {

        if(user) {

        } else {
            // User is signed out
            // ...
            
        }
        
    });

    const sumScore = () => {

        reservas.map((e, i) => {

            if( i < reservas.length ) {

                if(e !== undefined && e !== "") {
                    
                    publicaciones.sort().map((f, j) => {

                        if(e == f) {

                            if(score[j] === undefined) score[j] = 1;

                            score[j] = score[j] + 1;

                        }

                    })

                }

            }

        })

    }

    sumScore();

    return (

        <div className="IndexAdmContent">

            <NavBar tipo={location.state.tipo} />

            <div>

                <div>

                    <h3>Reservas</h3>

                    <Graphics publicaciones={publicaciones} puntuacion={score} />

                </div>

            </div>

        </div>

    )

}
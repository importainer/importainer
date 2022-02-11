import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Graphics from "../Graphic/Graphic";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./IndexAdm.css";

export default function IndexAdm() {
    
    const history = useHistory()

    const auth = getAuth();

    const [publicaciones, setPublicaciones] = useState([]);
    const [reservas, setReservas] = useState([]);
    const [login, setLogin] = useState([]);

    const score = [];

    useEffect(() => {

        const getUser = async () => {

            const querySnapshot = await getDocs(collection(db, "login"));

            setLogin(querySnapshot.docs.map(doc => {

                let pubRecorrida = doc.data();

                return pubRecorrida;

            }));

        }

        getUser();

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

            const email = user.email;
           
            const loginStatus = login.find(e => e.email === email)
            
            if (loginStatus.tipo === 'admin') {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                
            } else {
                // User is signed out
                // ...
                history.push("/")
            }

        } else {
            // User is signed out
            // ...
            history.push("/admin")

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

            <NavBar />

            <Graphics publicaciones={publicaciones} puntuacion={score} />

        </div>

    )

}
import React, { useState, useEffect } from "react";
import { db, } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Graphics from "../Graphic/Graphic";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import IndexStyle from "./IndexAdm.module.css";

export default function IndexAdm({location}) {

    const auth = getAuth();

    // ===== RESERVAS =====
    const [publicaciones, setPublicaciones] = useState([]);
    const [reservas, setReservas] = useState([]);

    const score = [];

    // ===== ENCUESTA =====
    const [scoreEncuesta2, setScoreEncuesta2] = useState([]);
    const [cantEncuestas, setCantEncuestas] = useState(0)

    const scoreEncuesta = [];

    useEffect(() => {

        // ===== RESERVAS =====
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

    // ===== ENCUESTA =====
    getDocs(collection(db, "encuesta"))
    .then(tbl => {
        console.log(tbl.docs.length, 'cuantos')
        setCantEncuestas(tbl.docs.length)
        tbl.docs.map(e => {
            
            for (const i in e.data()) {

                if (Object.hasOwnProperty.call(e.data(), i)) {

                    const element = e.data()[i];

                    if(i === '1') {

                        Object.keys(element.data).map((e,j) => {

                            const f = element.data[e];

                            if(scoreEncuesta[j] === undefined) {

                                f ? scoreEncuesta[j] = 1 : scoreEncuesta[j] = 0;

                            } else {

                                f ? scoreEncuesta[j] = scoreEncuesta[j] + 1 : scoreEncuesta[j] = scoreEncuesta[j] + 0;

                            }

                        })

                    }

                    const rating = parseInt(element.rating);
                    
                    if(i < Object.keys(e.data()).length) {

                        if(i >= 2) {

                            let k = parseInt(i) + 4;

                            if(scoreEncuesta[k] === undefined) {

                                scoreEncuesta[k] = rating;

                            } else {

                                scoreEncuesta[k] = scoreEncuesta[k] + rating;

                            }

                        }

                    }

                }
            }

        })

    })
    .catch(err => console.log(err, 'error'))

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

    const labelEncuesta = ['Atencion', 'Practicidad', 'Diseños Personalizabo', 'Financiación', 'Llave en Mano', 'Tiempo Entrega', 'Tiempo Respuesta', 'Recomendacion Empresa', 'Probabilidad de elegirnos', 'Calificacion Empresa'];

    setTimeout(() => {
        
        if(scoreEncuesta2.length === 0) {

            setScoreEncuesta2(scoreEncuesta)

        }

    }, 100)

    // console.log(scoreEncuesta, scoreEncuesta2, 'fuera del time')

    return (

        <div className={IndexStyle.IndexAdmContent}>

            <NavBar tipo={location.state.tipo} />

            <div className={IndexStyle.contentGraphics} >

                <div className={IndexStyle.boxGraphics} >

                    <h1>Reservas</h1>

                    <Graphics publicaciones={publicaciones} score={score} label='Cantidad de Reservas' indexAxis='x' barPercentage='0.5' />

                </div>

                <div className={IndexStyle.boxGraphics} >

                    <h1>{cantEncuestas} Encuestas</h1>

                    <Graphics publicaciones={labelEncuesta} score={scoreEncuesta2} label='Encuestas' indexAxis='y' barPercentage='1' />

                </div>

            </div>

        </div>

    )

}
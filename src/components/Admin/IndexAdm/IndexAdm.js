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
    const [tblState, setTblState] = useState([]);
    // const [labelEncuesta, setLabelEncuesta] = useState([]);
    const [scoreEncuesta2, setScoreEncuesta2] = useState([]);
    const [cantEncuestas, setCantEncuestas] = useState(0)

    // let labelEncuesta = [];
    const labelEncuesta = ['Atencion', 'Practicidad', 'Diseños Personalizabo', 'Financiación', 'Llave en Mano', 'Tiempo Entrega', 'Tiempo Respuesta', 'Recomendacion Empresa', 'Probabilidad de elegirnos', 'Calificacion Empresa'];

    const scoreEncuesta = [];
    // console.log(scoreEncuesta, 'creamos el array')
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

            // ===== ENCUESTA =====
        const getEncuestas = () => {

            getDocs(collection(db, 'encuesta'))
                .then(tbl => {
                    
                    setCantEncuestas(tbl.docs.length);
                    
                    tbl.docs.map(doc => {

                        // const ele = doc.data();

                        for (const k in doc.data()) {

                            if (Object.hasOwnProperty.call(doc.data(), k)) {

                                const e = doc.data()[k];

                                if(parseInt(k) === 1) {

                                    const check = e.data;

                                    for (const i in check) {

                                        if (Object.hasOwnProperty.call(check, i)) {

                                            const ele = check[i];

                                            // console.log(ele, i, 'ele')
                                            // console.log(scoreEncuesta[0], 'fuera switch')
                                            // console.log(labelEncuesta.indexOf(i))

                                            // console.log(labelEncuesta.includes(i))
                                            // if(labelEncuesta.length <= 5) {

                                                // if(!labelEncuesta.includes(i)) {

                                                //     labelEncuesta.push(i)
    
                                                // }

                                            // }

                                            // if(!labelEncuesta.includes(i)) {

                                            //     labelEncuesta.push(i)

                                            // }

                                            switch (i) {

                                                case 'Atencion':

                                                    if(scoreEncuesta[0] === undefined) ele ? scoreEncuesta[0] = 1 : scoreEncuesta[0] = 0;
                                                    else ele ? scoreEncuesta[0] = scoreEncuesta[0] + 1 : scoreEncuesta[0] = scoreEncuesta[0] + 0;
                                                        break;

                                                case 'Practicidad':

                                                    if(scoreEncuesta[1] === undefined) ele ? scoreEncuesta[1] = 1 : scoreEncuesta[1] = 0;
                                                    else ele ? scoreEncuesta[1] = scoreEncuesta[1] + 1 : scoreEncuesta[1] = scoreEncuesta[1] + 0;
                                                        break;

                                                case 'diseñosPersonalizables':

                                                    if(scoreEncuesta[2] === undefined) ele ? scoreEncuesta[2] = 1 : scoreEncuesta[2] = 0;
                                                    else ele ? scoreEncuesta[2] = scoreEncuesta[2] + 1 : scoreEncuesta[2] = scoreEncuesta[2] + 0;
                                                        break;

                                                case 'financiacion':

                                                    if(scoreEncuesta[3] === undefined) ele ? scoreEncuesta[3] = 1 : scoreEncuesta[3] = 0;
                                                    else ele ? scoreEncuesta[3] = scoreEncuesta[3] + 1 : scoreEncuesta[3] = scoreEncuesta[3] + 0;
                                                        break;

                                                case 'llaveEnMano':

                                                    if(scoreEncuesta[4] === undefined) ele ? scoreEncuesta[4] = 1 : scoreEncuesta[4] = 0;
                                                    else ele ? scoreEncuesta[4] = scoreEncuesta[4] + 1 : scoreEncuesta[4] = scoreEncuesta[4] + 0;
                                                        break;

                                                case 'tiempoEntrega':

                                                    if(scoreEncuesta[5] === undefined) ele ? scoreEncuesta[5] = 1 : scoreEncuesta[5] = 0;
                                                    else ele ? scoreEncuesta[5] = scoreEncuesta[5] + 1 : scoreEncuesta[5] = scoreEncuesta[5] + 0;
                                                        break;

                                            }
                                            
                                        }
                                    }

                                } else {

                                    for (const j in e) {
                                        if (Object.hasOwnProperty.call(e, j)) {
                                            const el = e[j];
    
                                            if(j === 'Tiempo Respuesta') console.log(el, j, e.rating, 'seguimos')

                                            switch (j) {

                                                case 'Tiempo Respuesta':

                                                    scoreEncuesta[6] = scoreEncuesta[6] + e.rating;

                                                    // if(scoreEncuesta[6] === undefined) scoreEncuesta[6] = scoreEncuesta[6] + e.rating;
                                                    // else ele ? scoreEncuesta[5] = scoreEncuesta[5] + 1 : scoreEncuesta[5] = scoreEncuesta[5] + 0;
                                                        break;
                                            
                                                default:
                                                    break;
                                            }
                                            
                                        }
                                    }

                                }

                                //---


                                // labelEncuesta = [...labelEncuesta, 'Tiempo Entrega', 'Tiempo Respuesta', 'Recomendacion Empresa', 'Probabilidad de Elegirnos', 'Calificacion Empresa']

                                // labelEncuesta.push('Tiempo Entrega', 'Tiempo Respuesta', 'Recomendacion Empresa', 'Probabilidad de elegirnos', 'Calificacion Empresa')

                                // const txt = 

                                // if(!labelEncuesta.includes(i)) {

                                //     labelEncuesta.push(i)

                                // }

                            }
                        }
                        

                    })

                })
                .catch(e => console.log(e, 'error'))

        }

        getEncuestas()
              
    }, []);

    
    // const labelEncuesta = [];

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

    // const labelEncuesta = ['Atencion', 'Practicidad', 'Diseños Personalizabo', 'Financiación', 'Llave en Mano', 'Tiempo Entrega', 'Tiempo Respuesta', 'Recomendacion Empresa', 'Probabilidad de elegirnos', 'Calificacion Empresa'];
    
    // setTimeout(() => {
        
    //     // if(scoreEncuesta2.length === 0) {

    //     //     setScoreEncuesta2(scoreEncuesta);

    //     // }

    //     console.log(labelEncuesta, 'fuera del time')

    // }, 1000)

    console.log(labelEncuesta, scoreEncuesta, 'fuera del time')

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

                    <Graphics publicaciones={labelEncuesta} score={scoreEncuesta} label='Encuestas' indexAxis='y' barPercentage='1' />

                </div>

            </div>

        </div>

    )

}
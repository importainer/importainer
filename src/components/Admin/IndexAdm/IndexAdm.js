import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Graphics from "../Graphic/Graphic";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import IndexStyle from "./IndexAdm.module.css";

export default function IndexAdm({location}) {

    // ===== RESERVAS =====
    const [publicaciones, setPublicaciones] = useState([]);
    const [reservas, setReservas] = useState([]);

    const score = [];
    // ===== RESERVAS =====

    // ===== ENCUESTA =====
    const [tblState, setTblState] = useState([]);
    const [tblQuery, setTblQuery] = useState([]);
    const [labelEncuesta, setLabelEncuesta] = useState([]);
    const [cantEncuestas, setCantEncuestas] = useState(0)
    const scoreEncuesta = [];
    // ===== ENCUESTA =====
    
    // ===== ENCUESTA VENTAS =====
    const [tblStateVentas, setTblStateVentas] = useState([]);
    const [labelEncuestaVentas, setLabelEncuestaVentas] = useState([]);
    const [cantEncuestasVentas, setCantEncuestasVentas] = useState(0)
    const scoreEncuestaVentas = [];
    // ===== ENCUESTA VENTAS =====
    
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

        // ===== RESERVAS =====

        // ===== ENCUESTA =====

        const getEncuestas = () => {

            if(labelEncuesta.length === 0) {

                getDocs(collection(db, 'encuestaBackup'))
                .then(tbl => {
                    
                    setCantEncuestas(tbl.docs.length);

                    // ----- CARGAR BACKUP ------

                    // tbl.docs.map(async e => {

                    //     console.log(e.data(), 'ver')

                    //     await addDoc(collection(db, "encuesta"), e.data());

                    // })

                    // ----- CARGAR BACKUP ------

                    const data = tbl.docs.map(e => e.data()[1].data);

                    setTblState(tbl.docs.map(e => e.data()[1].data));

                    setTblQuery(tbl.docs.map(e => e.data()))

                    const getDataLabel = () => {

                        data.forEach(ele => setLabelEncuesta(Object.keys(ele)));

                    }

                    getDataLabel();

                    

                })
                .catch(e => console.log(e, 'error'))

            }

        }

        getEncuestas()
        
        // ===== ENCUESTA =====

        // ===== ENCUESTA VENTAS =====

        const getEncuestasVentas = () => {

            if(labelEncuestaVentas.length === 0) {

                getDocs(collection(db, 'encuestaVentas'))
                .then(tbl => {
                    
                    setCantEncuestasVentas(tbl.docs.length);

                    // ----- CARGAR BACKUP ------

                    // tbl.docs.map(async e => {

                    //     console.log(e.data(), 'ver')

                    //     await addDoc(collection(db, "encuesta"), e.data());

                    // })

                    // ----- CARGAR BACKUP ------

                    const data = tbl.docs.map(e => e.data()[1].data);

                    setTblStateVentas(tbl.docs.map(e => e.data()[1].data));

                    const getDataLabelVentas = () => {

                        data.forEach(ele => setLabelEncuestaVentas(Object.keys(ele)));

                    }

                    getDataLabelVentas();

                    

                })
                .catch(e => console.log(e, 'error'))

            }

        }

        getEncuestasVentas()
        
        // ===== ENCUESTA VENTAS =====
              
    }, []);

    // ===== RESERVAS =====
    
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
    
    // ===== RESERVAS =====

    // ===== ENCUESTA =====

    const getPropData = () => {

        let llaveMano, diseñosPersonalizables, practicidad, atencion, tiempoEntrega, financiacion;
        
        llaveMano = tblState.map(e => e['Llave en Mano'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        diseñosPersonalizables = tblState.map(e => e['Diseños Personalizables'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        practicidad = tblState.map(e => e['Practicidad'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        atencion = tblState.map(e => e['Atencion'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        tiempoEntrega = tblState.map(e => e['Tiempo Entrega'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        financiacion = tblState.map(e => e['Financiacion'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        scoreEncuesta[labelEncuesta.indexOf('Llave en Mano')] = llaveMano;
        
        scoreEncuesta[labelEncuesta.indexOf('Diseños Personalizables')] = diseñosPersonalizables;

        scoreEncuesta[labelEncuesta.indexOf('Practicidad')] = practicidad;

        scoreEncuesta[labelEncuesta.indexOf('Atencion')] = atencion;

        scoreEncuesta[labelEncuesta.indexOf('Tiempo Entrega')] = tiempoEntrega;

        scoreEncuesta[labelEncuesta.indexOf('Financiacion')] = financiacion;

    }

    getPropData()

    const getQueryData = () => {

        const querys = tblQuery.map(e => {

            return {

                2: e[2],
                3: e[3],
                4: e[4],
                5: e[5],

            }

        });

        querys.forEach(e => {

            for (const k in e) {

                if (Object.hasOwnProperty.call(e, k)) {

                    const element = e[k];

                    if(!labelEncuesta.includes(Object.keys(element)[0]) && Object.keys(element)[0] !== 'rating'){
                        
                        setLabelEncuesta([...labelEncuesta, Object.keys(element)[0]])

                    }
                                        
                }
            }

        });

    }

    getQueryData()

    const getScoreQuery = () => {

        const querys = tblQuery.map(e => {

            return {

                2: e[2],
                3: e[3],
                4: e[4],
                5: e[5],

            }

        });

        querys.forEach(e => {

            for (const k in e) {

                if (Object.hasOwnProperty.call(e, k)) {

                    const element = e[k];

                    let indexElement = labelEncuesta.indexOf(Object.keys(element)[0]);

                    let rat = parseInt(element.rating);

                    if(labelEncuesta.includes(Object.keys(element)[0]) && Object.keys(element)[0] !== 'rating'){

                        if(scoreEncuesta[indexElement] === undefined) {
                            
                            scoreEncuesta[indexElement] = rat;

                        } else {
                            
                            scoreEncuesta[indexElement] = scoreEncuesta[indexElement] + rat;

                        }

                    }
                     
                }
            }

        })

        scoreEncuesta.reduce((acc, score, i) => {

            if(i > 5) {

                acc = Math.ceil(score / cantEncuestas);

                scoreEncuesta[i] = acc;

            }

        }, 0)

    }

    getScoreQuery()
    
    // ===== ENCUESTA =====

    // ===== ENCUESTA VENTAS =====

    const getPropDataVentas = () => {

        let llaveMano, diseñosPersonalizables, practicidad, atencion, tiempoEntrega, financiacion;
        
        llaveMano = tblStateVentas.map(e => e['Llave en Mano'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        diseñosPersonalizables = tblStateVentas.map(e => e['Diseños Personalizables'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        practicidad = tblStateVentas.map(e => e['Practicidad'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        atencion = tblStateVentas.map(e => e['Atencion'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        tiempoEntrega = tblStateVentas.map(e => e['Tiempo Entrega'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        financiacion = tblStateVentas.map(e => e['Financiacion'] === true ? 1 : 0).reduce((acc, e) => acc += e, 0);

        scoreEncuestaVentas[labelEncuestaVentas.indexOf('Llave en Mano')] = llaveMano;
        
        scoreEncuestaVentas[labelEncuestaVentas.indexOf('Diseños Personalizables')] = diseñosPersonalizables;

        scoreEncuestaVentas[labelEncuestaVentas.indexOf('Practicidad')] = practicidad;

        scoreEncuestaVentas[labelEncuestaVentas.indexOf('Atencion')] = atencion;

        scoreEncuestaVentas[labelEncuestaVentas.indexOf('Tiempo Entrega')] = tiempoEntrega;

        scoreEncuestaVentas[labelEncuestaVentas.indexOf('Financiacion')] = financiacion;

    }

    getPropDataVentas()
    
    // ===== ENCUESTA VENTAS =====

    // console.log(scoreEncuesta, labelEncuesta, 'fin')

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
                
                {/* <div className={IndexStyle.boxGraphics} >

                    <h1>{cantEncuestasVentas} Encuestas De Ventas</h1>

                    <Graphics publicaciones={labelEncuestaVentas} score={scoreEncuestaVentas} label='Encuestas' indexAxis='y' barPercentage='1' />

                </div> */}

            </div>

        </div>

    )

}
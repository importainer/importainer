import React, { useState } from 'react';
import { app, db } from '../../../firebase';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Encuest from './Encuesta.module.css';

export default function LinkCuestionario() {

    const dia = new Date().getDate();

    const mes = new Date().getMonth();

    const año = new Date().getFullYear();

    const hoy = `${dia}/${mes + 1}/${año}`;
    
    const [encuesta, setEncuesta] = useState({

        0: hoy,

        1: {

            query: '',

            data: {

                Financiacion: false,

                'Tiempo Entrega': false,

                'Llave en Mano': false,

                'Diseños Personalizables': false,

                Practicidad: false,

                Atencion: false,
                
            },

        },

        2: {

            query: '',

            rating: 5,

        },

        3: {

            query: '',

            rating: 5,

        },

        4: {

            query: '',

            rating: 5,

        },

        5: {

            query: '',

            rating: 5,

        },

    })

    const login = () => {

        const provider = new GoogleAuthProvider();

        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);

                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                
                setEncuesta({

                    ...encuesta,

                    user: {

                        name: user.displayName,
                        email: user.email,
                        tel: user.phoneNumber,
            
                    }

                })

                // ...
            }).catch((error) => {

                // Handle Errors here.
                const errorCode = error.code;

                const errorMessage = error.message;

                // The email of the user's account used.
                const email = error.email;

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                // ...

                console.log(errorCode, errorMessage, email, 'error')

            });

    }

    const selected = (e) => {

        const { value } = e.target;

        const divActive = document.getElementsByClassName(Encuest.rating)[0];

        let n = parseInt(divActive.id);
        
        const h3Text = divActive?.childNodes[0];
        
        setEncuesta({...encuesta,
            
            [n]: {

                [h3Text.id]: h3Text.innerHTML,

                rating: value,

            },
        });

        if(n < 5) {

            setTimeout(() => {

                n++;
        
                const divSecond = document.getElementById(n);
        
                divSecond.className = Encuest.rating;
        
                divActive.className = Encuest.desactiv;

            }, 800)

        }

    }

    let google = true;

    const siguiente = async () => {

        const divActive = document.getElementsByClassName(Encuest.rating)[0];

        let n = parseInt(divActive.id);

        if(google) {

            login()

            google = false;

        } else {

            if(n === 5) {

                const encuestaRef = app.firestore().collection('encuesta');
    
                encuestaRef.doc().set(encuesta);
                
                await addDoc(collection(db, "encuestaBackup"), encuesta);
        
                if(encuesta[5].rating > 3) {
        
                    window.location.href = 'https://g.page/r/CQpbX5Jjq0H9EBE/review';
        
                } else {
        
                    n++;
            
                    const divSecond = document.getElementById(n);
            
                    divSecond.className = Encuest.rating;
            
                    divActive.className = Encuest.desactiv;
        
                }
    
            } else {
        
                n++;
        
                const divSecond = document.getElementById(n);
        
                divSecond.className = Encuest.rating;
        
                divActive.className = Encuest.desactiv;
    
            }

        }

    }

    const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: '2em' }} />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon sx={{ fontSize: '2em' }} />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon sx={{ fontSize: '2em' }} />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon sx={{ fontSize: '2em' }} />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon sx={{ fontSize: '2em' }} />,
          label: 'Very Satisfied',
        },
    };
    
    function IconContainer(props) {
    const { value, ...other } = props;
    
    return <span {...other}>{customIcons[value].icon}</span>;
    }
      
    IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
    };


    const handleChange = (event) => {

        const { name, checked } = event.target;

        const divActive = document.getElementsByClassName(Encuest.rating)[0];

        const h3Text = divActive?.childNodes[0].innerHTML;

        setEncuesta({...encuesta,
            
            1: {

                query: h3Text,

                data: {
                    
                    ...encuesta[1].data,

                    [name]: checked
                },

            },
        });

    };

    const { financiacion, tiempoEntrega, llaveEnMano, diseñosPersonalizables, Practicidad, Atencion } = encuesta[1].data;

    return (

        <div className={Encuest.content} >

            <div className={Encuest.box} >

                <p>

                    Encuesta de satisfacción del cliente – IMPORTAINER S.A.
                    Les pedimos por favor a nuestros clientes que respondan esta encuesta 
                    para poder evaluar nuestro desempeño como empresa. Muchas gracias.

                </p>

                <div className={Encuest.ratingGroup} >

                    <div id='1' className={Encuest.rating} >

                        <h3>¿Por qué elegiste construir con Importainer? (Podes marcar más de una opción)</h3>

                        <Box sx={{ display: 'flex' }}>
                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                <FormGroup>
                                    <div className={Encuest.towGorup}>

                                        <div className={Encuest.gr1} >

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={financiacion} onChange={handleChange} name="Financiacion" />
                                                }
                                                label="Financiación"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={tiempoEntrega} onChange={handleChange} name="Tiempo Entrega" />
                                                }
                                                label="Tiempo de entrega"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={llaveEnMano} onChange={handleChange} name="Llave en Mano" />
                                                }
                                                label="Sistema llave en mano"
                                            />

                                        </div>

                                        <div className={Encuest.gr2} >

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={Atencion} onChange={handleChange} name="Atencion" />
                                                }
                                                label="Atencion"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={diseñosPersonalizables} onChange={handleChange} name="Diseños Personalizables" />
                                                }
                                                label="Diseños personalizables"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={Practicidad} onChange={handleChange} name="Practicidad" />
                                                }
                                                label="Practicidad"
                                            />

                                        </div>

                                    </div>
                                </FormGroup>
                            </FormControl>
                        </Box>

                        <input type="submit" value="Siguiente" onClick={siguiente} />

                    </div>

                    <div id='2' className={Encuest.desactiv} >

                        <h3 id='Tiempo Respuesta'>¿Cómo fue el tiempo de respuesta?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                    </div>

                    <div id='3' className={Encuest.desactiv} >

                        <h3 id='Recomendacion Empresa' >¿Qué tan probable es que usted recomiende nuestra empresa a algún conocido?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                    </div>

                    <div id='4' className={Encuest.desactiv} >

                        <h3 id='Probabilidad de Elegirnos' >¿Cuál es la probabilidad de que vuelva a adquirir uno de nuestros productos?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                    </div>

                    <div id='5' className={Encuest.desactiv} >

                        <h3 id='Calificacion Empresa' >¿Cómo calificaría su experiencia general con la empresa?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                        <input type="submit" value="Siguiente" onClick={siguiente} />

                    </div>

                    <div id='6' className={Encuest.desactiv} >

                        <h3>Gracias por sus respuestas, las estaremos evualuando para mejorar nuestro desempeño</h3>

                    </div>

                </div>

            </div>

        </div>

    )

}
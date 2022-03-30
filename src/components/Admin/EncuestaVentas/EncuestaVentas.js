import React, { useState } from 'react';
import { app } from '../../../firebase';
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
import EncuestaVen from './EncuestaVentas.module.css';

export default function LinkCuestionario() {

    const dia = new Date().getDay();

    const mes = new Date().getMonth();

    const año = new Date().getFullYear();

    const hoy = `${dia}/${mes}/${año}`;

    const [encuesta, setEncuesta] = useState({

        0: hoy,

        1: {

            query: '',

            data: {

                precioCaro: false,

                entregaLejana: false,

                malaAtencion: false,

                formaPago: false,

                otraEmpresa: false,

                otroMotivo: false,

                inputMot: '',
                
            },

        },

        2: {

            'Tiempo Respuesta': '',

            rating: 5,

        },

        3: {

            'Atencion de Asesores': '',

            rating: 5,

        },

        4: {

            'Probabilidad de Elegirnos': '',

            rating: 5,

        },

        5: {

            'Calificacion Empresa': '',

            rating: 5,

        },

    })

    const selected = (e) => {

        const { value } = e.target;

        const divActive = document.getElementsByClassName(EncuestaVen.rating)[0];

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
        
                divSecond.className = EncuestaVen.rating;
        
                divActive.className = EncuestaVen.desactiv;

            }, 800)

        }

    }

    const siguiente = () => {

        const divActive = document.getElementsByClassName(EncuestaVen.rating)[0];

        let n = parseInt(divActive.id);

        if(n === 5) {

            const encuestaRef = app.firestore().collection('encuestaVentas');

            encuestaRef.doc().set(encuesta);
    
            if(encuesta[5].rating > 3) {
    
                window.location.href = 'https://g.page/r/CQpbX5Jjq0H9EBE/review';
    
            } else {
    
                n++;
        
                const divSecond = document.getElementById(n);
        
                divSecond.className = EncuestaVen.rating;
        
                divActive.className = EncuestaVen.desactiv;
    
            }

        } else {
    
            n++;
    
            const divSecond = document.getElementById(n);
    
            divSecond.className = EncuestaVen.rating;
    
            divActive.className = EncuestaVen.desactiv;

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

        const { name, checked, value } = event.target;

        const divActive = document.getElementsByClassName(EncuestaVen.rating)[0];

        const h3Text = divActive?.childNodes[0].innerHTML;

        setEncuesta({...encuesta,
            
            1: {

                query: h3Text,

                data: {
                    
                    ...encuesta[1].data,

                    [name]: name === 'inputMot' ? value : checked,
                },

            },
        });

        if(name === 'otroMotivo') {

            const inputMot = document.getElementsByClassName(EncuestaVen.inputMot)[0];

            checked ? inputMot.style.display = 'block' : inputMot.style.display = 'none';

        }

    };

    const { financiacion, tiempoEntrega, llaveEnMano, diseñosPersonalizables, Practicidad, Atencion } = encuesta[1].data;

    return (

        <div className={EncuestaVen.content} >

            <div className={EncuestaVen.box} >

                <p>

                    Encuesta de satisfacción – IMPORTAINER S.A.
                    ¡Hola! Te pedimos unos minutos de tu tiempo 
                    para responder esta encuesta que nos va a ayudar a mejorar 
                    nuestro asesoramiento, la encuesta es anónima y muy breve.

                </p>

                <div className={EncuestaVen.ratingGroup} >

                    <div id='1' className={EncuestaVen.rating} >

                        <h3>¿Por qué decidió no construir con IMPORTAINER? (Podes marcar más de una opción)</h3>

                        <Box sx={{ display: 'flex' }}>
                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                <FormGroup>
                                    <div className={EncuestaVen.towGorup}>

                                        <div className={EncuestaVen.gr1} >

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={financiacion} onChange={handleChange} name="precioCaro" />
                                                }
                                                label="Me pareció muy caro"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={tiempoEntrega} onChange={handleChange} name="entregaLejana" />
                                                }
                                                label="Queda muy lejana la entrega"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={llaveEnMano} onChange={handleChange} name="malaAtencion" />
                                                }
                                                label="Recibí mala atención"
                                            />

                                        </div>

                                        <div className={EncuestaVen.gr2} >

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={Atencion} onChange={handleChange} name="formaPago" />
                                                }
                                                label="No me convenció la forma de pago"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={diseñosPersonalizables} onChange={handleChange} name="otraEmpresa" />
                                                }
                                                label="Compré en otra empresa"
                                            />

                                            <FormControlLabel
                                                control={
                                                <Checkbox checked={Practicidad} onChange={handleChange} name="otroMotivo" />
                                                }
                                                label="Otro motivo ¿Cuál?"
                                            />

                                        </div>

                                        <input name='inputMot' className={EncuestaVen.inputMot} type="text" placeholder='Escribenos tu motivo...' onChange={handleChange} />

                                    </div>
                                </FormGroup>
                            </FormControl>
                        </Box>

                        <input type="submit" value="Siguiente" onClick={siguiente} />

                    </div>

                    <div id='2' className={EncuestaVen.desactiv} >

                        <h3 id='Tiempo Respuesta'>¿Cómo fue el tiempo de respuesta?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                    </div>

                    <div id='3' className={EncuestaVen.desactiv} >

                        <h3 id='Atencion de Asesores' >¿Qué tan conforme quedó con la atención de nuestros asesores?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                    </div>

                    <div id='4' className={EncuestaVen.desactiv} >

                        <h3 id='Probabilidad de Elegirnos' >¿Cuál es la probabilidad de que vuelva a adquirir uno de nuestros productos?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                    </div>

                    <div id='5' className={EncuestaVen.desactiv} >

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

                    <div id='6' className={EncuestaVen.desactiv} >

                        <h3>Gracias por sus respuestas, las estaremos evualuando para mejorar nuestro desempeño</h3>

                    </div>

                </div>

            </div>

        </div>

    )

}
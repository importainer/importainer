import React, { useState } from 'react';
import { app, db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Encuest from './Encuesta.module.css';

export default function LinkCuestionario() {

    const dia = new Date().getDay();

    const mes = new Date().getMonth();

    const año = new Date().getFullYear();

    const hoy = `${dia}/${mes}/${año}`;

    const [encuesta, setEncuesta] = useState({

        0: hoy,

        1: {

            query: '',

            rating: 5,

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

    const selected = (e) => {

        const { value } = e.target;

        const divActive = document.getElementsByClassName(Encuest.rating)[0];

        let n = parseInt(divActive.id);

        const h3Text = divActive?.childNodes[0].innerHTML;
        
        setEncuesta({...encuesta,
            
            [n]: {

                query: h3Text,

                rating: value,

            },
        });

        if(n < 5) {

            n++;
    
            const divSecond = document.getElementById(n);
    
            divSecond.className = Encuest.rating;
    
            divActive.className = Encuest.desactiv;

        }

    }

    const siguiente = () => {

        const encuestaRef = app.firestore().collection('encuesta');

        encuestaRef.doc().set(encuesta);

        if(encuesta[5].rating > 3) {

            window.location.href = 'https://g.page/r/CQpbX5Jjq0H9EBE/review';

        } else {

            const divActive = document.getElementsByClassName(Encuest.rating)[0];

            let n = parseInt(divActive.id);

            n++;
    
            const divSecond = document.getElementById(n);
    
            divSecond.className = Encuest.rating;
    
            divActive.className = Encuest.desactiv;

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

    console.log(encuesta, 'encuesta')

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

                        <h3>¿Qué tan satisfecho/a está usted con la atención brindada por nuestra empresa?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                        {/* <input type="submit" value="Siguiente" onClick={siguiente} /> */}

                    </div>

                    <div id='2' className={Encuest.desactiv} >

                        <h3>¿Cómo fue el tiempo de respuesta?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                        {/* <input type="submit" value="Siguiente" onClick={siguiente} /> */}

                    </div>

                    <div id='3' className={Encuest.desactiv} >

                        <h3>¿Qué tan probable es que usted recomiende nuestra empresa a algún conocido?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                        {/* <input type="submit" value="Siguiente" onClick={siguiente} /> */}

                    </div>

                    <div id='4' className={Encuest.desactiv} >

                        <h3>¿Cuál es la probabilidad de que vuelva a adquirir uno de nuestros productos?</h3>

                        <Rating
                            name="highlight-selected-only"
                            defaultValue={5}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            onChange={e => selected(e)}
                        />

                        {/* <input type="submit" value="Siguiente" onClick={siguiente} /> */}

                    </div>

                    <div id='5' className={Encuest.desactiv} >

                        <h3>¿Cómo calificaría su experiencia general con la empresa?</h3>

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
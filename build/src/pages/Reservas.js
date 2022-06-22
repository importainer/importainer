import React, { useState } from 'react';
import NavBarSec from '../components/NavBarSec/NavBarSec';
import FooterSec from '../components/FooterSec/FooterSec';
import ReservaComplete from '../components/Reserva/ReservaComplete';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "../components/styles/Reserva.css";

export default function Reservas(location) {

    const [codigoCRM, setCodigoCRM] = useState('general');

    const [bloqued, setBloqued] = useState(false);

    const [recorrido, setRecorrido] = useState(true);
    
    if(recorrido) {

        if(location.location.state?.codCRM !== undefined) {
            
            if(codigoCRM === 'general') {
    
                setCodigoCRM(location.location.state?.codCRM);

                setRecorrido(false);
    
            } else {

                setRecorrido(false);

            }
    
        } else {
            
            setBloqued(true);
    
            setRecorrido(false);
    
        }

    }

    return(

        <div className="">

            <NavBarSec title="Reserva"/>

            {

                codigoCRM === 'general' ?
                    
                    <div className='contentAlert'>

                        <Stack sx={{ width: '100%' }} spacing={2}>

                            <Alert variant="outlined" severity="error">

                                Porfavor es necesario que vuelva a elegir la casa seleccionada

                            </Alert>

                        </Stack>

                    </div> : null

            }
                
            <ReservaComplete codCRM={codigoCRM} bloqued={bloqued} />

            <FooterSec />
        </div>
    )

}
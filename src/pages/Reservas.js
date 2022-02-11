import React from 'react'
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec'
import ReservaComplete from '../components/Reserva/ReservaComplete'

const reservas = (location) => {
    
    return(
        <div className="">
            <NavBarSec title="Reserva"/>
            <ReservaComplete codCRM={location.location.state.codCRM} />
            <FooterSec />
        </div>
    )
}

export default reservas
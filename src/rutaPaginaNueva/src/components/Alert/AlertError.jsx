import React from 'react';
import stAlertError from "./AlertErrorStyle.module.css";

export default function AlertError({ title, message, state, add }) {

    const activeAlert = () => {

        document.getElementsByClassName(stAlertError.AlertContainer)[0]?.classList.toggle(stAlertError.active);
        
    }

    state && activeAlert();

    const toggleComponent = () => {

        add(false);

        activeAlert()

    }

    return (

        <div className={stAlertError.AlertContainer} >

            <h3>{title}</h3>

            <p>{message}</p>

            <div className={stAlertError.button} onClick={toggleComponent} ><p>Enviar</p></div>

        </div>

    )

}
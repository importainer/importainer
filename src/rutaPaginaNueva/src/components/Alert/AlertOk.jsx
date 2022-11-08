import React from 'react';
import stAlertOk from "./AlertOkStyle.module.css";

export default function AlertError({ title, message, state, add }) {

    const activeAlert = () => {

        document.getElementsByClassName(stAlertOk.AlertContainer)[0]?.classList.toggle(stAlertOk.active);
        
    }

    state && activeAlert();

    const toggleComponent = () => {

        add(false);

        activeAlert()

    }

    return (

        <div className={stAlertOk.AlertContainer} >

            <h3>{title}</h3>

            <p>{message}</p>

            <div className={stAlertOk.button} onClick={toggleComponent} ><p>Enviar</p></div>

        </div>

    )

}
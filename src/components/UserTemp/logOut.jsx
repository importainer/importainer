import React from 'react';
import { useHistory } from 'react-router-dom';
import logOutSM from './logOutSt.module.css';

export default function LogOut() {

    const history = useHistory();

    const logOutSession = () => {

        const myLocalStorage = window.localStorage;

        myLocalStorage.removeItem('userTempImpor')

        setTimeout(() => {

            history.push("/userTemp");

        }, 3000)

    }

    return (

        <div className={logOutSM.contentLog} >

            <div className={logOutSM.formLog} >

                <h1>IMPORTAINER</h1>

                <input type="submit" onClick={logOutSession} value="Cerrar Sesion" />

            </div>

        </div>

    )

}
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import tempUs from "./usTe.module.css";

export default function UserTemp() {

    const history = useHistory();

    const [input, setInPut] = useState({userIng: '', passIng: ''});

    const myLocalStorage = window.localStorage;

    const userFalse = {user: "paginaNueva", pass: "nuevaimportainer"}

    const inputChange = (e) => {

        e.preventDefault();

        const { name, value } = e.target

        switch (name) {

            case "impUser":
                setInPut({...input, userIng: value});
                    break;

            case "impPass":
                setInPut({...input, passIng: value});
                    break;

        }

    }

    const encrypt = (text) => {
      
        return Base64.stringify(Utf8.parse(text));

    };

    const registerLog = () => {

        if(input.userIng === userFalse.user && input.passIng === userFalse.pass) {
    
            myLocalStorage.setItem('userTempImpor',encrypt(input.userIng + input.passIng))
            
            history.push("/PaginaNueva")
        
        } else {
            
            history.push("/userTemp")
        
        }

        // console.log(myLocalStorage.getItem('userTempImpor'));

    }

    return (

        <div className={tempUs.contentLog} >

            <div className={tempUs.formLog} >

                <h1>IMPORTAINER</h1>

                <input name="impUser" type="text" onChange={e => inputChange(e)} />

                <input name="impPass" type="password" onChange={e => inputChange(e)} />

                <input type="submit" onClick={registerLog} value="Ingresar" />

            </div>

        </div>

    )

}
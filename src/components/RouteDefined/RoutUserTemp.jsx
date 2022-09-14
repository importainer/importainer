import React from "react";
import { Route, useHistory } from "react-router-dom";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

export default function RouteUserTemp({ path, component, location }) {

    const history = useHistory();

    const userFalse = {user: "paginaNueva", pass: "nuevaimportainer"}

    const myLocalStorage = window.localStorage;

    const decrypt = (data) => {

        return Base64.parse(data).toString(Utf8);

    };
    
    const userTemp = () => {

        const localST = myLocalStorage?.getItem('userTempImpor') !== null ? decrypt(myLocalStorage?.getItem('userTempImpor')) : false;
                
        if(localST === (userFalse.user + userFalse.pass) && localST !== null) {

            if(location.state?.proy.length > 0) {

                <Route exact location={{ pathname:{path}, state: { proy:location.state?.proy } }} component={component} />
            
            } else {

                return <Route exact path={path} component={component} />

            }
            
        } else {
            
            history.push("/userTemp");
        
        }

    }

    return (

        <>
        
            {userTemp()}
        
        </>

    )

}
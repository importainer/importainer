import React, { useState } from 'react';
import { Route, useHistory } from "react-router-dom";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

export default function RouteSecond({ path, component, location }) {

    const history = useHistory();

    const userFalse = {user: "paginaNueva", pass: "nuevaimportainer"}

    const myLocalStorage = window.localStorage;

    const decrypt = (data) => {

        return Base64.parse(data).toString(Utf8);

    };

    const routeAdmin = () => {

        const localST = myLocalStorage?.getItem('userTempImpor') !== null ? decrypt(myLocalStorage?.getItem('userTempImpor')) : false;
        
        if(localST === (userFalse.user + userFalse.pass) && localST !== null) {

            return <Route exact location={{ pathname:{path}, state: { tipo: 'marketing' } }} component={component} />

            // if(location.state?.proy.length > 0) {
            //     console.log('1')
                
            
            // } else {

            //     console.log('2')
            //     return <Route exact path={path} component={component} />

            // }
            
        } else {
            
            history.push("/userTemp");
        
        }

        // switch (userConect?.tipo) {

        //     case 'admin':
                
        //         history.push("/indexAdm");
                
        //             break;

        //     case "marketing":

        //         return <Route exact location={{ pathname:{path}, state: { tipo: userConect?.tipo, id:location.state?.id } }} component={component} />

        //     case 'user':

        //         history.push("/");
                
        //             break;

        //     case "SUser":

        //         history.push("/admin");

        //             break;

        //     case null:

        //         history.push("/admin");
                
        //             break;

        // }

    }

    return (
    
        <>
        
            {routeAdmin()}
            
        </>

    )

}
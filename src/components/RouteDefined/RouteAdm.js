import React, { useEffect, useState } from 'react';
import { HashRouter, Route, useHistory } from 'react-router-dom';
import { db, app } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';
import Login from "../Admin/LoginIn/LoginIn";

export default function RouteAM({ path, component }) {
    
    const auth = getAuth();
    const history = useHistory();

    const [userLog, setUserLog] = useState([]);
    const [usersDB, setUsersDB] = useState([]);
    const [userConect, setUserConect] = useState([]);
    const [estado, setEstado] = useState(true);

    const consDB = async () => {
        
        if(usersDB.length === 0) {

            const queryUser = await getDocs(collection(db, 'login'));
            
            setUsersDB(queryUser.docs.map(e => e.data()))

        }

    }

    consDB();
    
    onAuthStateChanged(auth, (user) => {
        
        if(user) {
            
            setUserLog(user.email);

        } else {

            setUserConect({tipo: "SUser"});

        }

    });

    if(userConect?.length === 0 || userConect === undefined) {
        
        setTimeout(() => {

            setUserConect(usersDB?.find(e => e.email === userLog));

        }, 100)

    }

    const routeAdmin = () => {
        console.log(userConect?.tipo,'tipo')
        switch (userConect?.tipo) {

            case "marketing":
                
                history.push("/indexAdm");
                
                    break;

            case 'admin':
                
                return <Route exact path={path} component={component} />

            case 'user':

                history.push("/");
                
                    break;

            case "SUser":

                history.push("/admin");

                    break;

            case null:
                history.push("/admin");
                // return <Route exact path={"/admin"} component={Login} />
                    break;

        }

    }

    return (
    
        <>
        
            {routeAdmin()}
            
        </>

    )

}
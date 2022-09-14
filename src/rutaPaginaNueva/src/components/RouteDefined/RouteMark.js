import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';

export default function RouteAM({ path, component, location }) {
    
    const auth = getAuth();

    const history = useHistory();

    const [userLog, setUserLog] = useState([]);

    const [usersDB, setUsersDB] = useState([]);

    const [userConect, setUserConect] = useState([]);

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
        
        switch (userConect?.tipo) {

            case 'admin':
                
                history.push("/indexAdm");
                
                    break;

            case "marketing":

                return <Route exact location={{ pathname:{path}, state: { tipo: userConect?.tipo, id:location.state?.id } }} component={component} />

            case 'user':

                history.push("/");
                
                    break;

            case "SUser":

                history.push("/admin");

                    break;

            case null:

                history.push("/admin");
                
                    break;

        }

    }

    return (
    
        <>
        
            {routeAdmin()}
            
        </>

    )

}
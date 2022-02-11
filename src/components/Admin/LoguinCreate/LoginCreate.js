import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase";
import "./LoginCreate.css";

export default function Loguin() {

    const history = useHistory()

    const [login, setLogin] = useState({

        email: '',
        password: '',
        tipo: 'user',

    });

    const changeLogin = (e) => {

        setLogin({

            ...login,

            [e.target.name]: e.target.value

        });

    }

    

    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            
            // ...
        } else {
            // User is signed out
            // ...
            history.push("/admin")
        }
    });

    const setUserDB = async () => {
        
        const collectionRef = app.firestore().collection("login");
        
        const doc = await collectionRef.doc().set({

            email: login.email,

            tipo: login.tipo

        });

    }

    const createLogin = async () => {

        await createUserWithEmailAndPassword(auth, login.email, login.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..

            });
        
        setUserDB();

        setLogin({

            email: '',
            password: '',
            tipo: 'user',
            idUser: '',
    
        });

        // history.push("/IndexAdm")

    }

    return (

        <div className="LogInCreateContent">

            <NavBar />

            <div className="loginForm">

            <h1>Crear Cuenta</h1>

            <input id='email' name='email' type='email' value={login.email} placeholder='Email' onChange={e => changeLogin(e)} />

            <input id='password' name='password' type='password' value={login.password} placeholder='Password' onChange={e => changeLogin(e)} />

            <select name='tipo' onChange={e => changeLogin(e)} >

                <option value='user' >Usuario</option>

                <option value='admin' >Admin</option>

            </select>

            <input id="formButton" onClick={createLogin} type='submit' value='Ingresar' />

            </div>

        </div>

    )

}
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./LoginIn.css";

export default function LoginIn() {
    
    const history = useHistory()

    const [login, setLogin] = useState({

        email: '',
        password: '',

    });

    const [loginDB, setLoginDB] = useState([]);

    useEffect(async () => {

        const getUser = async () => {

            const queryUsersDB = await getDocs(collection(db, "login"));

            setLoginDB(queryUsersDB.docs.map(doc => {

                let pubRecorrida = doc.data();

                return pubRecorrida;

            }));

        }

        getUser();

    }, []);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      
        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
          setOpen(true);
        };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };




    const changeLogin = (e) => {

        if(e.target.name === 'email') {

            setLogin({

                ...login,
    
                email: e.target.value,
    
            })

        } else {

            setLogin({

                ...login,
    
                password: e.target.value,
    
            })

        }

    }
    
    const auth = getAuth();

    const verify = (e) => {

        onAuthStateChanged(auth, (user) => {

            if(user) {
                
                const email = user.email;
               
                const loginStatus = loginDB.find(e => e.email === email)
    
                if (loginStatus.tipo === 'admin') {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    history.push("/indexAdm")
                    
                } else {
                    // User is signed out
                    // ...
                    history.push("/")
                }
    
            }
            
        });

    }

    verify()

    const LogIn = () => {

        if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(login.email)) {

            handleClick()

        }

        signInWithEmailAndPassword(auth, login.email, login.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                // history.push("/IndexAdm")

                verify()
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage, 'mensaje');
                handleClick()
            });

    }


    return (
        
        <div className="LogInContent">

            <div className="formLogIn">

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>

                    Verifique que los datos ingresados sean correctos!

                </Alert>

            </Snackbar>

            <h1>Ingresar</h1>

            <input name='email' type="email" placeholder="Email" onChange={e => changeLogin(e)} />

            <input name='password' type='password' placeholder="Password" onChange={e => changeLogin(e)} />

            <input id="formButtonLogIn" onClick={LogIn} type='submit' value='Ingresar' />

            </div>

        </div>

    )

}
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./CreatePub.css";

export default function CreatePub() {

    const history = useHistory();
    
    const [input, setInput] = useState({

        title: '',
        description: '',
        price: 0,
        porcen: 0,
        priceDesc: 0,
        file: '',

    });
    
    const [alertUploadImg, setAlertUploadImg] = useState(true)

    const [submit, setSubmit] = useState(false);

    const vaciarEstado = () => {

        setInput({

            title: '',
            description: '',
            price: 0,
            porcen: 0,
            priceDesc: 0,
            file: '',
            codCRM: 'general',
            status: true,
    
        });

    }
    
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

    const calcularDesc = () => {

        const price = input.price;

        const porcen = parseInt(input.porcen);

        const valDesc = Math.trunc((price * porcen) / 100);

        const preVenta = price - valDesc;

        if(input.priceDesc !== preVenta ) setInput({...input, priceDesc: preVenta});

    }

    calcularDesc()

    const archivoHandler = async (e) => {

        const archivo = e.target.files[0];
        
        const storageRef = app.storage().ref(`/ImgPublicaciones/`);  // `/ImgPublicaciones/${archivo.name}` de esta forma crea una carpeta con el nombre de la img

        const archivoPath = storageRef.child(archivo.name);

        const uploadTask = await archivoPath.put(archivo);

        //----------------------------------------------------------------

        // try {

        //     uploadTask.on(app.storage.TaskEvent.STATE_CHANGED, snapshot => {

        //         let porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
        //         console.log(porcentage)
    
        //     }, error => {
    
        //         console.log(error.message)
    
        //     }, () => {
    
        //         console.log("termino")
    
        //     }, console.log(app.storage.TaskEvent.STATE_CHANGED))
            
        // } catch (error) {

        //     console.log(error.message)

        //     setAlertUploadImg(false)

        //     handleClick()
            
        // }

        

        //-----------------------------------------

        const enlaceImg = await archivoPath.getDownloadURL();

        setInput({...input, file: enlaceImg, });

        
        setTimeout(() => {

            setSubmit(true)

        }, 500)


    };

    const handleInputChange = (e) => {
        
        const { name, value } = e.target;
        

        if(name === 'porcen' && value.length > 2) {

            setAlertUploadImg(false);

            handleClick();

        }

        if(name === 'price' && !/^(?!$)\d{0,10}(?:\.\d{1,2})?$/.test(value)) {

            setAlertUploadImg(false);

            handleClick();

            setInput({ ...input, [name]: ''})

            document.getElementById('price').value = '';
        
        } else if(name === 'price' && /^(?!$)\d{0,10}(?:\.\d{1,2})?$/.test(value)) {

            setInput({ ...input, [name]: parseInt(value)});

        } else {
            
            setInput({ ...input, [name]: value });

        }

    };

    const addPub = async (e) => {

        e.preventDefault();

        setAlertUploadImg(true)

        const collectionRef = app.firestore().collection("publicacion");
        
        const doc = collectionRef.doc().set({

            title: input.title,
            description: input.description,
            price: new Intl.NumberFormat().format(input.price),
            porcen: input.porcen,
            priceDesc: new Intl.NumberFormat().format(input.priceDesc),
            file: input.file,
    
        })

        //------------------------------------

        // await addDoc(collection(db, "publicacion"), { userObject });
        // input.file ? console.log(input) : console.log('todavia nada')

        setSubmit(false);

        handleClick();

        vaciarEstado();

        document.getElementById('title').value = '';

        document.getElementById('description').value = '';

        document.getElementById('image1').value = '';

        document.getElementById('price').value = '';

        document.getElementById('desc').value = '';

    };


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

    const alertMessage = () => {

        if(alertUploadImg) {

            return (

                <>
                
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>

                            Publicacion creada con exito!

                        </Alert>

                    </Snackbar>
                
                </>

            )

        } else {

            return (

                <>
                
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>

                            Error con los datos cargados!

                        </Alert>

                    </Snackbar>
                
                </>

            )

        }

    }

    return (

        <div className="CreatePubContent">

            <NavBar />

            <form className="formCreatePub">

                <div className="formCreatePub-titleSelect">

                    <input id="title" name='title' type="text" placeholder="Title" onChange={e => handleInputChange(e)} />

                    <select id="title" name="codCRM" onChange={e => handleInputChange(e)} >

                        <option value="general">Mts</option>
                        <option value="15mts">15mts</option>
                        <option value="30mts">30mts</option>
                        <option value="45mts">45mts</option>
                        <option value="60mts">60mts</option>
                        <option value="75mts">75mts</option>
                        <option value="90mts">90mts</option>
                        <option value="120mts">120mts</option>

                    </select>

                </div>

                <textarea id="description" name='description' placeholder="Introduzca una descripcion" onChange={e => handleInputChange(e)} />

                <div className="formCreatePub-Precios">

                    <div>

                        <input id="price" name='price' type="text" placeholder="Precio Publicado" onChange={e => handleInputChange(e)} />

                    </div>

                    <div>

                        <label>Porcentaje de Descuento</label>

                        <input id="desc" className="desc" name="porcen" type="number" onChange={e => handleInputChange(e)} />

                    </div>

                </div>

                <div className="formCreatePub-Precios">

                    <div>

                        <input id="image1" name='file' type="file" onChange={e => archivoHandler(e)} />

                    </div>

                    <div>

                        <input name="priceDesc" id="priceDesc" type="text" placeholder="Precio con Descuento" value={input.priceDesc} />

                    </div>

                </div>

                { submit ? <input type="submit" onClick={e => addPub(e)}/> : console.log("un momento para publicar")}

            </form>

            {alertMessage()}

        </div>

    )

}
import React, { useState, useEffect } from 'react';
import { app, db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import NavBar from '../NavBar/NavBar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CreateTesting from "./CreateTestimony.module.css";

import queryDB from '../../../queryDB/queryDB';

export default function CreateTestimony({location}) {

    const [input, setInput] = useState({

        name: '',
        casa: '',
        file: '',
        testi: '',
        idInterno: 0,

    });

    const [alertUploadImg, setAlertUploadImg] = useState(true);

    const [open, setOpen] = React.useState(false);

    const [idInt, setIdInt] = useState('');

    useEffect(() => {

        getDocs(collection(db, "testimonios"))
            .then(tbl => {

                const arr = tbl.docs.map(e => e.data().idInterno)

                setIdInt(Math.max(...arr))

            })
            .catch(e => console.log(e, 'error'))

    }, [])

    const Alert = React.forwardRef(function Alert(props, ref) {

        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

    });

    const vaciarEstado = () => {

        setInput({

            name: '',
            casa: '',
            file: '',
            testi: '',
            idInterno: '',
    
        });

        document.getElementsByName("file")[0].value = '';

    }

    const handleClick = () => {

        setOpen(true);

    };

    const handleClose = (event, reason) => {

        if (reason === 'clickaway') {

            return;

        }
    
        setOpen(false);
    };

    const validar = () => {

        if(input.name === '') {

            setAlertUploadImg(false);

            handleClick();

        } else if(input.casa === '') {

            setAlertUploadImg(false);

            handleClick();

        } else if(input.testi === '') {

            setAlertUploadImg(false);

            handleClick();

        } else if(input.file === '') {

            setAlertUploadImg(false);

            handleClick();

        } else {

            setAlertUploadImg(true);

            handleClick();

        }

    }

    const inputHandleChange = (e) => {

        const { name, value } = e.target;

        setInput({

            ...input,

            [name]: value,

        })

    }

    const archivoHandler = async (e) => {

        const textarea = document.getElementsByTagName("textarea")[0];

        textarea.style.width = "0%";

        textarea.style.height = "0%";

        const archivo = e.target.files[0];
        
        const storageRef = app.storage().ref(`/testimonios/`);  // `/ImgPublicaciones/${archivo.name}` de esta forma crea una carpeta con el nombre de la img

        const archivoPath = storageRef.child(archivo.name);

        await archivoPath.put(archivo);

        const enlaceImg = await archivoPath.getDownloadURL();

        setInput({...input, file: enlaceImg, });

        textarea.style.width = "100%";

        textarea.style.height = "7.5em";

    };

    const addTesting = (e) => {

        e.preventDefault();

        const collectionRef = app.firestore().collection("testimonios");

        collectionRef.doc().set({

            name: input.name,
            casa: input.casa,
            file: input.file,
            testi: input.testi,
            idInterno: idInt + 1,
    
        });

        validar();

        vaciarEstado();

    }

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

    // console.log(queryDB.getTblProduct(), 'tbl products')
    
    return (

        <>
        
            <div className={CreateTesting.CreateTestimonyContent} >

                <NavBar tipo={location.state.tipo} />

                <h1>Crear Testimonio</h1>

                <form className={CreateTesting.CreateTestimonyContent__fomr} onSubmit={addTesting} >

                    <input name="name" type="text" value={input.name} placeholder="Nombre" onChange={e => inputHandleChange(e)} />

                    <select name="casa" value={input.casa} onChange={e => inputHandleChange(e)} >

                        <option value="">Selecciona la Casa</option>
                        <option value="Container Casa 15M2">Container Casa 15M2</option>
                        <option value="Container Casa 30M2">Container Casa 30M2</option>
                        <option value="Container Casa 45M2">Container Casa 45M2</option>
                        <option value="Container Casa 60M2">Container Casa 60M2</option>
                        <option value="Container Casa 75M2">Container Casa 75M2</option>
                        <option value="Container Casa 90M2">Container Casa 90M2</option>
                        <option value="Container Casa 120M2">Container Casa 120M2</option>
                        <option value="Quincho 15M2">Quincho 15M2</option>
                        <option value="Quincho 30M2">Quincho 30M2</option>
                        <option value="Quincho 45M2">Quincho 45M2</option>
                        <option value="Quincho 60M2">Quincho 60M2</option>
                        <option value="Quincho 75M2">Quincho 75M2</option>
                        <option value="Quincho 90M2">Quincho 90M2</option>
                        <option value="Quincho 120M2">Quincho 120M2</option>
                        <option value="Container Oficina 15M2">Container Oficina 15M2</option>
                        <option value="Container Oficina 30M2">Container Oficina 30M2</option>
                        <option value="Container Oficina 45M2">Container Oficina 45M2</option>
                        <option value="Container Oficina 60M2">Container Oficina 60M2</option>
                        <option value="Container Oficina 75M2">Container Oficina 75M2</option>
                        <option value="Container Oficina 90M2">Container Oficina 90M2</option>
                        <option value="Container Oficina 120M2">Container Oficina 120M2</option>
                        <option value="Local 15M2">Local 15M2</option>
                        <option value="Local 30M2">Local 30M2</option>
                        <option value="Local 45M2">Local 45M2</option>
                        <option value="Local 60M2">Local 60M2</option>
                        <option value="Local 75M2">Local 75M2</option>
                        <option value="Local 90M2">Local 90M2</option>
                        <option value="Local 120M2">Local 120M2</option>
                        <option value="Foodtrucks 15M2">Foodtrucks 15M2</option>
                        <option value="Foodtrucks 30M2">Foodtrucks 30M2</option>
                        <option value="Foodtrucks 45M2">Foodtrucks 45M2</option>
                        <option value="Foodtrucks 60M2">Foodtrucks 60M2</option>
                        <option value="Foodtrucks 75M2">Foodtrucks 75M2</option>
                        <option value="Foodtrucks 90M2">Foodtrucks 90M2</option>
                        <option value="Foodtrucks 120M2">Foodtrucks 120M2</option>
                        <option value="Piletas 15M2">Piletas 15M2</option>
                        <option value="Piletas 30M2">Piletas 30M2</option>

                    </select>

                    {/* <ControlPointIcon sx={{ fontSize: 30, color: '#FF0000', border: '1px solid #000', margin: '0 auto'}} /> */}

                    <div className={CreateTesting.contText}>
                        
                        <textarea name="testi" value={input.testi} placeholder="Escribe el testimonio del cliente.." onChange={e => inputHandleChange(e)} />

                    </div>

                    <input name="file" type="file"  onChange={e => archivoHandler(e)} />

                    <img src={input.file} />

                    <input type="submit" name="submit" value="Crear" />

                </form>

                {alertMessage()}

            </div>
        
        </>

    )

}
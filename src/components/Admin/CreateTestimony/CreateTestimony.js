import React, { useState, useEffect } from 'react';
import { app, db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import NavBar from '../NavBar/NavBar';
import CreateTesting from "./CreateTestimony.module.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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

        const uploadTask = await archivoPath.put(archivo);

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
                        <option value="Container Oficina 15M2">Container Oficina 15M2</option>

                    </select>

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
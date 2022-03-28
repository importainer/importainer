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
        ent1: '',
        ent2: '',
        ent3: '',
        ent4: '',
        ent5: '',

    });

    const [alertUploadImg, setAlertUploadImg] = useState(true);

    const [open, setOpen] = React.useState(false);

    const [idInt, setIdInt] = useState('');

    const [nomProd, setNomProd] = useState([]);

    useEffect(() => {

        getDocs(collection(db, "testimonios"))
            .then(tbl => {

                const arr = tbl.docs.map(e => e.data().idInterno)

                setIdInt(Math.max(...arr))

            })
            .catch(e => console.log(e, 'error'))

        getDocs(collection(db, "productos"))
            .then(tbl => {

                setNomProd(tbl.docs.map(e => {

                    return {

                        id: e.id,
                        prod:e.data().nombre,

                    }

                }))

            })

    }, [])

    const ordenarProdNom = (a, b) => {

        // a.match(/\d+/g)[0] de esta manera obtengo los numeros dentro del string

        if(a > b) return 1

        else if(a < b) return -1

        else return 0

    }

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
            ent1: '',
            ent2: '',
            ent3: '',
            ent4: '',
            ent5: '',

        });
        
        document.getElementsByName("file")[0].value = '';
        document.getElementById("ent1").innerHTML = 'Seleccionar';
        document.getElementById("ent2").innerHTML = 'Seleccionar';
        document.getElementById("ent3").innerHTML = 'Seleccionar';
        document.getElementById("ent4").innerHTML = 'Seleccionar';
        document.getElementById("ent5").innerHTML = 'Seleccionar';

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

        const storageRef = app.storage().ref(`/testimonios/${input.name}`);  // `/ImgPublicaciones/${archivo.name}` de esta forma crea una carpeta con el nombre de la img

        const archivoPath = storageRef.child(archivo.name);

        await archivoPath.put(archivo);

        const enlaceImg = await archivoPath.getDownloadURL();

        setInput({...input, file: enlaceImg, });

        textarea.style.width = "100%";

        textarea.style.height = "7.5em";

        document.getElementById('1').style.display = "block";

        const pAlert = document.getElementsByClassName(CreateTesting.textAlertActive)[0];
        
        if(pAlert.className === CreateTesting.textAlertActive) {

            pAlert.className = CreateTesting.textAlert;

        }

    };

    const archivoHandlerGroup = async (e) => {

        const { files, name, id } = e.target;

        const n = parseInt(id) + 1;

        const desbloqued = document.getElementById(n);

        if(n <= 5) desbloqued.style.display = 'block';

        const archivo = files[0];

        const storageRef = app.storage().ref(`/testimonios/${input.name}`);  // `/ImgPublicaciones/${archivo.name}` de esta forma crea una carpeta con el nombre de la img

        const archivoPath = storageRef.child(archivo.name);

        await archivoPath.put(archivo);

        const enlaceImg = await archivoPath.getDownloadURL();

        setInput({...input, [name]: enlaceImg, });

        const fileDom = document.getElementById(name);

        fileDom.innerHTML = archivo.name;

        const pAlert = document.getElementsByClassName(CreateTesting.textAlertActive)[0];
        
        if(pAlert.className === CreateTesting.textAlertActive) {

            pAlert.className = CreateTesting.textAlert;

        }

    };

    const textAlert = (e) => {

        const pAlert = document.getElementsByClassName(CreateTesting.textAlert)[0];

        pAlert.className = CreateTesting.textAlertActive;

    }

    const addTesting = (e) => {

        e.preventDefault();
        // console.log(document.getElementById("ent1"), 'buscar')
        // document.getElementById("ent1").innerHTML = 'Seleccionar';
        const collectionRef = app.firestore().collection("testimonios");
        
        collectionRef.doc().set({

            name: input.name,
            casa: input.casa,
            file: input.file,
            testi: input.testi,
            idInterno: idInt + 1,
            ent1: input.ent1,
            ent2: input.ent2,
            ent3: input.ent3,
            ent4: input.ent4,
            ent5: input.ent5,

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

    const popUp = () => {

        window.open('#/CreateProducts', 'Crear Productos', 'toolbar=0, scrollbars=0, location=0, statusbar=0, menubar=0, resizable=1, width=800, height=200, left = 390, top = 200');

    }

    return (

        <>

            <div className={CreateTesting.CreateTestimonyContent} >

                <NavBar tipo={location.state.tipo} />

                <h1>Crear Testimonio</h1>

                <form className={CreateTesting.CreateTestimonyContent__fomr} onSubmit={addTesting} >

                    <input name="name" type="text" value={input.name} placeholder="Nombre" onChange={e => inputHandleChange(e)} />

                    <div className={CreateTesting.Select} >

                        <select name="casa" value={input.casa} onChange={e => inputHandleChange(e)} >

                            <option value="">Selecciona la Casa</option>

                            {

                                nomProd.sort((a,b) => ordenarProdNom(a.prod, b.prod)).map(e => {
                                    
                                    return (

                                        <>

                                            <option key={e.id} >{e.prod}</option>

                                        </>

                                    )

                                })

                            }

                        </select>

                        <div class={CreateTesting.agregar} >

                            <ControlPointIcon sx={{ fontSize: 35, color: '#FF0000'}} onClick={popUp} />

                        </div>

                    </div>

                    <p className={CreateTesting.subText} >Espere a que las imagenes se carguen...</p>

                    <div className={CreateTesting.contText}>

                        <textarea name="testi" value={input.testi} placeholder="Escribe el testimonio del cliente.." onChange={e => inputHandleChange(e)} />

                    </div>

                    <input name="file" type="file"  onChange={e => archivoHandler(e)} />

                    <img src={input.file} />

                    <div className={CreateTesting.contentEntFiles} >

                        <p className={CreateTesting.textAlert} >Respetar el orden de Carga...</p>

                        <div className={CreateTesting.contentEntFile} >

                            <p id='ent1' onClick={e => textAlert(e)} >Seleccionar</p>

                            <input name='ent1' id='1' className={CreateTesting.grFile} type="file" onChange={e => archivoHandlerGroup(e)} />

                        </div>

                        <div className={CreateTesting.contentEntFile} >

                            <p id='ent2' onClick={e => textAlert(e)} >Seleccionar</p>

                            <input name='ent2' id='2' className={CreateTesting.grFile} type="file" onChange={e => archivoHandlerGroup(e)} />

                        </div>

                        <div className={CreateTesting.contentEntFile} >

                            <p id='ent3' onClick={e => textAlert(e)} >Seleccionar</p>

                            <input name='ent3' id='3' className={CreateTesting.grFile} type="file" onChange={e => archivoHandlerGroup(e)} />

                        </div>

                        <div className={CreateTesting.contentEntFile} >

                            <p id='ent4' onClick={e => textAlert(e)} >Seleccionar</p>

                            <input name='ent4' id='4' className={CreateTesting.grFile} type="file" onChange={e => archivoHandlerGroup(e)} />

                        </div>

                        <div className={CreateTesting.contentEntFile} >

                            <p id='ent5' onClick={e => textAlert(e)} >Seleccionar</p>

                            <input name='ent5' id='5' className={CreateTesting.grFile} type="file" onChange={e => archivoHandlerGroup(e)} />

                        </div>

                    </div>

                    <input type="submit" name="submit" value="Crear" />

                </form>

                {alertMessage()}

            </div>

        </>

    )

}
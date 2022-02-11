import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db, app } from "../../../firebase";
import { collection, getDocs, getDatabase, set, get } from "firebase/firestore";
import { child, push, ref } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavBar from "../NavBar/NavBar";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./EditarPub.css";

export default function EditarPub({location}) {

    const history = useHistory();

    const storageRefIMG = app.storage().ref(`/ImgPublicaciones/`);

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

    const [datos, setDatos] = useState({

        title: '',
        description: '',
        price: 0,
        porcen: 0,
        priceDesc: 0,
        file: '',

    });

    useEffect(() => {

        const getData = async () => {
      
          const querySnapshot = await getDocs(collection(db, "publicacion"));

            const res = querySnapshot.docs.filter(e => e.id === location.state.id)

            setDatos(res[0]?.data());
      
        }

        const data = getData()
      
        setDatos([data])
      
    }, []);
    
    const Alert = React.forwardRef(function Alert(props, ref) {

        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

    });
    
    const [open, setOpen] = React.useState(false);

    const [alertUploadImg, setAlertUploadImg] = useState(true);

    const [calcular, setCalcular] = useState(false);
    
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
        
        const price = datos.price;

        const porcen = parseInt(datos.porcen);

        const valDesc = Math.trunc((price * porcen) / 100);

        const preVenta = price - valDesc;
        
        if( calcular ) {
            
            setDatos({...datos, priceDesc: preVenta});
            
            setCalcular(false)
        }

    }

    calcularDesc()

    const handleChange = (e) => {

        const { name, value } = e.target;

        if(name === 'porcen' && value.length > 2) {

            setAlertUploadImg(false);

            handleClick();

        }

        if(name === 'price' && !/^(?!$)\d{0,10}(?:\.\d{1,2})?$/.test(value)) {

            setAlertUploadImg(false);

            handleClick();

            setDatos({ ...datos, [name]: ''})

            document.getElementById('price').value = '';
        
        } else if(name === 'price' && /^(?!$)\d{0,10}(?:\.\d{1,2})?$/.test(value)) {

            setCalcular(true)

            setDatos({ ...datos, [name]: parseInt(value)});

        } else {

            setCalcular(true)
            
            setDatos({ ...datos, [name]: value });

        }

    }

    const fileDelete = async (img) => { 

        const archivoPath2 = storageRefIMG.child(img);

        archivoPath2.delete().then(() => {

            // elimina la imagen

          }).catch((error) => {

            // Uh-oh, an error occurred!
            console.log(error, "ocurrio algun error al eliminar img existente")

          });
          
        // 

    }

    const searchImgDB = () => {

        storageRefIMG.listAll()
                        .then((res) => {

                        res.prefixes.forEach((folderRef) => {
                            // All the prefixes under listRef.
                            // You may call listAll() recursively on them.
                        });
                        res.items.forEach(async (itemRef) => {
                            // All the items under listRef.
                            
                            if(await itemRef.getDownloadURL() == datos.file) {

                                fileDelete(itemRef.name)

                            }

                        });
                        }).catch((error) => {
                        // Uh-oh, an error occurred!
                            console.log("error")
                        });

    }

    const archivoHandler = async (e) => {

        searchImgDB()

        const archivo = e.target.files[0];
        
        const storageRef = app.storage().ref(`/ImgPublicaciones/`);  // `/ImgPublicaciones/${archivo.name}` de esta forma crea una carpeta con el nombre de la img

        const archivoPath = storageRef.child(archivo.name);

        const uploadTask = await archivoPath.put(archivo);

        const enlaceImg = await archivoPath.getDownloadURL();

        setDatos({ ...datos, file: enlaceImg})


    };

    function writeNewPost() {

        setAlertUploadImg(true);

        const collectionRef = app.firestore().collection("publicacion").doc(location.state.id);

        const doc = collectionRef.update(datos);

        handleClick();

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

        <div className="editarContent">

            <NavBar />

            <h1>Edita la Publicacion</h1>

            <div className="editarContent-formCont">

                <label>Titulo: {datos?.title}</label>

                <input name="title" type="text" placeholder="Nuevo Titulo" onChange={e => handleChange(e)} />

                <label>Precio de Venta: {datos?.price}</label>

                <input name="price" id="price" type="text" placeholder="Nuevo Precio" onChange={e => handleChange(e)} />

                <label>Precio de Descuento: {datos?.priceDesc}</label>

                <input name="priceDesc" id="priceDesc" type="text" value={datos?.priceDesc} onChange={e => handleChange(e)} />

                {/* <div></div> */}

                <label>Porcentaje: {datos?.porcen}</label>

                <input name="porcen" id="porcen" type="number" placeholder="Nuevo Porcentaje" onChange={e => handleChange(e)} />

                <label>{datos?.description}</label>

                <textarea name="description" type="text" placeholder="Nueva Descripcion" onChange={e => handleChange(e)} />

                <img src={datos?.file} />

                {/* <ImageSearchIcon sx={{ fontSize: 100, color: "#FF0000", margin: "auto", cursor: "pointer" }} onClick={searchImg} /> */}

                <input name="file" type="file" onChange={e => archivoHandler(e)} />

            </div>

            <input className="editarContent-Buton" type="submit" value="Guardar" onClick={writeNewPost} />

            {alertMessage()}

        </div>

    )

}
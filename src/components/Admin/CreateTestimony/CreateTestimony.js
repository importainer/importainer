import React, { useState } from 'react';
import { app } from '../../../firebase';
import NavBar from '../NavBar/NavBar';
import CreateTesting from "./CreateTestimony.module.css";

export default function CreateTestimony({location}) {

    const [input, setInput] = useState({

        name: '',
        container: '',
        file: '',
        testi: '',

    })

    const img = "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/testimonios%2FcintiaID2.JPG?alt=media&token=30ce691e-f7c3-447c-8f72-deb8f6a27015"

    const vaciarEstado = () => {

        setInput({

            name: '',
            casa: '',
            file: '',
            testi: '',
    
        });

    }

    const inputHandleChange = (e) => {

        const { name, value } = e.target

        setInput({

            ...input,

            [name]: value,

        })

    }

    const archivoHandler = async (e) => {

        const archivo = e.target.files[0];
        
        const storageRef = app.storage().ref(`/testimonios/`);  // `/ImgPublicaciones/${archivo.name}` de esta forma crea una carpeta con el nombre de la img

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

        
        // setTimeout(() => {

        //     setSubmit(true)

        // }, 500)


    };

    const addTesting = (e) => {

        e.preventDefault();

        // const collectionRef = app.firestore().collection("testimonios");

        // collectionRef.doc().set(input);

        setInput({

            name: '',
            container: '',
            file: '',
            testi: '',
    
        })

    }

    console.log(input, 'input');

    return (

        <>
        
            <div className={CreateTesting.CreateTestimonyContent} >

                <NavBar tipo={location.state.tipo} />

                <h1>Crear Testimonio</h1>

                <form className={CreateTesting.CreateTestimonyContent__fomr} onSubmit={addTesting} >

                    <input name="name" type="text" value={input.name} placeholder="Nombre" onChange={e => inputHandleChange(e)} />

                    <select name="container" value={input.container} onChange={e => inputHandleChange(e)} >

                        <option value="">Selecciona la Casa</option>
                        <option value="Container Casa 15M2">Container Casa 15M2</option>
                        <option value="Container Casa 30M2">Container Casa 30M2</option>
                        <option value="Container Casa 45M2">Container Casa 45M2</option>
                        <option value="Container Casa 60M2">Container Casa 60M2</option>
                        <option value="Container Oficina 15M2">Container Oficina 15M2</option>

                    </select>

                    <input name="imgTesting" type="file"  onChange={e => archivoHandler(e)} />

                    <img src={input.file} />

                    <textarea name="testi" value={input.testi} placeholder="Escribe el testimonio del cliente.." onChange={e => inputHandleChange(e)} />

                    <input type="submit" name="submit" value="Crear" />

                </form>

            </div>
        
        </>

    )

}
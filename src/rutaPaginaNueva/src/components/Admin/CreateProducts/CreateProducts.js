import React, { useState } from 'react';
import { app, db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import CreateProd from './CreateProducts.module.css';

export default function CreateProducts() {

    const [nameContainer, setNameContainer] = useState('');

    const handleInputChange = (e) => {

        const { value } = e.target;

        e.preventDefault();

        setNameContainer(value);

    }

    const enviarDB = (e) => {

        e.preventDefault();

        const coll = app.firestore().collection('productos')

        coll.doc().set({

            nombre: nameContainer,

        });

        setNameContainer('')

    }

    return (

        <div className={CreateProd.CreateProduts} >

            <h1>Nombre de la Casa Container para Testimonios</h1>

            <form>

                <input name='nameContainer' type="text" value={nameContainer} placeholder="Nombre Casa Container..." onChange={e => handleInputChange(e)} />

                <input type="submit" onClick={e => enviarDB(e)} />

            </form>

        </div>

    )

}
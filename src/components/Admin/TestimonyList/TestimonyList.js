import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { DB } from '../../EntregasSlider/moq';
import { app, db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import NavBar from '../NavBar/NavBar';
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ListTestimony from './TestimonyList.module.css';

export default function TestimonyList({location}) {

    const[DB, setDB] = useState([]);

    useEffect(() => {

        getDocs(collection(db, "testimoniosBackup"))
            .then(tbl => {

                setDB(tbl.docs.map( e => {
                    // ESTOS CODIGOS SON PARA HACER UNA COPIA DE LA TABLA PARA BACKUP
                    // const testRef = app.firestore().collection("testimoniosBackup");

                    // testRef.doc().set(e.data()) e.id
                    // console.log(e.data(), 'buscando id');

                    return {

                        id: e.id,
                        casa: e.data().casa,
                        ent1: e.data().ent1,
                        ent2: e.data().ent2,
                        ent3: e.data().ent3,
                        ent4: e.data().ent4,
                        ent5: e.data().ent5,
                        file: e.data().file,
                        idInterno: e.data().idInterno,
                        localidad: e.data().localidad,
                        name: e.data().name,
                        rating: e.data().rating,
                        testi: e.data().testi,

                    }

                }));
                

            })
            .catch(err => console.log(err))

    }, []);

    console.log(DB.sort(), 'estado');

    return (

        <div className={ListTestimony.TestimonyContent} >

            <NavBar tipo={location.state.tipo} />

            <div className={ListTestimony.ContentHead} >

                <h1>Testimonios</h1>

                <Link to="/CreateTestimony" ><AddToPhotosIcon sx={{ fontSize: 40, color: "#000" }} /></Link>

            </div>

            <div className={ListTestimony.contentList} >

                {

                    DB.map(e => {

                        return (

                            <> 

                                <TestimonyCard key={e.idInterno} data={e} />

                            </>

                        )

                    })

                }

            </div>

        </div>

    )

}
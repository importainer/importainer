import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { DB } from '../../EntregasSlider/moq';
import { app, db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import NavBar from '../NavBar/NavBar';
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import MenuIcon from '@mui/icons-material/Menu';
import ListTestimony from './TestimonyList.module.css';

export default function TestimonyList({ location }) {

    const [DB, setDB] = useState([]);

    const [config, setConfig] = useState({});

    const [ratingSelect, setRatingSelect] = useState(5);

    const[active, setActive] = useState(false);

    useEffect(() => {

        getDocs(collection(db, "testimoniosBackup"))
            .then(tbl => {

                const testimonyFilter = tbl.docs.filter(e => !e.data().hasOwnProperty('config'));

                tbl.docs.map(e => {

                    if(e.data().hasOwnProperty('config')) {

                        setConfig({

                            id: e.id,

                            config: e.data().config,

                        })

                    }

                })

                setDB(testimonyFilter.map(e => {
                    // ESTOS CODIGOS SON PARA HACER UNA COPIA DE LA TABLA PARA BACKUP
                    // const testRef = app.firestore().collection("testimoniosBackup");

                    // testRef.doc().set(e.data())
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
                        chekedDB: e.data().chekedDB,

                    }

                }));


            })
            .catch(err => console.log(err))

    }, []);

    const order = (a, b) => {

        if (a < b) return 1

        else if (a > b) return -1

        else return 0

    }

    const selectRating = (rating) => {

        const ratingLect = DB.sort((a, b) => order(a.rating, b.rating));

        const arr = [];

        ratingLect.forEach(e => {
            
            if(e.rating == rating) {

                arr.unshift(e)

            } else {

                arr.push(e)

            }
            
        })

        return arr;

    }

    const mnuFunction = () => {

        const mnu = document.getElementsByClassName(ListTestimony.list)[0];

        if(!active) {

            mnu.style.opacity = 1;
            mnu.style.color = "rgba(255, 255, 255, 1)";
            mnu.style.width = "10%";
            mnu.style.height = "16%"; //7%

            setActive(true);

        } else {

            mnu.style.opacity = 0;
            mnu.style.color = "rgba(255, 255, 255, 0)";
            mnu.style.width = "0%";
            mnu.style.height = "0%";

            setActive(false);

        }

    }

    const configTesti = () => {

        const popupConfig = document.getElementsByClassName(ListTestimony.popupConfig)[0];

        const mnu = document.getElementsByClassName(ListTestimony.list)[0];

        if(active) {

            mnu.style.opacity = 0;
            mnu.style.color = "rgba(255, 255, 255, 0)";
            mnu.style.width = "0%";
            mnu.style.height = "0%";

            popupConfig.style.opacity = 1;

            setActive(false);

        } else {

            popupConfig.style.opacity = 0;

            setActive(true);

        }

    }

    const inputHandleChange = (e) => {

        const { name, value } = e.target;
        
        setConfig({...config, config: {...config.config, [name]: parseInt(value)}});

    }

    const actRango = async (e) => {

        e.preventDefault();

        const testimonioRef = app.firestore().collection("testimoniosBackup").doc(config.id);

        await testimonioRef.update(config)

        const popupConfig = document.getElementsByClassName(ListTestimony.popupConfig)[0];

        if(!active) {

            popupConfig.style.opacity = 0;

            setActive(true);

        }

    }

    return (

        <div className={ListTestimony.TestimonyContent} >

            <div className={ListTestimony.contentNav} >
                
                <NavBar tipo={location.state.tipo} />
                
            </div>

            <div className={ListTestimony.ContentHead} >

                <h1>Testimonios</h1>

                <div className={ListTestimony.contentRating} >

                    <h3>Nivel de Privilegio:</h3>

                    <select className={ListTestimony.Select} onChange={e => setRatingSelect(e.target.value)} >

                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" selected >5</option>

                    </select>

                </div>

                {/* <Link to="/CreateTestimony" ><AddToPhotosIcon sx={{ fontSize: 40, color: "#000" }} /></Link> */}

                <div className={ListTestimony.mnu} >

                    <div className={ListTestimony.mnu_icon} onClick={mnuFunction} >
                        
                        <MenuIcon sx={{ fontSize: 30 }} />
                        
                    </div>

                    <ul className={ListTestimony.list} >
                        
                        <Link to="/CreateTestimony" > <li>Crear Testimonio</li> </Link>

                        <li onClick={configTesti} >Configurar</li>

                    </ul>

                </div>

            </div>

            <div className={ListTestimony.popupConfig} >

                <form className={ListTestimony.popup_form} onSubmit={e => actRango(e)} >

                    <input name="desde" type="number" placeholder="Desde.." onChange={e =>inputHandleChange(e)}/>

                    <input name="hasta" type="number" placeholder="Hasta.." onChange={e =>inputHandleChange(e)}/>

                    <input type="submit" value="Actualizar" />

                </form>

            </div>

            <div className={ListTestimony.contentList} >

                {

                    selectRating(ratingSelect).map(e => {
                        
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
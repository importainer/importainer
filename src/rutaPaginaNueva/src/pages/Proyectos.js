import React, { useEffect, useState } from 'react';
// import ProyectoCardList from '../components/ProyectosCards/ProyectoCardList';
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec';
import Titulo from "../components/Titulo";
import ProyectosCards from "../components/ProyectosCards/ProyectosCards";
import { db } from "../../../firebase";
import { collection, getDocs } from 'firebase/firestore';

export default function Proyectos() {

    const [dbData, setDBData] = useState([]);

    useEffect(() => {

        const getData = async () => {

            const dataDocs = await getDocs(collection(db, "proyectos"));

            setDBData(dataDocs.docs.sort((a, b) => a.id - b.id).map(e => e.data()));

        }

        getData();

    }, []);

    return (

        <div className="">

            <NavBarSec title="Proyectos" />
            <Titulo titulo="Proyectos" />

            {

                dbData.map( e => {

                    return(

                        <ProyectosCards title={e.title} txtDesc={e.txtDetail} image={e.imgLink} tipo={e.tipo} />

                    )

                })

            }
            
            <FooterSec/>

        </div>

    )
}
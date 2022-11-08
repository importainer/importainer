import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ProyectoCardList from '../components/ProyectosCards/ProyectoCardList';
import { getAllProyect, } from "../Redux/Actions/index";
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec';
import Titulo from "../components/Titulo";
import ProyectosCards from "../components/ProyectosCards/ProyectosCards";
import { db, app } from "../../../firebase";
import { collection, getDocs } from 'firebase/firestore';

export default function Proyectos() {

    const dispatch = useDispatch();

    const allProyect = useSelector(state => state.proyect);

    const [dbData, setDBData] = useState([]);

    useEffect(() => {

        dispatch(getAllProyect());

    }, []);
    console.log(allProyect, 'kkk')
    const crearProductos = () => {

        const obj = {

            aire: "01",
            amb: "2",
            baño: "1",
            bidet: false,
            codCRM: "15mts",
            desc20porcen: "600.000",
            desc50porcen: "1.500.000",
            description: "- Vivienda tipo Monoambiente/- 1 a 2 dormitorios/- Baño completamente equipado y cocina/- Instalaciones de agua y electricidad",
            duchaOption: false,
            file: "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/ImgPublicaciones%2F15m2.jpg?alt=media&token=52fb0408-2497-43b7-b2cc-0df90b70dffa",
            imgPlanos: "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F15m2%2002.jpg?alt=media&token=54bf9810-e877-4c74-8ccc-0fb3e7f4182d",
            llaveEncendido: "03",
            lucesLed: "03",
            luzExt: "03",
            ofert: false,
            porcen: "10",
            preCuot120: "21.000",
            preCuot240: "11.000",
            preCuot60: "41.000",
            precioCuota: "21.000",
            price: "3.400.000",
            priceDesc: "3.000.000",
            puertTipo: false,
            status: false,
            sup: "15",
            temotanque: "30",
            tipo: "oficina",
            title: "15M2",
            tomaDistri: "10",
            ven150x110: "01",
            ven200x200: false

        }

        const arr = [{...obj, codCRM: "15mts", sup: "15", tipo: "combo", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "exteriores", title: "30mts", amb: "1"}, 
            {...obj, codCRM: "45mts", sup: "45", tipo: "oficina", title: "45mts", amb: "2"}, 
            {...obj, codCRM: "15mts", sup: "15", tipo: "emprendimiento", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "60mts", sup: "60", tipo: "oficina", title: "60mts", amb: "3"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "combo", title: "30mts", amb: "1"},
            {...obj, codCRM: "15mts", sup: "15", tipo: "combo", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "exteriores", title: "30mts", amb: "1"}, 
            {...obj, codCRM: "45mts", sup: "45", tipo: "oficina", title: "45mts", amb: "2"}, 
            {...obj, codCRM: "15mts", sup: "15", tipo: "emprendimiento", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "60mts", sup: "60", tipo: "oficina", title: "60mts", amb: "3"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "combo", title: "30mts", amb: "1"},
            {...obj, codCRM: "15mts", sup: "15", tipo: "combo", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "exteriores", title: "30mts", amb: "1"}, 
            {...obj, codCRM: "45mts", sup: "45", tipo: "oficina", title: "45mts", amb: "2"}, 
            {...obj, codCRM: "15mts", sup: "15", tipo: "emprendimiento", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "60mts", sup: "60", tipo: "oficina", title: "60mts", amb: "3"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "combo", title: "30mts", amb: "1"},
            {...obj, codCRM: "15mts", sup: "15", tipo: "combo", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "exteriores", title: "30mts", amb: "1"}, 
            {...obj, codCRM: "45mts", sup: "45", tipo: "oficina", title: "45mts", amb: "2"}, 
            {...obj, codCRM: "15mts", sup: "15", tipo: "emprendimiento", title: "15mts", amb: "1"}, 
            {...obj, codCRM: "60mts", sup: "60", tipo: "oficina", title: "60mts", amb: "3"}, 
            {...obj, codCRM: "30mts", sup: "30", tipo: "combo", title: "30mts", amb: "1"}];
            
        arr.map((e, i) => {

            const collRef = app.firestore().collection("publicacion");

            collRef.doc().set(e);

            // console.log(`se agrego el item ${i}`);

        })

    }

    return (

        <div className="">

            <NavBarSec title="Proyectos" />
            <Titulo titulo="DESCUBRÍ NUESTROS PROYECTOS" />

            {/* <input type="button" value="click function" onClick={crearProductos} /> */}

            {

                allProyect.map( e => {

                    return(

                        <ProyectosCards tipoLanding="proyect" btnSecond={true} title={e.title} txtDesc={e.txtDetail} image={e.imgLink} tipo={e.tipo} id={e.id} />

                    )

                })

            }
            
            <FooterSec/>

        </div>

    )
}
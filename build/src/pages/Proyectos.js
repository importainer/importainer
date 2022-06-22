import React from 'react';
import ProyectoCardList from '../components/ProyectosCards/ProyectoCardList';
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec';
import Titulo from "../components/Titulo";

const Proyectos = () => {

    const p1 = {

        title: "Emprendimientos",
        img: "https://live.staticflickr.com/65535/51674609153_83db79f768_z.jpg",
        link: "./emprendimientos",

    }

    const p2 = {

        title: "Casas",
        img: "https://live.staticflickr.com/65535/51632074362_f4bbbd2469_z.jpg",
        link: "./casas",

    }

    const p3 = {

        title: "Exterior",
        img: "https://live.staticflickr.com/65535/51675358599_76ebbb11fa_z.jpg",
        link: "./exterior",

    }

    const p4 = {

        title: "Oficinas",
        img: "https://live.staticflickr.com/65535/51687394575_8cf07a9134_z.jpg" ,
        link: "./oficinas",

    }

    return (
        <div className="">
            {/* <NavBarSec title="Proyectos" link="/proyectos"/> */}
            <Titulo titulo="Proyectos" />
            <ProyectoCardList p1={p1} p2={p2} p3={p3} p4={p4} />
            {/* <FooterSec/> */}
        </div>
    )
}

export default Proyectos
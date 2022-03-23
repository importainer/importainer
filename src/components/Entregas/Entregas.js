import React from 'react';
import NavBarSec from '../NavBarSec/NavBarSec';
import Titulo from '../Titulo';
import ProyectoCardList from '../ProyectosCards/ProyectoCardList';
import FooterSec from '../FooterSec/FooterSec';
import Ent from './Entregas.module.css';

export default function Entregas() {

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

        <div>

            <NavBarSec title="Entregas" link="/entregas" />

            <Titulo title="Entregas" />

            <ProyectoCardList p1={p1} p2={p2} p3={p3} p4={p4} />

            <FooterSec />

        </div>

    )

}
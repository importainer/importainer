import React from "react";
import { useParams } from "react-router-dom";
import NavBarSec from '../NavBarSec/NavBarSec';
import { usersMoq } from "../EntregasSlider/moq";
import EntDetail from './EntregasDetail.module.css';

export default function EntregasDetail() {

    const { id } = useParams();

    const entrega = usersMoq[id];

    console.log(entrega, 'entrega');

    return (

        <div className={EntDetail.EntDetailContent} >

            <NavBarSec title="Entrega" link={`/EntregasDetail/${id}`} />

            <div className={EntDetail.EntDetailContent__contentColum} >

                <div className={EntDetail.contentColum__izq} ></div>

                <div className={EntDetail.contentColum__der} ></div>

            </div>

        </div>

    )

}
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBarSec from "../NavBarSec/NavBarSec";
import ProyectosCards from '../ProyectosCards/ProyectosCards';
import FooterSec from "../FooterSec/FooterSec";
import { getAllAspeConst, } from "../../Redux/Actions/index";
import AspeConstSt from "./AspeConstSt.module.css";

export default function AspeConst() {

    const dispatch = useDispatch();

    const aspeConst = useSelector(state => state.aspeConst);

    useEffect(() => {

        dispatch(getAllAspeConst());

    }, []);

    return (

        <div>

            <NavBarSec />

            {

                aspeConst.map(e => {

                    return (

                        <ProyectosCards tipoLanding="aspect" btnSecond={false} title={e.title} txtDesc={e.txtDetail} image={e.imgLink} tipo={e.tipo} />

                    )

                })

            }

            <FooterSec />

        </div>

    )

}
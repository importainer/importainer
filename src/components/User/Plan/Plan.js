import React, { useState, useEffect } from 'react';
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavBarSec from '../../NavBarSec/NavBarSec';
import './Plan.css';

export default function() {

    const [listUserDB, setListUserDB] = useState([])
    const [userDetail, setUserDetail] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const [active, setActive] = useState(1);

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {

        if(user) {
            
            setUserEmail(user.email);

        } else {

            console.log('no hay correo');

        }

    });

    useEffect(() => {

        const getDb = async () => {

            const getUserDetail = await getDocs(collection(db, "estadoCliente"));

            const listUserDetail = getUserDetail.docs;
            
            setListUserDB(listUserDetail.map(e => e.data()));

        }

        getDb()

    }, []);

    if(listUserDB.length > 0) {

        if(Object.keys(userDetail).length === 0) {

            setUserDetail(listUserDB.find(e => e.correo === userEmail));
    
        }

    }

    const persona = {

        correo: 'elianaol@gmail.com',
        nombre: 'Eliana Rosa',
        apellido: 'Olmos',
        direccion: 'Albarellos 543',
        cp: '1753 Campana',
        provincia: 'Buenos Aires',
        vencimiento: '12/02/2024',
        grupo: 'M-2998',
        orden: '047',
        cuotN: 21,
        plan: '(1530) 100% 240',
        modAhorro: '30 mts 2',
        valorM: '2.225.660,24',
        alicuota: '9.273,58',
        segVida: '550,00',
        gAdm: '1.502,05',
        pagas: 20,
        anticip: 0,
        licit: 0,
        impagas: 21,
        emit: 200,
        aVencer: 22,
        total: '11.325,63',
        estPl: 'Pausado',
        estCasa: 'No Asignado',

    }

    const selectActive = (e) => {

        const id = e.target.id;
        
        // active
        document.getElementById(active).className = "Tabs__None";
        document.getElementById(active+"D").className = "contentDate__None";

        // desactive
        document.getElementById(id).className = "Tabs__Active";
        document.getElementById(id+"D").className = "contentDate__Active";

        setActive(id)

    }

    return (

        <div className="perfilContent" >

            <div className="perfilContent__NavBar" ><NavBarSec title="Info de Plan" link="/datoPlan"/></div>

            <div className="perfilContent__Aux" >

                <h1>Bienvenido {userDetail.name}!!!</h1>

                <div className="perfilContent__Tabs" >

                    <ul>

                        <li id="1" className="Tabs__Active" onClick={e => selectActive(e)} >Datos Personales</li>

                        <li id="2" className="Tabs__None" onClick={e => selectActive(e)} >Datos del Plan</li>

                        <li id="3" className="Tabs__None" onClick={e => selectActive(e)} >Resumen del Plan</li>

                    </ul>

                    <div className="Tabs__contentDate" >

                        <div id="1D" className="contentDate__Active" >

                            <div className="contentDate__datePerson">

                                <h3>Nombre y Apellido: {userDetail.name} {userDetail.lastName}</h3>

                                <h4>Correo Electronico: {userDetail.correo}</h4>

                                <h4>Provincia: {userDetail.prov}</h4>

                                <h4>Direccion: {userDetail.direc}</h4>

                                <h4>CP: {userDetail.cp}</h4>

                            </div>

                        </div>

                        <div id="2D" className="contentDate__None" >

                            <div className="contentDate__datePlan">

                                <h4>Grupo: {userDetail.grupo}</h4>

                                <h4>Orden: {userDetail.orden}</h4>

                                <h4>Cuota N°: {userDetail.cuotN}</h4>

                                <h4>Plan: {userDetail.plan}</h4>

                                <h4>Modelo de Ahorro: {userDetail.modAhorro}</h4>

                            </div>

                        </div>

                        <div id="3D" className="contentDate__None" >

                            <div className="contentDate__resPlan">

                                <h4>Valor M.: {userDetail.valorM}</h4>

                                <h4>Alicuota: {userDetail.alicuota}</h4>

                                <h4>Seguro de Vida: {userDetail.segVida}</h4>

                                <h4>Gastos Adm: {userDetail.gAdm}</h4>

                                <h4>Pagas: {userDetail.pagas}</h4>

                                <h4>Anticipadas: {userDetail.anticipadas}</h4>

                                <h4>Licitadas: {userDetail.licit}</h4>

                                <h4>Impagas: {userDetail.impagas}</h4>

                                <h4>Emitidas: {userDetail.emit}</h4>

                                <h4>A Vencer: {userDetail.aVencer}</h4>

                            </div>

                        </div>

                    </div>

                </div>  

                <div className="perfilContent__infoFooter" >

                    <h3>IMPORTAINER S.A.</h3>

                    <h3>CUIT: 30-71700056-7</h3>

                    <h3>PARA ABONAR POR TRANSFERENCIA/DEPOSITO:</h3>

                    <p>BANCO ITAÚ</p>

                    <p>Nº de Cuenta: 37449871006</p>

                    <h3>CBU - 2590084410374498710062</h3>

                    <p>BANCO FRANCÉS</p>

                    <p>Nº de Cuenta: 130-020218/7</p>

                    <h3>CBU - 0170130820000002021878</h3>

                    <h5>Enviar comprobante de pago a Cobranzas (11-6198-3239)</h5>

                    <h5>Presentacion de ofertas licitacion hasta el 20/01 Resultados 27/01</h5>

                </div>

            </div>

            

        </div>

    )

}
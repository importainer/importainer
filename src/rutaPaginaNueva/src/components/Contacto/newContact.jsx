import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import AlertError from '../Alert/AlertError';
import AlertOk from '../Alert/AlertOk';
import stNewContact from "./newContactStyle.module.css";

export default function NewContact() {

    const dia = new Date().getDate();
    const mes = new Date().getMonth();
    const año = new Date().getFullYear();

    const hoy = dia + '/' + (mes + 1) + '/' + año;

    const [userObject, setUserObject] = useState({

        name: "",
        email: "",
        phone: "",
        message: "",
        fecha: hoy,
        usado: false,

    });

    const [stAltErr, setStAltErr] = useState(false);

    const [stAltOk, setStAltOk] = useState(false);

    const changeState = async (state) => {

        setStAltErr(state);

    }

    const changeStateOk = async (state) => {

        setStAltOk(state);

    }

    const inputDisabled = () => {

        const inputForm = document.getElementsByTagName("input");

        const textAreaForm = document.getElementsByTagName("textarea")[0];

        if (stAltErr) {

            for (let i = 0; i < inputForm.length; i++) {
                const e = inputForm[i];

                e.disabled = true;

            }

            textAreaForm.disabled = true;

        } else {

            for (let i = 0; i < inputForm.length; i++) {
                const e = inputForm[i];

                e.disabled = false;

            }

            textAreaForm.disabled = false;

        }

    }

    setTimeout(() => inputDisabled(), 500);

    const addUserContact = async (e) => {

        e.preventDefault();

        const {

            name,
            email,
            phone,
            message,

        } = userObject

        if (name.length > 0 && phone.length > 0) {

            // await addDoc(collection(db, "users"), { userObject });

            setUserObject({

                name: "",
                email: "",
                phone: "",
                message: "",
                fecha: hoy,
                usado: false,

            });

            changeStateOk(true);

        } else {

            setStAltErr(true);

        }

    }

    const onChangeInput = (e) => {

        e.preventDefault();

        const { name, value } = e.target;

        setUserObject({ ...userObject, [name]: value });

    }

    return (

        <div className={stNewContact.contactContainer} >

            <div className={stNewContact.content1} >

                <h1>Contactá con Importainer S.A.</h1>

            </div>

            <div className={stNewContact.content2} >

                <p>

                    Somos la empresa constructora con containers #1 de Argentina
                    con la más amplia variedad de proyectos; casas container,
                    piletas container, quinchos container, oficinas container y
                    mucho más al mejor precio del mercado. Escribinos y enterate
                    de los beneficios que te ofrecemos.

                </p>

                <div className={stNewContact.contentForm} >

                    <p>Recuerde que los campos con * son campos obligatorios, si ellos estan mal cargados es posible que nuestros asesores no puedan comunicarse con usted.</p>

                    <form onSubmit={addUserContact} >

                        <input id="activeDisable" type="text" name="name" onChange={e => onChangeInput(e)} value={userObject.name} placeholder="Nombre*" />

                        <input id="activeDisable" type="number" name="phone" onChange={e => onChangeInput(e)} value={userObject.phone} placeholder="Teléfono*" />

                        <input id="activeDisable" type="email" name="email" onChange={e => onChangeInput(e)} value={userObject.email} placeholder="Email" />

                        <textarea id="activeDisable" name="message" onChange={e => onChangeInput(e)} value={userObject.message} placeholder="¡Dejá tu mensaje!" />

                        <input id="activeDisable" type="submit" placeholder="Enviar" />

                    </form>

                </div>

            </div>

            <div className={stNewContact.content4} >

                <h1>Atención al cliente</h1>

                <ul>

                    <li>Bouchard 150, Moreno</li>

                </ul>

                <p>Teléfono: +54 9 11 6543-7037</p>

                <h1>Sucursales</h1>

                <ul>

                    <li>Av. Mayo 844 | CABA</li>
                    <li>Boulevard Evita 75, Moreno | GBA</li>
                    <li>Claudio Maria Joly 2570, Moreno | GBA</li>
                    <li>Colectora Oeste Ramal Pilar 2841, Tortuguitas | GBA</li>

                </ul>

            </div>

            <div className={stNewContact.content3} >

                <div className={stNewContact.img1} ><p>imagen</p></div>

            </div>

            <div className={stNewContact.content5} >

                <div className={stNewContact.contentMap} >

                    <iframe
                        title="c"
                        className={stNewContact.gmap_iframe}
                        width="80%"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8101076174785!2d-58.3783926!3d-34.60896299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad19e4254d7%3A0xc9a88525add98046!2sAv.%20de%20Mayo%20844%2C%20C1086%20CABA!5e0!3m2!1ses!2sar!4v1664898196116!5m2!1ses!2sar"
                    ></iframe>

                </div>

            </div>

            <AlertError title="Error" message="Verifique que los campos obligatorios esten cargados" state={stAltErr} add={changeState} />

            <AlertOk title="Ok" message="Los datos se guardaron Exitosamente!" state={stAltOk} add={changeStateOk} />

        </div>

    )

}
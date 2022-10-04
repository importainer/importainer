import React from 'react';
import stNewContact from "./newContactStyle.module.css";

export default function newContact() {

    return (

        <div className={stNewContact.contactContainer} >

            <div className={stNewContact.contentLeft} >

                <h1>Contactá con Importainer S.A.</h1>

                <p>

                    Somos la empresa constructora con containers #1 de Argentina
                    con la más amplia variedad de proyectos; casas container,
                    piletas container, quinchos container, oficinas container y
                    mucho más al mejor precio del mercado. Escribinos y enterate
                    de los beneficios que te ofrecemos.

                </p>

                <div className={stNewContact.contentForm} >

                    <form>

                        <input type="text" placeholder="Nombre" />

                        <input type="number" placeholder="Teléfono" />

                        <input type="email" placeholder="Email" />

                        <textarea placeholder="¡Dejá tu mensaje!" />

                        <input type="submit" placeholder="Enviar" />

                    </form>

                </div>

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

            <div className={stNewContact.contentRight} >

                <div className={stNewContact.img1} ><p>imagen</p></div>

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

        </div>

    )

}
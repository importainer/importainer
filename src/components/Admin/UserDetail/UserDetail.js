import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { db, app } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { users } from "../../../usersMoq";
import "./UserDetail.css";
import { useRadioGroup } from "@mui/material";

export default function UserDetail({ location }) {

    const [user, setUser] = useState({})

    const dni = location.state.dni;

    useEffect(() => {

        // setUser(users.find( e => e.dni === dni));

        const getSearhUser = async () => {

            const getUsersDB = await getDocs(collection(db, "estadoCliente"));
            
            const allUsers = getUsersDB.docs;

            const dataUsers = allUsers.map(e => e.data());

            const usPos = dataUsers.filter(e => e.dni === dni);

            setUser(usPos);

        }

        getSearhUser()

    }, []);
    
    const selectPlan = () => {

        const selectPlan = document.getElementById('plan').options;

        for (let i = 0; i < selectPlan.length; i++) {

            const valOption = selectPlan[i].value;
            
            if(valOption === user[0].estadoPlan) {

                selectPlan[i].selected = true;

            }
            
        }

    }

    const selectCasa = () => {

        const selectCasa = document.getElementById('casa').options;

        for (let i = 0; i < selectCasa.length; i++) {

            const valOption = selectCasa[i].value;
            
            if(valOption === user[0].estadoCasa) {

                selectCasa[i].selected = true;

            }
            
        }

    }

    setTimeout(() => {

        selectPlan();

        selectCasa();

    },50)

    const data = (valor) => {

        if(user.length > 0) {

            switch(valor) {

                case "name":
    
                    return (
    
                        <>
            
                            <p>{user[0].name + ' ' + user[0].lastName}</p>
            
                        </>
            
                    )
    
                case "direc":
    
                    return (
    
                        <>
            
                            <p>{user[0].direc}</p>
            
                        </>
            
                    )

                case "cp":

                    return (
    
                        <>
            
                            <p>{user[0].cp}</p>
            
                        </>
            
                    )

                case "prov":

                    return (
    
                        <>
            
                            <p>{user[0].prov}</p>
            
                        </>
            
                    )

                case "grupo":

                    return (
    
                        <>
            
                            <p>{user[0].grupo}</p>
            
                        </>
            
                    )

                case "orden":

                    return (
    
                        <>
            
                            <p>{user[0].orden}</p>
            
                        </>
            
                    )

                case "cuotN":

                    return (
    
                        <>
            
                            <p>{user[0].cuotN}</p>
            
                        </>
            
                    )
                    
                case "plan":

                    return (
    
                        <>
            
                            <p>{user[0].plan}</p>
            
                        </>
            
                    )

                case "modAhorro":

                    return (
    
                        <>
            
                            <p>{user[0].modAhorro}</p>
            
                        </>
            
                    )

                case "valorM":

                    return user[0].valorM
                    
                case "alicuota":

                    return user[0].alicuota

                case "segVida":

                    return user[0].segVida

                case "gAdm":

                    return user[0].gAdm

                case "pagas":

                    return user[0].pagas

                case "anticipadas":

                    return user[0].anticipadas

                case "licit":

                    return user[0].licit

                case "impagas":

                    return user[0].impagas

                case "emit":

                    return user[0].emit

                case "aVencer":

                    return user[0].aVencer

                case "total":

                    return user[0].total
    
            }

        }

    }
    
    return (

        <div className="userDetailContent" >

            <NavBar />

            <div className="userDetailContent__fac" >

                <img src="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Logos%2FLOGO%201000X1000_Mesa%20de%20trabajo%201.png?alt=media&token=544ff206-b6d6-41cd-b6b6-bcee5f06a347" />

                <div className="userDetailContent__nom" >

                    <h3>Nombre Apellido</h3>

                    {data("name")}

                </div>

                <div className="userDetailContent__dir" >

                    <h3>Direccion</h3>

                    {data("direc")}

                </div>

                <div className="userDetailContent__cp" >

                    <h3>CP</h3>

                    {data("cp")}

                </div>

                <div className="userDetailContent__prov" >

                    <h3>Provincia</h3>

                    {data("prov")}

                </div>

                <h2>Vencimiento: {user.ven}</h2>

                <div className="userDetailContent__gru" >

                    <h3>Grupo</h3>

                    {data("grupo")}

                </div>

                <div className="userDetailContent__ord" >

                    <h3>Orden</h3>

                    {data("orden")}

                </div>

                <div className="userDetailContent__cuot" >

                    <h3>Cuota N°</h3>

                    {data("cuotN")}

                </div>

                <div className="userDetailContent__plan" >

                    <h3>Plan</h3>

                    {data("plan")}

                </div>

                <div className="userDetailContent__mod" >

                    <h3>Modelo de Ahorro</h3>

                    {data("modAhorro")}

                </div>

                <div className="userDetailContent__titleDetail" >

                    <div className="titleDetail__cont" >

                        <h4>Concepto</h4>

                        <div className="titleDetail__det" >

                            <ul>

                                <li>Valor M.</li>

                                <li>Alicuota</li>

                                <li>Seguro de Vida</li>

                                <li>G. Administrativos</li>

                            </ul>

                            <ul className="titleDetail__det__izq" >

                                <li>$ {data("valorM")}</li>

                            </ul>

                        </div>

                    </div>

                    <div className="titleDetail__cont" >

                        <h4>Importe</h4>

                        <div className="titleDetail__det__imp" >

                            <ul>

                                <li>-</li>

                                <li>$ {data("alicuota")}</li>

                                <li>$ {data("segVida")}</li>

                                <li>$ {data("gAdm")}</li>

                            </ul>

                        </div>

                    </div>

                    <div className="titleDetail__cont" >

                        <h4>Estado de Cuenta</h4>

                        <div className="titleDetail__det" >

                            <ul>

                                <li>Pagas:</li>

                                <li>Anticipadas:</li>

                                <li>Licitadas:</li>

                                <li>Impagas:</li>

                                <li>Emitidas:</li>

                                <li>A Vencer:</li>

                            </ul>

                            <ul className="titleDetail__det__izq" >

                                <li>{data("pagas")}</li>

                                <li>{data("anticipadas")}</li>

                                <li>{data("licit")}</li>

                                <li>{data("impagas")}</li>

                                <li>{data("emit")}</li>

                                <li>{data("aVencer")}</li>

                            </ul>

                        </div>

                    </div>

                    <div className="titleDetail__total" >

                        <div className="titleDetail__total__text" >Total a Pagar</div>

                        <div className="titleDetail__total__monto" >${data("total")}</div>

                    </div>

                </div>

                <div className="userDetailContent__estadoPlan" >

                    <h5>Estado del Plan: </h5>

                    <select id='plan' >

                        <option value="suscripto" >Suscripto</option>

                        <option value="grOrAsig" >Grupo y Orden Asignado</option>

                        <option value="adjudicado" >Adjudicado</option>

                        <option value="pausado" >Pausado</option>

                        <option value="planCaido" >Plan Caido</option>
                        
                        <option value="liquidacion" >Liquidacion</option>

                    </select>

                </div>

                <div className="userDetailContent__estadoCont" >

                    <h5>Estado del Container: </h5>

                    <select id='casa' >

                        <option value="noAsignado" >No Asignado</option>

                        <option value="verifiDoc" >Verificacion de Documentos</option>

                        <option value="fabricacion" >Fabricacion</option>

                        <option value="entrega" >Entrega</option>

                    </select>

                </div>

                <div className="userDetailContent__footer" >

                    <p className="userDetailContent__footerN" >IMPORTAINER S.A.</p>

                    <p className="userDetailContent__footerN" >CUIT: 30-71700056-7</p>

                    <p className="userDetailContent__footerN" >PARA ABONAR POR TRANSFERENCIA/DEPOSITO:</p>

                    <p>BANCO ITAÚ</p>

                    <p>Nº de Cuenta: 37449871006</p>

                </div>

                <div className="userDetailContent__cbu1" >

                    <h4>CBU - 2590084410374498710062</h4>

                </div>

                <div className="userDetailContent__frances" >

                    <p>BANCO FRANCÉS</p>

                    <p>Nº de Cuenta: 130-020218/7</p>

                </div>

                <div className="userDetailContent__cbu2" >

                    <h4>CBU - 0170130820000002021878</h4>

                </div>

                <div className="userDetailContent__comp" >

                    <p className="userDetailContent__footerN" >Enviar comprobante de pago a Cobranzas (11-6198-3239)</p>

                    <p>Presentacion de ofertas licitacion hasta el 20/01 Resultados 27/01</p>

                </div>

            </div>

        </div>

    )

}
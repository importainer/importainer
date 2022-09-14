import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import TelegramIcon from '@mui/icons-material/Telegram';
import footerStyle from "./FooterPrinc.module.css";

export default function FooterPrinc() {
  
  const dia = new Date().getDate();
  const mes = new Date().getMonth();
  const año = new Date().getFullYear();
  
  const hoy = dia + '/' + (mes + 1) + '/' + año;

  const [numSection, setNumSection] = useState({fecha: hoy, numTel:0, status: false});
  
  const numberChange = (e) => {

    const { value } = e.target;

    e.preventDefault();
    
    setNumSection({...numSection, numTel: value});

  }

  const addContac = async (e) => {

    e.preventDefault();
    
    if(numSection.numTel.length >= 10) {

      await addDoc(collection(db, "tblNumberTel"), numSection);

    } else {

      alert("ingresa un numero valido")

    }

  }

  return (
    <div className={footerStyle.footerP}>

      <div className={footerStyle.headFooter} >

        <div className={footerStyle.linkForm} >

          <TelegramIcon sx={{color: '#FFF'}} />

          <Link to="/contactoTest"><p>Dejanos tu Consulta</p></Link>

        </div>

        <div className={footerStyle.contentFormFooter} >

          <form className={footerStyle.formFooter} onSubmit={addContac} >

            <input type="number" name="number" placeholder="Numero de Contacto" onChange={e => numberChange(e)} />

            <input type="submit" />

          </form>

        </div>

      </div>

      <div className={footerStyle.downFoP}>

        <h4 className={footerStyle.tifP}>Copyright @ 2021 Importainer S.A</h4>

      </div>
    </div>
  )
}

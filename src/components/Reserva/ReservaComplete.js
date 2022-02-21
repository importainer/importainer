import React from "react";
import Reserva from "./Reserva";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";
import "./ReservaComplete.css";

export default function ReservaComplete({codCRM, bloqued}) {
  
  const headers = process.env.REACT_APP_KEY;
  
  const idModelCRM = {

    'general': 148,
    '15mts': 153,
    '30mts': 154,
    '45mts': 155,
    '60mts': 156,
    '75mts': 157,
    '90mts': 158,
    '120mts': 159,

  }
  
  const reservaCRM = (infoRes) => {
    
    if(idModelCRM.hasOwnProperty(codCRM)) {

      axios.post("https://api.doubletick.com.ar/v2/landing-contacts",{
    
        "name":infoRes.name,
        "phone":infoRes.phone,
        "email":infoRes.email,
        "message":infoRes.message,
        "model_id":idModelCRM[codCRM],
        "product_type":1,
      
      },{

        headers: {
      
          'X-API-KEY': headers,
          
        }

      })
      .then(bien => console.log(bien, 'ok'))
      .catch(err => console.log(err.message, 'ERROR'))

    } else {

      axios.post("https://api.doubletick.com.ar/v2/landing-contacts",{
    
        "name":infoRes.name,
        "phone":infoRes.phone,
        "email":infoRes.email,
        "message":infoRes.message,
        "model_id":idModelCRM.general,
        "product_type":1,
      
      },{
        headers: {
      
          'X-API-KEY': headers,
    
        }
      })
      .then(bien => console.log(bien, 'ok'))
      .catch(err => console.log(err.message, 'ERROR'))

    }
    
  }

  const addUser = async (userObject) => {
    
    // reservaCRM(userObject)
    console.log(userObject, 'ver')
    await addDoc(collection(db, "reservas"), { userObject });

  };

  return (
    <div className="ReservaContainer">
      <h1 className="ReservaTitle">Felicidades!</h1>
      <h2 className="ReservaTitle">
        Estas a solo unos clicks de tener tu casa
      </h2>
      <h3 className="ReservaTitle">
        En breve un asesor se va a contactar contigo
      </h3>
      <Reserva add={addUser} codCRM={codCRM} bloqued={bloqued} />
    </div>
  );
};

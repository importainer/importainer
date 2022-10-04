import React, { Component } from "react";
import FooterSec from "../components/FooterSec/FooterSec";
import ContactoComplete from "../components/Contacto/ContactoComplete";
import NavBarPrinc from "../components/NavBarPrinc/NavBarPrinc";
import NewContact from "../components/Contacto/newContact";
import NavBarSec from "../components/NavBarSec/NavBarSec";

export default function ContactoPage() {

  return (

    <div>

      {/* <NavBarPrinc /> */}

      <NavBarSec />

      {/* <ContactoComplete/> */}

      <NewContact />

      <FooterSec />
    
    </div>
  )
}

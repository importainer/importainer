import React from 'react'
import InfoContainer from '../../components/InfoContainers/InfoContainer'
import FooterSec from '../../components/FooterSec/FooterSec'
import NavBarSec from '../../components/NavBarSec/NavBarSec'
import SlideShow from '../../components/SlideShow/SlideShow'
import Slide from '../../components/SlideShow/Slide';
import Phone from "../../components/phone/Phone";

export default function Cont30M2() {

    window.scroll(0, 0);

    return (
        <div>
            <NavBarSec title="Casas" link="/casas"/>
            <SlideShow>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa30M-3.jpg?alt=media&token=b902959e-82de-465e-9fee-cea886d42568"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa30M-4.jpg?alt=media&token=2158c1b2-13b8-4c8d-9abd-9c89d592262c"/>
            </SlideShow>
            <InfoContainer
                title="Container 30M2"
                img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F30m2%20(1).jpg?alt=media&token=9ece09a4-e7d9-4df5-bafc-909fc1f3078e" 
                aires="01"
                ventanas="02"
                litros="40"
            />
            <Phone />
            <FooterSec/>
        </div>
    )
}


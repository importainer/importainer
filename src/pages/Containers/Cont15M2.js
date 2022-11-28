import React from 'react'
import InfoContainer from '../../components/InfoContainers/InfoContainer'
import FooterSec from '../../components/FooterSec/FooterSec'
import NavBarSec from '../../components/NavBarSec/NavBarSec'
import SlideShow from '../../components/SlideShow/SlideShow'
import Slide from "../../components/SlideShow/Slide";
import Phone from "../../components/phone/Phone";

export default function Cont15M2() {

    window.scroll(0, 0);

    return (
        <div>
            <NavBarSec title="Casas" link="/casas"/>
            <SlideShow>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-3.jpg?alt=media&token=48991ad1-0d6d-4d5d-b245-63ccd8e8963a"/>
                <Slide img= "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-2.jpg?alt=media&token=93da54cb-eb47-4157-bf8a-6b33fc92d326"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-1.jpg?alt=media&token=b803aab6-7599-4651-8ebb-f70bf8a6cfd3" />
            </SlideShow>
            <InfoContainer
                title="Container 15M2"
                img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F15m2%2002.jpg?alt=media&token=54bf9810-e877-4c74-8ccc-0fb3e7f4182d" 
                aires="1"
                ventDif={false}
                ventanas="1"
                litros="30"
                bidet={false}
                boxDucha={false}
                bajoMesada="1.20"
                ventBalc={false}
                ventCocina="1.00m x 0.40m"
                puerta={false}
                puerOp=" 1.50 x 2.00m"
                op2={true}
                pvc={false}
                alacena={false}
                griferia={false}
                ventBaño="01"
                portRom="01"
            />
            <Phone />
            <FooterSec/>
        </div>
    )
}


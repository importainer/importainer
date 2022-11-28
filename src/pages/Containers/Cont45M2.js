import React from 'react'
import InfoContainer from '../../components/InfoContainers/InfoContainer'
import FooterSec from '../../components/FooterSec/FooterSec'
import NavBarSec from '../../components/NavBarSec/NavBarSec'
import SlideShow from '../../components/SlideShow/SlideShow'
import Slide from '../../components/SlideShow/Slide';
import Phone from "../../components/phone/Phone";

export default function Cont45M2() {

    window.scroll(0, 0);

    return (
        <div>
            <NavBarSec title="Casas" link="/casas"/>
            <SlideShow>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa45M-1.jpg?alt=media&token=e7168505-4ada-4d3a-9dc4-339425595d66" />
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa45M-3.jpg?alt=media&token=bcfbe0d9-27c8-4f27-bd4e-97d08faba51d"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa45M-2.jpg?alt=media&token=953cf68a-e3d6-4636-9187-7c17e329b43d"/>
            </SlideShow>
            <InfoContainer
                title="Container 45M2"
                img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F45m2%20-.jpg?alt=media&token=c448ee8d-c3af-43f7-87cd-adc18a269c5c" 
                aires="02"
                ventDif={false}
                ventanas="03"
                litros="55"
                bidet={true}
                boxDucha={true}
                bajoMesada="1.20 hasta 1.40"
                ventBalc={false}
                ventCocina="1.00m x 0.60m"
                puerta={false}
                puerOp=" 2.00 x 2.00m"
                op2={true}
                pvc={true}
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



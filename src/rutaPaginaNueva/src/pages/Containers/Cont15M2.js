import React from 'react'
import InfoContainer from '../../components/InfoContainers/InfoContainer'
import FooterSec from '../../components/FooterSec/FooterSec'
import NavBarSec from '../../components/NavBarSec/NavBarSec'
import SlideShow from '../../components/SlideShow/SlideShow'
import Slide from "../../components/SlideShow/Slide";
import Phone from "../../components/phone/Phone";

export default function Cont15M2({location}) {

    const { img, title } = location;

    window.scroll(0, 0);

    return (
        <div>
            <img src="" alt=""/>
            {/* <NavBarSec title="Casas" link="/casas"/> */}
            {/* <SlideShow>
                <Slide img={img} />
                <Slide img= "https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-2.jpg?alt=media&token=93da54cb-eb47-4157-bf8a-6b33fc92d326"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-1.jpg?alt=media&token=b803aab6-7599-4651-8ebb-f70bf8a6cfd3" />
            </SlideShow> */}
            <InfoContainer
                title={`Container ${title}`}
                img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F15m2%2002.jpg?alt=media&token=54bf9810-e877-4c74-8ccc-0fb3e7f4182d" 
                aires=""
                ventanas=""
                litros=""
            />
            <Phone />
            <FooterSec/>
        </div>
    )
}


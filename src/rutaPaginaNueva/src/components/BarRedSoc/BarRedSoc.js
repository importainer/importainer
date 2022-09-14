import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedSocialStyle from "./BarRedSoc.module.css";

export default function BarRedSoc() {

    return (

        <div className={RedSocialStyle.containerRedSocial} >

            <div className={RedSocialStyle.whatsapp} >

                <WhatsAppIcon />

                <p>COMUNICATE CON NUESTROS ASESORES</p>

            </div>

            <div className={RedSocialStyle.redes} >

                <a href="https://www.facebook.com/s.a.importainer"><FacebookIcon /></a>
                <a href="https://www.instagram.com/importainer_sa/"><InstagramIcon /></a>
                <a href="https://www.youtube.com/c/ImportainerSA"><YouTubeIcon /></a>

            </div>

        </div>

    )

}
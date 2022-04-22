import React from 'react';
import { Link } from "react-router-dom";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PhoneStyle from "./Phone.module.css";

export default function Phone() {

    return (

        <Link to='/contacto' >

            <div className={PhoneStyle.Content} >

                <PhoneInTalkIcon sx={{ color: '#000', fontSize: "2em", margin: ".2em" }} />

            </div>

        </Link>

    )

}
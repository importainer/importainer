import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../ConsultasCard/ConsultasCard.css";

export default function ConsultasCard({ id, email, name, phone, usado, message, fecha}) {

    const [active, setActive] = useState(false);

    const deslizContent = () => {

        const cont = document.getElementById(id);

        if(!active) {

            cont.className = "reservaCard__contentAction";

            setActive(true);

        } else {

            cont.className = "reservaCard__contentDisable";
            
            setTimeout(() => {

                cont.className = "reservaCard__content";

            }, 1000);

            setActive(false);

        }

    }

    console.log( email, name, phone, usado, message, fecha, 'datos')
    return (

        <div className='ConsultasContent' >

            <h1>{name}</h1>

            <h3 className='fecha' >{fecha}</h3>

            <h4>{usado}</h4>

            <div className={`consultasCard__icon`} >
                    
                { 
                
                    !active ? <ExpandMoreIcon sx={{ fontSize: 40 }} onClick={deslizContent} /> : 
                            <ExpandLessIcon sx={{ fontSize: 40 }} onClick={deslizContent} />
                            
                }

            </div>

            <div id={id} className='ConsultaCard__content' >

                <h4 className='email' >{email}</h4>

                <h4 className='phone' >{phone}</h4>

                <p>{message}</p>

            </div>
        
        </div>

    )

}
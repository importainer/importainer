import React, { useState } from 'react';
import { db, app } from "../../../firebase";
import { collection, getDocs, getDatabase, set, get } from "firebase/firestore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import "./ResCard.css";

export default function ResCard({ name, email, codCRM, phone, message, id, checkedDB }) {

    const [reserva, setReserva] = useState({});

    const [active, setActive] = useState(false);

    const [checked, setChecked] = useState(checkedDB);

    const [checked2, setChecked2] = useState(checkedDB);

    if(Object.keys(reserva).length === 0) {
        // console.log(checkedDB)
        setReserva({

            id,
            checked: checkedDB,
            codCRM,
            email,
            message,
            name,
            phone,

        })

    }

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

    const GreenSwitch = styled(Switch)(({ theme }) => ({

        '& .MuiSwitch-switchBase.Mui-checked': {
          color: red[500],
          '&:hover': {
            backgroundColor: alpha(red[500], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: red[500],
        },

    }));
      
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const actualizarDB = (dateAct) => {
        
        const collectionRef = app.firestore().collection("reservas").doc(id);

        const doc = collectionRef.update(dateAct);

    }

    const handleChange = () => {
        
        checked ? setChecked(false) : setChecked(true);

    }

    if(checked !== checked2) {

        const userObject = {...reserva, checked}

        actualizarDB({userObject});

        setChecked2(checked)

    }
    console.log(reserva, 'final')
    return (

        <>
        
            <div className='reservaCard'>

                <div className='reservaCard__contentTitle' >

                    <h4>{name}</h4>

                    <div className="titleDetail__Switch">

                        <GreenSwitch {...label} checked={checked} onChange={handleChange} defaultChecked />

                    </div>

                </div>

                <div className={`reservaCard__icon${id}`} >
                    
                    { 
                    
                        !active ? <ExpandMoreIcon sx={{ fontSize: 40 }} onClick={deslizContent} /> : 
                                <ExpandLessIcon sx={{ fontSize: 40 }} onClick={deslizContent} />
                                
                    }

                </div>

                <div  id={id} className='reservaCard__content' >

                    <div className='reservaCard__vis'>

                        <p className='reservaCard__datIzq' >{email}</p>

                        <p className='reservaCard__dat' >{codCRM}</p>

                        <p className='reservaCard__datDer' >{phone}</p>

                        <p className='reservaCard__mess' >{message}</p>

                    </div>

                </div>

            </div>
        
        </>

    )

}
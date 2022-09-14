import React, { useState, useEffect } from "react";
import { app } from "../../../firebase";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import "../ConsultasCard/ConsultasCard.css";

export default function ConsultasCard({ id, email, name, phone, usado, message, fecha}) {
    // id = 1

    const [consultas, setConsultas] = useState({});
    // 
    const [active, setActive] = useState(false);

    const [checked, setChecked] = useState(usado);

    const [checked2, setChecked2] = useState(usado);

    useEffect(() => {

        setConsultas({

            email, name, phone, usado, message, fecha
    
        });

    }, []);

    const deslizContent = () => {

        const cont = document.getElementById(id);
        
        if(!active) {

            cont.className = "ConsultaCard__contentAction";

            setActive(true);

        } else {

            cont.className = "consultaCard__contentDisable";
            
            setTimeout(() => {

                cont.className = "ConsultaCard__content";

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
    
    const actualizarDB = async (obj) => {
        
        const collectionRef = await app.firestore().collection("users").doc(id);
        
        await collectionRef.update(obj);     
        
        collectionRef.update(obj);

    }

    const handleChange = () => {
        
        checked ? setChecked(false) : setChecked(true);

    } 

    if(checked !== checked2) {
        
        const userObject = {...consultas, usado: checked}
        
        actualizarDB({userObject});

        setChecked2(checked);

    }

    // console.log( email, name, phone, usado, message, fecha, 'datos')
    return (

        <div className='ConsultasContent' >

            <div className='contentHeat' >

                <h1>{name}</h1>

                <h3 className='fecha' >{fecha}</h3>

                <div className="titleDetail__Switch">

                    <GreenSwitch {...label} checked={checked} onChange={handleChange} defaultChecked />

                </div>

            </div>

            <div className={`consultasCard__icon`} >
                    
                { 
                
                    !active ? <ExpandMoreIcon sx={{ fontSize: 40 }} onClick={deslizContent} /> : 
                            <ExpandLessIcon sx={{ fontSize: 40 }} onClick={deslizContent} />
                            
                }

            </div>

            <div id={id} className='ConsultaCard__content' >

                <h4 className='ConsultaCard__contentIzq' >{email}</h4>

                <h4 className='ConsultaCard__contentDer' >{phone}</h4>

                <div className='ConsultaCard__contentMess' >

                    <p>{message}</p>

                </div>

            </div>
        
        </div>

    )

}
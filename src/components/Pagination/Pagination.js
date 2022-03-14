import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Pag from "./Pagination.module.css";

export default function Pagination({ count, pagSelect, anterior, siguiente, indice }) {

    // const count = 10;

    const [recorrido, setRecorrido] = useState(true);

    const selectArrow = () => {



    }
    
    const active = (e) => {

        const { id } = e.target;

        // quitamos el estilo activ al div anterior
        const active = document.getElementsByClassName(Pag.active)[0];
        
        active.className = Pag.num;
        console.log(id === '' , 'go')
        if(id === '') {

            console.log(active.id - 1, 'active')
            
            anterior();

            // agregamos estilo activ al div actual
            const actDiv = document.getElementById((active.id - 1));

            actDiv.className = Pag.active;
        
        } else {

            // agregamos estilo activ al div actual
            const actDiv = document.getElementById(id);

            actDiv.className = Pag.active;

            pagSelect(id)

        }

    }

    // setTimeout(() => active(), 200)

    const cls = (e) => {

        if(recorrido){


            const d = document.getElementById(e);

            e < 2 ? d.className = Pag.active: d.className = Pag.num;

            setRecorrido(false);

        }


    }

    const pagRecorrer = () => {

        const num = [];

        for (let i = 1; i <= count; i++) {
            // console.log(i,'hola')

            num.push(i);

            // return <div>{i}</div>
            
        }

        return (

            <>

<div  >

<ArrowBackIosNewIcon sx={{ fontSize: 30, color: '#FF0000' }} onClick={e => active(e)} />

</div>

                {

                    num.map((e, i) => {
                        // console.log(e, 'e')
                        // let clss = e = 1 ? Pag.active : Pag.num; className={Pag.num}
                        setTimeout(() =>cls(e), 200)
                        return (

                            <>
                            
                                <div id={e} key={i} onClick={e => active(e)} >{e}</div>
                                
                            </>

                        )

                    })

                }

                

<div  >

<ArrowForwardIosIcon sx={{ fontSize: 30, color: '#FF0000' }} onClick={siguiente} />

</div>   

            </>

        )

    }

    return (

        <>

            {

                pagRecorrer()

            }

        </>

    )

}
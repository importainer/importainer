import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Pag from "./Pagination.module.css";

export default function Pagination({ count, pagSelect, anterior, siguiente }) {

    const [recorrido, setRecorrido] = useState(true);

    const activeDiv = document.getElementsByClassName(Pag.active)[0];
    
    const active = (e) => {

        const { id } = e.target;
        
        // quitamos el estilo activ al div anterior
        activeDiv.className = Pag.num;
        
         // agregamos estilo activ al div actual
         const actDiv = document.getElementById(id);

         actDiv.className = Pag.active;

         pagSelect(id)

    }

    const back = () => {

        const ant = parseInt(activeDiv.id) - 1;

        activeDiv.className = Pag.num;
        
        if(ant === 0) {
            
            // agregamos estilo activ al div actual
            const actDiv = document.getElementById(count);

            actDiv.className = Pag.active;

        } else {
            
            // agregamos estilo activ al div actual
            const actDiv = document.getElementById(ant);

            actDiv.className = Pag.active;

        }
        
        anterior();

    }

    const next = () => {

        const sig = parseInt(activeDiv.id) + 1;

        activeDiv.className = Pag.num;

        if(sig > count) {
            
            // agregamos estilo activ al div actual
            const actDiv = document.getElementById('1');

            actDiv.className = Pag.active;

        } else {
            
            // agregamos estilo activ al div actual
            const actDiv = document.getElementById(sig);

            actDiv.className = Pag.active;

        }
        
        siguiente();

    }

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

                    <ArrowBackIosNewIcon sx={{ fontSize: 30, color: '#FF0000' }} id='back' onClick={back} />

                </div>

                {

                    num.map((e, i) => {
                        // console.log(e, 'e')
                        // let clss = e = 1 ? Pag.active : Pag.num; className={Pag.num}
                        setTimeout(() =>cls(e), 200)
                        return (

                            <div key={i} className={Pag.cont} >
                            
                                <div id={e} onClick={e => active(e)} >{e}</div>
                                
                            </div>

                        )

                    })

                }

                <div  >

                    <ArrowForwardIosIcon sx={{ fontSize: 30, color: '#FF0000' }} id='next' onClick={next} />

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
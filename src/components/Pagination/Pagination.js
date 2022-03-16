import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Pag from "./Pagination.module.css";

export default function Pagination({ count, pagSelect, anterior, siguiente }) {
    // console.log(count);
    const [recorrido, setRecorrido] = useState(true);

    const [paginasDer, setPaginasDer] = useState(5);

    const [paginasIzq, setPaginasIzq] = useState(0);

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

    const nextBackPaginado = (x) => {

        const act = x === 1 ? (parseInt(activeDiv?.id) + 1) : (parseInt(activeDiv?.id) - 1);
        console.log(activeDiv, 'ver')

        if(act >= (count - 2)) {

            console.log('faltan 3')

            setPaginasDer((count + 1));

            setPaginasIzq((count - 5));

        } else if(act > 3) { 
            
            setPaginasDer(act + 2);

            setPaginasIzq(act - 3);

        } else {

            setPaginasDer(5);

            setPaginasIzq(0);

        }

        setRecorrido('2da');

    }

    const back = () => {
        console.log(activeDiv, 'ver')
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

        nextBackPaginado(0);

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

        nextBackPaginado(1);

    }

    const cls = (e) => {
        
        if(recorrido === true){

            const d = document.getElementById(e);

            e < 2 ? d.className = Pag?.active: d.className = Pag?.num;

            setRecorrido(false);

        } else if(recorrido === '2da') {
            
            const d = document?.getElementById(e);

            e === parseInt(activeDiv.id) ? d.className = Pag?.active: d.className = Pag?.num;

            setRecorrido(false);

        }


    }

    const pagRecorrer = () => {

        const num = [];

        for (let i = 1; i <= count; i++) {

            num.push(i);
            
        }
        
        return (

            <>

                <div  >

                    <ArrowBackIosNewIcon sx={{ fontSize: 30, color: '#FF0000' }} id='back' onClick={back} />

                </div>

                {

                    num.slice(paginasIzq, paginasDer).map((e, i) => {
                        
                        setTimeout(() =>cls(e), 0.5)

                        // cls(e)
                        
                            return (
    
                                <div key={e} className={Pag.cont} >
                                
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
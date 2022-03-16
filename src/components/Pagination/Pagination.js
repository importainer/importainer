import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Pag from "./Pagination.module.css";

export default function Pagination({ count, pagSelect, anterior, siguiente }) {
    // console.log(count);
    const [recorrido, setRecorrido] = useState(true);

    const [pagVisual, setPagVisual] = useState([]);

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

    // if(parseInt(activeDiv.id) === pagVisual) {

    //     setPagVisual(pagVisual)

    // }

    const createList = () => {

        const num = [];

        for (let i = 1; i <= count; i++) {
            // console.log(i,'hola')

            num.push(i);

            // return <div>{i}</div>
            
        }

        setPagVisual(num);

    }

    // createList()

    const backPaginado = () => {

        const act = (parseInt(activeDiv?.id) - 1);

        if(act >= 3) { 
            
            setPaginasDer(act + 2);

            setPaginasIzq(act - 3);

        }

    }

    const nextPaginado = () => {

        const act = (parseInt(activeDiv?.id) + 1);

        if(act > 3) { 
            
            setPaginasDer(act + 2);

            setPaginasIzq(act - 3);

        }

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

        backPaginado();

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

        nextPaginado();

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

                    num.slice(paginasIzq, paginasDer).map((e, i) => {
                        console.log(num.slice(paginasIzq, paginasDer), 'map')
                        setTimeout(() =>cls(e), 200)
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
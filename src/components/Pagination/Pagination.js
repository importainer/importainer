import React, { useState } from 'react';
import Pag from "./Pagination.module.css";

export default function Pagination() {

    const count = 10;

    const [recorrido, setRecorrido] = useState(true);
    
    const active = (e) => {

        const { id } = e.target;

        // const idActive = document?.getElementById('1');
        // console.log(idActive, 'active');
        // idActive.className = Pag.active;
        // console.log(idActive, 'active2');
        console.log(document.getElementsByClassName(Pag.active),'active1');
        // console.log(document.getElementById(id),'active2');

        const active = document.getElementsByClassName(Pag.active);

        active.className = Pag.num;

        const divAction = document.getElementById(id);

        divAction.className = Pag.active;

    }

    // setTimeout(() => active(), 200)

    const cls = (e) => {

        // console.log(document.getElementById(e), 'ver');

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

                {

                    num.map((e, i) => {

                        // let clss = e = 1 ? Pag.active : Pag.num; className={Pag.num}
                        setTimeout(() =>cls(e), 200)
                        return (

                            <>
                            
                                <div id={e} key={i}  onClick={e => active(e)} >{e}</div>
                                
                            </>

                        )

                    })

                }

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
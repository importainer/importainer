import React from 'react';
import { app } from '../../../firebase';
import Rating from '@mui/material/Rating';
import CardStyle from "./TestimonyCard.module.css";

export default function TestimonyCard({ data }) {

    const { id, name, testi, casa, ent1, ent2, ent3, ent4, ent5, localidad, idInterno, rating } = data;

    const imgGroup = [ent1, ent2, ent3, ent4, ent5];

    let state = 0;

    let iAct = 1;
    
    setTimeout(() => {

        const contSlider = document.getElementById(idInterno).childNodes[2].childNodes[0].childNodes;

        contSlider.forEach((e,i) => {

            if(i === 1) {

                e.style.opacity = 1;

            }

        })

    }, 100);
    
    const next = () => {

        iAct > 5 ? iAct = 1 : iAct++;

        const contSlider = document.getElementById(idInterno).childNodes[2].childNodes[0].childNodes;

        const long = contSlider.length - 2;

        contSlider.forEach((e,i) => {

            const ant = contSlider[i - 1];
            
            if(e.nodeName === 'IMG') {

                if(i < long){

                    if(i === iAct) {
                        
                        e.style.opacity = 1;

                        if(i > 1) {

                            ant.style.opacity = 0;
                        
                        } else if(i === 1) {

                            contSlider[long].style.opacity = 0;
                        
                        }
        
                    }

                } else {

                    if(i === iAct) {
                        
                        e.style.opacity = 1;

                        ant.style.opacity = 0;

                        iAct = 0;
        
                    }

                }

            }

        })

    }

    const back = () => {

        iAct < 1 ? iAct = 5 : iAct--;

        const contSlider = document.getElementById(idInterno).childNodes[2].childNodes[0].childNodes;

        const long = contSlider.length - 2;

        for (let i = long; i >= 1; i--) {
            const e = contSlider[i];

            const ant = i === long ? contSlider[1] : contSlider[i + 1];
            
            if(e.nodeName === 'IMG') {

                if(i > 1){

                    if(i === iAct) {
                        
                        e.style.opacity = 1;

                        if(i < 5) ant.style.opacity = 0;
                        else if(i === 5) contSlider[1].style.opacity = 0;
        
                    }

                } else {
                    
                    if(i === iAct) {
                        
                        e.style.opacity = 1;

                        ant.style.opacity = 0;

                        iAct = 6;
        
                    }

                }

            }
            
        }

    }

    const ratingFun = async (e) => {

        e.preventDefault();

        const { value } = e.target;

        state = value;

        const testRef = await app.firestore().collection("testimoniosBackup").doc(id);

        await testRef.update({ name, testi, casa, ent1, ent2, ent3, ent4, ent5, localidad, idInterno, rating: value })

    }

    // console.log(state, 'gggg')
    return (

        <div id={idInterno} className={CardStyle.cardContent} >

            <h2>{name}</h2>

            <div className={CardStyle.headCard} >

                <h3>{casa}</h3>

                <h3>{localidad}</h3>

            </div>

            <div className={CardStyle.sliderContent} >

                <div className={CardStyle.slider} >

                    <div className={CardStyle.back} onClick={back} >{'<'}</div>

                        {

                            imgGroup.map((e, i) => {

                                return (

                                    <>

                                        <img src={e} alt={casa} key={i} />

                                    </>

                                )

                            })

                        }

                    <div className={CardStyle.next} onClick={next} >{'>'}</div>

                </div>

            </div>
                
            <Rating name="size-large" defaultValue={rating} size="large" onChange={e => ratingFun(e)} />

        </div>

    )

}
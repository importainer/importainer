import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBarSec from '../NavBarSec/NavBarSec';
import { usersMoq } from "../EntregasSlider/moq";
import EntDetail from './EntregasDetail.module.css';

export default function EntregasDetail() {

    const { id } = useParams();

    const { casa, idInterno, name, testi, img1, img2, img3, img4, img5 } = usersMoq[id];

    const [indexActive, setIndexActive] = useState(0);

    const [index, setIndex] = useState(0);

    const onAcctionEffect = () => {

        const imgSlide = document.getElementsByClassName(EntDetail.display__img);

        for (let i = 0; i < imgSlide.length; i++) {

            const e = imgSlide[i];
            
            if(index === i) {
                
                imgSlide[indexActive].style.opacity = 0;

                e.style.opacity = 1;

                setIndexActive(index);

            }
            
        }

    }

    const imgSelec = (e) => {

        const { id } = e.target;

        setIndex(parseInt(id));

    }
    
    setTimeout(() => {

        onAcctionEffect();

    }, 100);

    // console.log(document.getElementById('idSlider'), 'entrega');

    return (

        <div className={EntDetail.EntDetailContent} >

            <NavBarSec title="Entrega" link={`/EntregasDetail/${id}`} />

            <h1>{casa}</h1>

            <div className={EntDetail.EntDetailContent__contentColum} >

                <div className={EntDetail.contentColum__izq} >

                    <div className={EntDetail.izq__list} >

                        <div className={EntDetail.list__img}  onClick={e => imgSelec(e)} ><img id={0} src={img1} /></div>
                        <div className={EntDetail.list__img}  onClick={e => imgSelec(e)} ><img id={1} src={img2} /></div>
                        <div className={EntDetail.list__img}  onClick={e => imgSelec(e)} ><img id={2} src={img3} /></div>
                        <div className={EntDetail.list__img}  onClick={e => imgSelec(e)} ><img id={3} src={img4} /></div>
                        <div className={EntDetail.list__img}  onClick={e => imgSelec(e)} ><img id={4} src={img5} /></div>

                    </div>

                    <div className={EntDetail.izq__display} >

                        <div className={EntDetail.display__img} ><img src={img1} /></div>
                        <div className={EntDetail.display__img} ><img src={img2} /></div>
                        <div className={EntDetail.display__img} ><img src={img3} /></div>
                        <div className={EntDetail.display__img} ><img src={img4} /></div>
                        <div className={EntDetail.display__img} ><img src={img5} /></div>

                    </div>

                    {/* <input type='button' onClick={() => console.log('asdasd')} value='animate' /> */}

                </div>

                <div className={EntDetail.contentColum__der} >

                    <h1>{name}</h1>

                    <h3>{testi}</h3>

                </div>

            </div>

        </div>

    )

}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { set } from "firebase/database";
import NavBarSec from '../NavBarSec/NavBarSec';
import FooterSec from '../FooterSec/FooterSec';
import { usersMoq } from "../EntregasSlider/moq";
import EntDetail from './EntregasDetail.module.css';

export default function EntregasDetail() {

    const { id } = useParams();

    const [entDetail, setEntDetail] = useState([]);

    const [indexActive, setIndexActive] = useState(0);

    const [index, setIndex] = useState(0);

    useEffect(() => {

        getDocs(collection(db, "testimoniosBackup"))
            .then(tbl => {

                setEntDetail(tbl.docs.filter(e => e.data().idInterno === parseInt(id)).map(e => e.data())[0]);
                
            })
            .catch(err => console.log(err, 'error'))

    }, []);

    const onAcctionEffect = () => {

        const imgSlide = document.getElementsByClassName(EntDetail.display__img);

        for (let i = 0; i < imgSlide.length; i++) {

            const e = imgSlide[i];

            if (index === i) {

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
        
        const selectImg = document.getElementsByClassName(EntDetail.list__img);

        for (let i = 0; i < selectImg.length; i++) {
            const e = selectImg[i];

            e.addEventListener('click', () => {

                setTimeout(() => e.style.width = "70%", 0);
                setTimeout(() => e.style.width = "100%", 300);
                
                e.style.transition = "width .3s";

            })
            
        }

    }, 100);

    // console.log(entDetail.linkTest, 'entrega');

    return (

        <div className={EntDetail.EntDetailContent} >

            <NavBarSec title="Entrega" link={`/EntregasDetail/${id}`} />

            <div className={EntDetail.der__h1} >

                <h1>Entrega en: {entDetail.localidad}</h1>

            </div>


            <div className={EntDetail.EntDetailContent__contentColum} >

                <div className={EntDetail.contentColum__izq} >

                    <div className={EntDetail.izq__list} >

                        <div className={EntDetail.list__img} onClick={e => imgSelec(e)} ><img id={0} src={entDetail.ent1} /></div>
                        <div className={EntDetail.list__img} onClick={e => imgSelec(e)} ><img id={1} src={entDetail.ent2} /></div>
                        <div className={EntDetail.list__img} onClick={e => imgSelec(e)} ><img id={2} src={entDetail.ent3} /></div>
                        <div className={EntDetail.list__img} onClick={e => imgSelec(e)} ><img id={3} src={entDetail.ent4} /></div>
                        <div className={EntDetail.list__img} onClick={e => imgSelec(e)} ><img id={4} src={entDetail.ent5} /></div>

                    </div>

                    <div className={EntDetail.izq__display} >

                        <div className={EntDetail.display__img} ><img src={entDetail.ent1} /></div>
                        <div className={EntDetail.display__img} ><img src={entDetail.ent2} /></div>
                        <div className={EntDetail.display__img} ><img src={entDetail.ent3} /></div>
                        <div className={EntDetail.display__img} ><img src={entDetail.ent4} /></div>
                        <div className={EntDetail.display__img} ><img src={entDetail.ent5} /></div>
                        

                    </div>

                    {/* <input type='button' onClick={() => console.log('asdasd')} value='animate' /> */}

                </div>

                <div className={EntDetail.contentColum__der} >

                    <h1>{entDetail.name}</h1>

                    <h2>{entDetail.casa}</h2>

                    <h4>{entDetail.testi}</h4>

                    <a href={entDetail.linkYou} >Siqueres ver el Testimonio completo has clic aqui...</a>

                </div>

            </div>

            {/* <FooterSec /> */}

        </div>

    )

}
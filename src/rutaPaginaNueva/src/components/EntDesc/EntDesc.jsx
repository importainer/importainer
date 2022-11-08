import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBarSec from '../NavBarSec/NavBarSec';
import BannerFinalSecond from '../Banner/BannerFinalSecond';
import BannerSlideSecond from '../Banner/BannerSlideSecond';
import FooterSec from "../FooterSec/FooterSec";
import { setFilterEnt } from "../../Redux/Actions/index";
import EntDetSt from "./EntDescSt.module.css";

export default function EntDesc() {

    const entregasFilter = useSelector(state => state.entregasFilter);

    const dispatch = useDispatch();

    const params = useParams();

    // useEffect( () => {

    //     dispatch(setFilterEnt(params.id))

    // }, []);

    return (

        <div>

            <NavBarSec />

            <div className={EntDetSt.contentBannerTest} >

                <BannerFinalSecond>

                    {

                        entregasFilter.map(e => {

                            e.img.shift()

                            return e.img.map(i => <BannerSlideSecond img={ i } /> )
                        
                        } )

                    }

                </BannerFinalSecond>
                
            </div>

            <div className={EntDetSt.contentTiVi} >

                <h1>{entregasFilter[0]?.title1}</h1>

                <h3>{entregasFilter[0]?.title2}</h3>

                <div className={EntDetSt.contentView} >

                    <iframe

                        width="100%"
                        height="100%"
                        src={entregasFilter[0]?.urlYou}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>

                    </iframe>

                </div>

            </div>

            <div className={EntDetSt.txtGroup1} >

                <p>{entregasFilter[0]?.p1}</p>

                <p>{entregasFilter[0]?.p2}</p>

            </div>

            <div className={EntDetSt.txtGroup2} >

                <p className={EntDetSt.EntDesDestac} >{entregasFilter[0]?.p3}</p>

            </div>

            <div className={EntDetSt.txtGroup3} >

                <p>{entregasFilter[0]?.p4}</p>

                <p>{entregasFilter[0]?.p5}</p>

            </div>

            <FooterSec />

        </div>

    )

}
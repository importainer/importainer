import React from "react";
import { useSelector } from 'react-redux';
import BannerSlideM from "./BannerSlide.module.css";

export default function BannerSlide({ key, banner, img, toph4, h1, h12, h3, h32, h4, h4Blod2, h4sub, des, h4FondNeg, btn }) {

  const ofertState = useSelector(state => state.ofertState);

  return (

    <div className={BannerSlideM.BannerSlide}>

      <div className={BannerSlideM.cardContent} >

        {

          toph4?.length > 0 ? <h4>{toph4}</h4> : null

        }

        {
          
          h1?.length > 0 ? <h1>{h1}</h1> : null

        }

        {
          
          h12?.length > 0 ? <h1>{h12}</h1> : null

        }
        
        {

          h3?.length > 0 ? <h3>{h3}</h3> : null

        }

        {

          h32?.length > 0 ? <h3>{h32}</h3> : null

        }

        {

          des?.length > 0 ? 

          <div className={BannerSlideM.contDes} >

            {

              des?.map((e, i) => {

                return (

                  <div className={BannerSlideM.numDes} key={i} >{e}%</div>

                )

              })

            }

            <div className={BannerSlideM.txtDes} >DE DESCUENTO</div>

          </div> : null

        }

        { h4?.length > 0 && <div className={BannerSlideM.h4Txt} >{h4}</div> }

        { h4Blod2?.length > 0 && <div className={BannerSlideM.h4Txt} >{h4Blod2}</div> }

        { h4sub?.length > 0 && <div className={BannerSlideM.h4Sub} >{h4sub}</div> }

        {
          
          h4FondNeg?.length > 0 && <div className={BannerSlideM.h4FondNeg} ><h5>{h4FondNeg}</h5></div>
          
        }

        {

          btn?.length > 0 && <div className={BannerSlideM.buttom} > <h3>{btn}</h3> </div>
        
        }

      </div>

      <img className={BannerSlideM.imgStyle} src={img} alt="" />

    </div>
  );

}

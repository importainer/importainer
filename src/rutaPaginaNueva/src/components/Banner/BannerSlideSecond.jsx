import React from "react";
import BannerSlideMSecond from "./BannerSlideSecond.module.css";

export default function BannerSlideSecond({ img }) {


  return (

    <div className={BannerSlideMSecond.BannerSlideSecond}>

      <img src={img} alt="" />

    </div>
  );

}

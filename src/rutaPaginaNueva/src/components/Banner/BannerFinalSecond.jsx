import React, { useEffect, useRef } from "react";
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import BFSecond from "./BannerFinalSecond.module.css";

const BannerFinalSecond = ({ children, banner, arrLength, index }) => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);
    const contenido = useRef(null);

    const Siguiente = () => {

        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `2000ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener("transitionend", transicion);
            };

            // EventeListener para cuando termina la transicion
            slideshow.current.addEventListener("transitionend", transicion);
        }
    };

    const next = () => {

        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `2000ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener("transitionend", transicion);
            };

            // EventeListener para cuando termina la transicion
            slideshow.current.addEventListener("transitionend", transicion);
        }
    };

    const atras = () => {

        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {

            const cantChildren = slideshow.current.children.length;

            // Obtenemos el ultimo elemento del slideshow
            const ultimoElemento = slideshow.current.children[(cantChildren - 1)];
            
            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            
            slideshow.current.insertBefore(ultimoElemento, primerElemento)

            primerElemento.style.transition = 'all 0.1s ease';

            primerElemento.style.opacity = '0';

            // Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `2000ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            // slideshow.current.style.transform = `translateX(${tamañoSlide}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final
                // slideshow.current.appendChild(primerElemento);
                // slideshow.current.insertBefore(ultimoElemento, primerElemento)
                console.log(ultimoElemento,primerElemento, 'iiii')
                // slideshow.current.removeEventListener("transitionend", transicion);
            };

            // EventeListener para cuando termina la transicion
            slideshow.current.addEventListener("transitionend", transicion);
            console.log(cantChildren, 'uuu')
        }

    }

    useEffect(() => {
        // Lo volvemos a poner
        // contenido.current.addEventListener("mouseenter", () => {
        //   intervaloSlideshow.current = setInterval(() => {
        //     // Siguiente();
        //     next()
        //   }, 5000);
        // });

        intervaloSlideshow.current = setInterval(() => {
            Siguiente();
            // next()
        }, 6500);

        // Eliminamos el intervalo
        // contenido.current.addEventListener("click", () => {

        //     clearInterval(intervaloSlideshow.current);

        //     document.getElementsByClassName(BFSecond.arrowLeft).item(index).classList.add(BFSecond.ContentArrowFilter)

        //     document.getElementsByClassName(BFSecond.arrowRight).item(index).classList.add(BFSecond.ContentArrowFilter)

        // });

    }, []);
    // console.log(slideshow.current.children.length, 'ssss')
    return (

        <div className={BFSecond.BannerFinalSecond} ref={contenido}>

            {/* <div className="BannerFilter">

        <div className="BannerContenido">

          <h1 className="BannerTitulo">IMPORTAINER S.A</h1>

          <h3 className="BannerSubtitulo">Construyendo Sueños</h3>

          <a className="btn BotonBanner" href="#contacto">

            Contacto

          </a>

        </div>

      </div> */}

            {/* <div className={BFSecond.ContentArrow} >

            </div> */}


            <div className={BFSecond.arrowLeft} onClick={atras} ><ChangeHistoryIcon sx={{ color: '#B90000', fontSize: 50 }} /></div>

            <div className={BFSecond.arrowRight} onClick={next} ><ChangeHistoryIcon sx={{ color: '#B90000', fontSize: 50 }} /></div>


            <div className={BFSecond.ContenedorSlideSecond} ref={slideshow}>

                {children}

            </div>

        </div>
    );
};

export default BannerFinalSecond;

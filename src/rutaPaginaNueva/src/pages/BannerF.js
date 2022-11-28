import React from 'react';
import BannerFinal from '../components/Banner/BannerFinal'
import BannerSlide from '../components/Banner/BannerSlide';

const BannerF = () => {

    // img1 = https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2F03.jpg?alt=media&token=b7ef27f3-edee-4910-b20a-2917e464a0e8
    // img2 = https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2FBanner-1.webp?alt=media&token=c2cfd79d-ceb1-4d29-bb6b-ee930b371f82
    // img3 = https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Ftriptico.jpg?alt=media&token=86c71e94-65a4-4055-ac65-2aa16f2e5a10
    // img4 = https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Fexterior%2013.jpg?alt=media&token=7aee97a0-a44a-40e6-872c-b9d3aec287ae
    // img5 = https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho30M-6.jpg?alt=media&token=66d53013-70c0-4d19-83a3-3fbe4565154c


    return(
        <div>
            <BannerFinal>
                <BannerSlide 
                    key="1"
                    h1="La casa container de tus sueños 100% financiada con hasta 240 cuotas y entrega programada"
                    // h32="100% financiada con hasta 240 cuotas y entrega programada" 
                    // des={[10, 15, 20]}
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Fej2.jpg?alt=media&token=88962b72-d701-41aa-955d-c61319fdc5f3"
                />
                <BannerSlide 
                    key="2"
                    h1="Los mejores dúplex container o casas container de dos pisos en hasta 240 cuotas y con entrega programada" 
                    // h12="hasta 240 cuotas y con entrega programada" 
                    //h4="CASAS, EXTERIORES, EMPRENDIMIENTOS Y OFICINAS AL CONTADO"
                    //h4FondNeg="Y HASTA 120 ó 240 CUOTAS"
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Fej3.jpg?alt=media&token=14d05dbe-b715-441c-ae7d-3bb9b636b352"
                />
                <BannerSlide 
                    key="3"
                    h1="Conseguí la pileta, quincho, garaje y jardín de invierno con los mejores planes de financiación del mercado" 
                    // h4="mejores planes de financiación del mercado"
                    // h4sub="¡COMPLETAMENTE FINANCIADO!"
                    // h4FondNeg="CONTADO Y HASTA 120 ó 240 CUOTAS"
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Fej4.jpg?alt=media&token=5d323742-6874-4993-b056-9bd69c9ac9e8"
                />
                <BannerSlide 
                    key="4"
                    // toph4="HOY PODÉS TENER TU PROPIA"
                    h1="¡Tu casa + pileta + quincho en 240 cuotas y con entrega programada!" 
                    // h4="240 cuotas y con entrega programada!"
                    // h4sub="SI SOS EMPRENDEDOR O EMPRESARIO, ESCRIBINOS"
                    // h4FondNeg="FRANQUICIA@IMPORTAINER.COM.AR"
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Fej5.jpg?alt=media&token=739e92d5-0675-40f4-9f9a-c9943d99abcc"
                />
                <BannerSlide 
                    key="5"
                    h1="¡Hoy podés tener tu propia franquicia Importainer y beneficiarte!"
                    h4="Si sos emprendedor o empresario, escribinos: franquicia@importainer.com.ar"
                    // h4sub="CON ENTREGA PROGRAMADA, AL CONTADO Y HASTA 240 CUOTAS"
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2Fej6.jpg?alt=media&token=7c767ebe-33ca-427f-8922-f33f898f0e7b"
                />
                <BannerSlide 
                    key="6"
                    h1="Oficinas container 100% financiadas, con entrega programada y adaptables a tus necesidades." 
                    // h4="BARES, FOODTRUCKS, ESTUDIOS DE FOTOGRAFIA Y MUCHO MAS"
                    // h4Blod2="!TUS SUEÑOS HECHOS REALIDAD EN UN CLICK!"
                    // h4sub="CON ENTREGA PROGRAMADA, AL CONTADO Y HASTA 240 CUOTAS"
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack120M-3.jpg?alt=media&token=328a5aab-a991-45b9-98b6-66ddf03404a4"
                />
                <BannerSlide 
                    key="7"
                    h1="Bares, foodtrucks, estudios fotográficos y mucho más con hasta 240 cuotas y entrega programada." 
                    // h4="¡TU ESPACIO DE TRABAJO A OJO Y SEMEJANZA!"
                    // h4sub="CON ENTREGA PROGRAMADA, AL CONTADO Y HASTA 240 CUOTAS"
                    btn="DESCUBRI TODOS"
                    img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Oficinas%2FOficina60M-9.jpg?alt=media&token=f411de2e-130c-4c39-a902-dedcc29ffa07"
                />
            </BannerFinal>
        </div>
    )
}

export default BannerF


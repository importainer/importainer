import React, { useState, useEffect } from "react";
import OfertaCard from "./OfertaCard";
import { db, app } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./OfertaList.css";

const OfertaList = () => {

  const widthPan = window.innerWidth;

  const finalReturn = widthPan <= 800 && widthPan >= 601 ? 2 : (widthPan <= 600 ? 1 : 3)

  const [datos, setDatos] = useState([]);

  const [inicio, setInicio] = useState(0);

  const [final, setFinal] = useState(finalReturn);

  const datosFiltrados = datos?.filter(e => e.status !== false);

  const orderDate = (a, b) => {

    if (a.codCRM > b.codCRM) {

      return 1

    }

    if (a.codCRM < b.codCRM) {

      return -1

    }
    // a must be equal to b
    return 0

  }

  // if(widthPan <= 600) setFinal(1)
  // else if(widthPan >= 600 && widthPan <= 800) setFinal(2)

  const listRender = datosFiltrados?.sort(orderDate).slice(inicio, final);

  useEffect(() => {

    const getData = async () => {

      const querySnapshot = await getDocs(collection(db, "publicacion"));

      setDatos(querySnapshot.docs.map(doc => doc.data()));

    }
    const data = getData()

    setDatos([data])

    // 
  }, []);

  const siguiente = () => {
    // console.log('1----')
    if (inicio < datos.length && final === (datos.length - 1)) {
      // console.log('2----')
      setInicio(0);

      setFinal(finalReturn);

    } else {

      setInicio(inicio + (widthPan <= 800 && widthPan >= 601 ? 2 : (widthPan <= 600 ? 1 : 3)));

      setFinal(final + (widthPan <= 800 && widthPan >= 601 ? 2 : (widthPan <= 600 ? 1 : 3)));

    }

  }

  const anterior = () => {

    if (inicio === 0) {

      setInicio(widthPan <= 800 && widthPan >= 601 ? datos.length - 3 : (widthPan <= 600 ? datos.length - 2 : datos.length - 4));

      setFinal(datos.length - 1);

    } else {

      setInicio(inicio - (widthPan <= 800 && widthPan >= 601 ? 2 : (widthPan <= 600 ? 1 : 3)));

      setFinal(final - (widthPan <= 800 && widthPan >= 601 ? 2 : (widthPan <= 600 ? 1 : 3)));

    }

  }

  return (

    <div className="OfertaContainer">

      <h1 className="OfertaTitle">Ofertas</h1>

      <div className="OFC" key={inicio} >

        <div className="CardsContainer" key={inicio} >

          <div className="content-flech">

            <div className="CardsContainer-flechaAnt">

              <ArrowBackIosNewIcon sx={{ fontSize: 60, color: '#FF0000' }} onClick={anterior} />

            </div>

          </div>

          {
            //----------- esta card es con los datos de la base de datos

            listRender?.map((e, i) => {
              // console.log(e.price.toString().replace(/\./g, ''))
              return (

                <OfertaCard
                  key={i}
                  codCRM={e.codCRM}
                  title={e.title}
                  img={e.file}
                  description={e.description}
                  cuota120A="cuota120AFoodtrack15"
                  cuota120B="cuota120BFoodtrack15"
                  cuota120C="cuota120CFoodtrack15"
                  cuota240A="cuota240AFoodtrack15"
                  cuota240B="cuota240BFoodtrack15"
                  cuota240C="cuota240CFoodtrack15"
                  nameCuota120="cuota120Foodtrack15"
                  nameCuota240="cuota240Foodtrack15"
                  nameCuotaPrinc="CuotasPrinc1"
                  cuotaP1="cuota120A"
                  cuotaP2="cuota240A"
                  link120="/reservas"
                  link240="/reservas"
                  cuotaPrecio120A={`CUOTA 2 – ANTICIPO DE 50%: $ ${e.desc50porcen}`}
                  cuotaPrecio120B={`CUOTA 12 – ANTICIPO DE 20%: $ ${e.desc20porcen}`}
                  cuotaPrecio120C="CUOTA 24 – SIN ANTICIPO "
                  cuotaPrecio240A={`CUOTA 2 – ANTICIPO DE 50%: $ ${e.desc50porcen}`}
                  cuotaPrecio240B={`CUOTA 18 – ANTICIPO DE 20%: $ ${e.desc20porcen}`}
                  cuotaPrecio240C="CUOTA 24 – SIN ANTICIPO"
                  precioLista={e.priceDesc}
                  precioCuota={e.precioCuota}
                  descuento={e.porcen}
                  precioListaAntes={e.price}
                />

              )

            })

          }

          <div className="content-flech">

            <div className="CardsContainer-flechaSig">

              <ArrowForwardIosIcon sx={{ fontSize: 60, color: '#FF0000' }} onClick={siguiente} />

            </div>

          </div>



        </div>
      </div>
    </div>
  );
};

export default OfertaList;



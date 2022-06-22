import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./HomeClientes.css";

export default function HomeClientes() {

  const [testimonios, setTestimonios] = useState([]);

  const [inicio, setInicio] = useState(0);

  const [final, setFinal] = useState(3);

  useEffect(() => {

    getDocs(collection(db, "testimonios"))
      .then(tbl => {

        setTestimonios(tbl.docs.map(e => e.data()));

      })
      .catch(err => console.log(err, 'error'))

  }, []);


  const orderDate = (a, b) => {

    if (a.idInterno > b.idInterno) {

      return 1

    }

    if (a.idInterno < b.idInterno) {

      return -1

    }
    // a must be equal to b
    return 0

  }

  const datosFiltrados = testimonios.filter(e => e.status !== false);

  const listRender = datosFiltrados.sort(orderDate).slice(inicio, final);

  let caja = '';

  const siguiente = () => {

    if (inicio < testimonios.length && final > testimonios.length) {

      setInicio(0);

      setFinal(3);

      // caja = document.getElementsByClassName('gal');

      // console.log(caja)

    } else {

      setInicio(inicio + 3);

      setFinal(final + 3);

    }

  }

  const anterior = () => {

    if (inicio === 0) {

      setInicio(0);

      setFinal(3);

    } else {

      setInicio(inicio - 3);

      setFinal(final - 3);

    }

  }

  return (
    <section className="clientes">
      <h2 className="pr">Clientes</h2>
      <div className="gal">

        {/* <ArrowBackIosNewIcon sx={{ fontSize: 60, color: '#FFF' }} onClick={anterior} /> */}

        {

          listRender?.map((e, i) => {

            return (

              <>

                <div className="cards">
                  <img
                    name="imgRadius"
                    src={e.file}
                    alt=""
                    loading="lazy"
                  />
                  <div className="content-card">
                    <h4>{e.name}</h4>
                    <h3>{e.casa}</h3>
                    <p>
                      "{e.testi}"
                    </p>
                  </div>
                </div>

              </>

            )

          })

        }

        {/* <ArrowForwardIosIcon sx={{ fontSize: 60, color: '#FFF' }} onClick={siguiente} /> */}

        {/* <div className="cards">
          <img
            src="https://live.staticflickr.com/65535/51566117695_1adb9306a3_k.jpg"
            alt=""
            loading="lazy"
          />
          <div className="content-card">
            <h4>Laura Gonzales | Container 30M2</h4>
            <p>
              "Nunca crei que podria tener mi propia casa, no me queda mas que
              agradecerle a Importainer de corazón. Es increible que hayan
              podido traer el container hasta Santa Fe"
            </p>
          </div>
        </div>
        <div className="cards">
          <img
            src="https://live.staticflickr.com/65535/51564389267_88ccd43202_k.jpg"
            alt=""
            loading="lazy"
          />
          <div className="content-card">
            <h4>Marcos Ruben | Container 15M2</h4>
            <p>
              "Con Importainer compré mi primera casa siendo joven y quede muy
              satisfecho. Tienen una atención especial en los detalles"
            </p>
          </div>
        </div>
        <div className="cards">
          <img
            src="https://live.staticflickr.com/65535/51564389097_5609995a81_k.jpg"
            alt=""
            loading="lazy"
          />
          <div className="content-card">
            <h4>Cintia Olives | Container 45M2</h4>
            <p>
              "Gracias a Importainer pudimos cumplir nuestro sueño familiar y
              ahora vivimos mas que contentos en nuestra hermosa casa
              container"
            </p>
          </div>
        </div> */}
      </div>

      {/* <div className="boton-clientes">
        <Link className="btn2" to="./testimonios">
              Testimonios
        </Link>
      </div> */}
    </section>
  );
}

import React, { useState } from "react";
import Alert from '@mui/material/Alert';

const Contacto = (props) => {

  const [msjAlert, setMsjAlert] = useState(false);

  const dia = new Date().getDate();
  const mes = new Date().getMonth();
  const año = new Date().getFullYear();

  const hoy = dia + '/' + (mes + 1) + '/' + año;

  const initialStateValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    fecha: hoy,
    usado: false,
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(values.phone.length < 10) {

      setMsjAlert(true);

    } else {

      setMsjAlert(false);
      
      props.add(values);

      setValues({ ...initialStateValues });

    }

  };

  return (
    <div>
      <div className="izq">
        <div className="container izq">
          <div className="formulario">
            <form
              action="#"
              target=""
              method="get"
              name="formDatosPersonales"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                value={values.name}
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Telefono"
                value={values.phone}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleInputChange}
                required
              />

              <textarea
                name="message"
                htmlFor="message"
                placeholder="Dejanos tu mensaje!"
                maxLength="300"
                value={values.message}
                onChange={handleInputChange}
              ></textarea>

              <input type="submit" name="enviar" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="der">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="item"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.nombre}
              </li>
            ))}
          </ul>
        </div> */}

        {

          msjAlert ? <Alert variant="filled" severity="error">
              Verifica que el numero telefonico este correcto!!
            </Alert> : null

        }

    </div>
  );
};

export default Contacto;

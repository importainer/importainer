import React, { useState } from "react";
import "./Reserva.css";

const Reserva = (props) => {
  
  const initialStateValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    codCRM: props.codCRM,
  }

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    props.add(values);

    setValues({ ...initialStateValues });
  };

  setTimeout(() => {

    if(props.bloqued) {
    
      const input = document.getElementsByTagName('input');

      const txtArea = document.getElementsByTagName('textarea');

      txtArea[0].disabled = true;
  
      if(input[1].disabled === false) {
  
        for (let i = 0; i < input.length; i++) {
  
          const element = input[i];
          
          element.disabled = true;
          
        }
  
      }
  
    }

  }, 50)
  
  return (
    <div className="ReservaForm">
      <div className="formulario">
        <form
          action="#"
          target=""
          method="get"
          name="formDatosPersonales"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre y Apellido"
            value={values.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefono"
            value={values.phone}
            onChange={handleInputChange}
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
            className="formulario-textarea"
            htmlFor="message"
            placeholder="Quiero reservar el container..."
            maxLength="300"
            value={values.message}
            onChange={handleInputChange}
          ></textarea>

          <input type="submit" name="enviar" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Reserva;

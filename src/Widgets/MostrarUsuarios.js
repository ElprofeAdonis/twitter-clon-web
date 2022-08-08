// Muestra los usuaarios registrados

import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import User from "./User";

const Estudiantes = () => {
  const [mostrarDato, setMostrarDato] = React.useState(null);
  const [infoApi, setInfoApi] = React.useState([]);

  const fetchEstudiantes = async () => {
    try {
      const res = await fetch("http://localhost:8000/usuarios");
      const data = await res.json();
      setMostrarDato(data.data);
      setInfoApi(data.payload);
      console.log(data);
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada  de mostrar dato");
    }
  };
  useEffect(() => {
    console.log("Peticion inicializada");
    fetchEstudiantes();
  }, []);

  return (
    <body style={{ background: "#99A3A4" }}>
      <div>
        <br />
        <h5>Usuarios Registros</h5>
        <div style={{ border: "45px" }}>
          <User infoApi={infoApi} />
        </div>
        <br />
      </div>
    </body>
  );
};

export default Estudiantes;

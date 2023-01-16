import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CREAR_NAVE } from "../Redux/actions";
import { useHistory, Link } from "react-router-dom";
import estilos from "../Estilos/Formulario.module.css";

export default function Formulario() {
  let dispatch = useDispatch();
  let history = useHistory();

  const [nave, setNave] = useState({
    nombre: "",
    hayTripulantes: true,
    paisCreador: "",
    peso: 0,
    tipoRecorrido: "",
  });

  

  function handleChangeInput(e) {
    setNave({
      ...nave,
      [e.target.name]: e.target.value,
    });
  }

  function handleCrearNave(e) {
    e.preventDefault();
    const naveCreada = {
      ...nave,
    };
    dispatch(CREAR_NAVE(naveCreada));
    alert("Nave creada con exito!");
    setTimeout(() => {
      history.push("/home");
    }, 1000);
  }
    

  return (
    <div>
       <h2>Crea tu nave </h2>

       <form className={estilos.formulario}>
        <div>
          <label>
            Nombre:
            <br />
            <input
              type="text"
              name="nombre"
              value={nave.nombre}
              placeholder="Nombre..."
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>

          <br />
        <div>
          
          <label>
            Tripulantes:
            <br />
            <input
              type="text"
              name="hayTripulantes"
              value={nave.hayTripulantes}
              placeholder="Si /No."
              onChange={(e) => handleChangeInput(e)}
            />
            <br />
          </label>
        </div>

        <br />

        <div>
          <label>
            País de creación:
            <br />
            <input
              type="text"
              name="paisCreador"
              value={nave.paisCreador}
              placeholder="Colombia..."
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>

        <br />

        <div>
          <label>
            Peso:
            <br />
            <input
              type="number"
              name="peso"
              step="100"
              min="100"
              max="500"
              value={nave.peso}
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>

        <div>
          <label>
            Tipo recorrido:
            <br />
            <input
              type="text"
              name="tipoRecorrido"
              value={nave.tipoRecorrido}
              placeholder="lunar, corteza, terrestre, interplanetario"
              onChange={(e) => handleChangeInput(e)}
              size="35"
            />
          </label>
        </div>


        <br />

        <button
          onClick={(e) => handleCrearNave(e)}
        >
          Send
        </button>
        <br /> <br />
       <button>
        <Link to="/home">Volver a home</Link>
      </button>
      </form>
      
    </div>
    
  )
}

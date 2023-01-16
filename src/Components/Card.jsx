import React from "react";

export default function Card({ nombre, hayTripulantes, paisCreador, peso, tipoRecorrido  }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <h3>{hayTripulantes}</h3>
      <h4>{paisCreador}</h4>
      <h5>{peso}</h5>
      <h6>{tipoRecorrido}</h6>

    </div>
  );
}

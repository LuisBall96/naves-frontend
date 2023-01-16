import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TRAER_NAVES } from '../Redux/actions';
import Card from './Card';

export default function Home() {

  let dispatch = useDispatch();
  let navesEstado = useSelector((state) => state.naves);
  
  useEffect(() => {
    dispatch(TRAER_NAVES());
  }, [dispatch]);
  
  const navesPantalla = navesEstado
  return (
    <div>
      <h1>¿Estás buscando una nave?</h1>
      <nav >
        <Link to="/formulario">Puedes crear tu nave</Link>
      </nav>

      <div>
        {
          navesPantalla.map((ele) => {
            return (
              <div key={ele.id}>
                  <Card
                    key={ele.id}
                    nombre={ele.nombre}
                    hayTripulantes={ele.hayTripulantes}
                    paisCreador={ele.paisCreador}
                    peso={ele.peso}
                    tipoRecorrido={ele.tipoRecorrido}
                  />
              </div>
            )}
            )
        }
      </div>
    </div>
  )
}

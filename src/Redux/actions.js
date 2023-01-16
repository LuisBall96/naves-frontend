import axios from "axios";

export function TRAER_NAVES() {
  return async function (dispatch) {
    let url = await axios("http://localhost:3001/nave");
    return dispatch({
      type: "TRAER_NAVES",
      payload: url.data,
    });
  };
}

export function BUSCAR_POR_NOMBRE(nombre) {
    return async function (dispatch) {
      let url = await axios("http://localhost:3001/nave?nombre=" + nombre);
      return dispatch({
        type: "BUSCAR_POR_NOMBRE",
        payload: url.data,
      });
    };
  }

  export function CREAR_NAVE(payload) {
    return async function () {
      let url = await axios.post("http://localhost:3001/crearNave", payload);
      return url;
    };
  }
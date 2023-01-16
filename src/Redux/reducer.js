const initialState = {
    naves: [],
   
  };
  
  function navesReducer(state = initialState, action) {
    switch (action.type) {
      case "TRAER_NAVES": {
        return {
          ...state,
          naves: action.payload,
        };
      }
  
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default navesReducer;
  
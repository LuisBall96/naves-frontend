import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import navesReducer from "./reducer";


const store = createStore(
  navesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
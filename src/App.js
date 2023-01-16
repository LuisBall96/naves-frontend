import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.jsx"
import LandingPage from "./Components/LandingPage.jsx"
import Formulario from "./Components/Formulario.jsx"
import './App.css';

function App() {
  return (
    <Router>
    <div>
       <Switch>
       <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/formulario">
          <Formulario />
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

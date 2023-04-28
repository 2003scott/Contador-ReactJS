// import logo from './logo.svg';
import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import freeCodeCampLogo from "./image/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [numclicks, setNumClicks] = useState(0);

  const manejarclick = () => {
    console.log("click");
    setNumClicks(numclicks + 1);
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numclicks={numclicks}></Contador>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarclick={manejarclick}
        ></Boton>
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarclick={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;

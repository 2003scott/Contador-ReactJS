import React from 'react';
import '../stylesheet/Boton.css'

function Boton({texto, esBotonDeClick, manejarclick}) {
    return (
        <button className={esBotonDeClick ? "boton-click":"boton-reiniciar"} onClick={manejarclick}>
            {texto}
        </button>
    );
}

export default Boton;
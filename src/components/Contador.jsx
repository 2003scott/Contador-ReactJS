import React from 'react';
import '../stylesheet/Contador.css'

function Contador({numclicks}) {
    return (
        <div className='contador'>
            {numclicks}
        </div>
    );
}

export default Contador;
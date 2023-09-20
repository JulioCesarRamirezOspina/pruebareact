import React from 'react';
import './Qr.css';
import imagen from '../assets/NequiJulioRamirez.jpg';

function Qr() {
    return (
        <div className="container-qr">
            <div>
                <h1>Nequi</h1>
                <img alt='codigo qr nequi' src={imagen} className='imagen'></img>
            </div>
        </div>
    );
}

export default Qr;

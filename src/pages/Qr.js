import React from 'react';
import './Qr.css';
import imagen from '../assets/NequiJulioRamirez.jpg';
import {  Link } from "react-router-dom";


function Qr() {
    return (
        <div className="container-qr">
            <h1>Nequi</h1>
            <img alt='codigo qr nequi' src={imagen} className='imagen'></img>
            <div className='enlaces'>
            <Link to="/" className='enlace'>Nuevo registro</Link>
            <Link to="/fin" className='enlace'>Terminar</Link>
            </div>
        </div>
    );
}


export default Qr;


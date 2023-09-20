import React from 'react';
import './Fin.css';
import { Link } from "react-router-dom";
import ConfettiExplosion from 'react-confetti-explosion';


function Fin() {
    const [isExploding, setIsExploding] = React.useState(true);
    return (
        <div className="container-fin">
            <>{isExploding && <ConfettiExplosion />}</>
            <h1>!Gracias por su registro! 🚀</h1>
            <Link to="/" className='enlace-fin'>Nuevo registro 🗒️</Link>
        </div>
    );
}

export default Fin;

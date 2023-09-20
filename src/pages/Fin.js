import React from 'react';
import './Fin.css';
import {  Link } from "react-router-dom";


function Fin() {
  return (
    <div className="container-fin">
        <h1>!Gracias por su registro! 🚀</h1>
        <Link to="/">Nuevo registro</Link>
    </div>
  );
}

export default Fin;

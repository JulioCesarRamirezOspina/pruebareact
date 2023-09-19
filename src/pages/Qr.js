import React, { useState, useEffect } from 'react';
import formbricks from "@formbricks/js";
import imagen from './ceremonia-23-sep-2023.png';
import './App.css';
import AudioPlayer from '../components/AudioPlayer'; // Asume que AudioPlayer está en el mismo directorio
import sampleAudio from './laSendaInca.mp3';

function Qr() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.init({
        environmentId: "clmqbjgrl00qvpi3ndjqg3p2e",
        apiHost: "https://forms.yosoft.app",
        debug: false, // remove when in production 
      });
    }
  }, []);

  const [telefono, setTelefono] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    formbricks.reset();
    formbricks.setUserId(`${nombreApellido} - ${telefono}`);
    formbricks.track("Registrar");
    console.log("Registrar");
    setNombreApellido('');
    setTelefono('');
    // formbricks.logout();
  }

  return (
    <div className="container">
      <div className="video-wrapper">
        {/* <video src="/video/ceremonia-23-sep-2023.mp4" autoPlay preload='auto' poster="/img/ceremonia-23-sep-2023.png" className="video">
            Tu navegador no admite el elemento <code>video</code>.
          </video> */}
        <img src={imagen} className="video"></img>
      </div>
      <div className="form-wrapper">
        <h3>Ceremonia Ancestral de Yage</h3>
        <h2>Registro</h2>

        <form onSubmit={handleSubmit}>
          <input placeholder="Nombres y Apellidos" type="text" value={nombreApellido} onChange={e => setNombreApellido(e.target.value)} />
          <input placeholder="Teléfono" type="text" value={telefono} onChange={e => setTelefono(e.target.value)} />
          <br></br>
          <button type="submit">Enviar</button>
        </form>
        <div className="container-botones">
          <AudioPlayer  src={sampleAudio} />
        </div>
      </div>
    </div>
  );
}

export default Qr;

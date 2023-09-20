import React, { useState, useEffect } from 'react';
import formbricks from "@formbricks/js";
import imagen from '../assets/ceremonia-23-sep-2023.png';
import './Home.css';
import AudioPlayer from '../components/AudioPlayer'; // Asume que AudioPlayer está en el mismo directorio
import sampleAudio from '../assets/laSendaInca.mp3';

function Home() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            formbricks.init({
                environmentId: "clms3n3oz0003nz3juhrvy371",
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
                <img alt='ceremonia' src={imagen} className="video"></img>
                <div className="container-botones">
                    <AudioPlayer src={sampleAudio} />
                </div>
            </div>
            <div className="form-wrapper">
                <h3>Ceremonia Ancestral de Yage</h3>
                <h4>Registro</h4>

                <form onSubmit={handleSubmit}>
                    <input placeholder="Nombres y Apellidos" type="text" value={nombreApellido} onChange={e => setNombreApellido(e.target.value)} />
                    <input placeholder="Teléfono" type="number" value={telefono} onChange={e => setTelefono(e.target.value)} />
                    <br></br>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Home;

import './Mapa.css';
export default function MapaWaze() {
    return (
        <div className="mapa">
            <h3>Finca Campo Alegre</h3>
            <p>La ceremonia se llevará a cabo en el municipio de la Palestina, Colombia.</p>
            <iframe src="https://embed.waze.com/iframe?zoom=16&lat=4.683350&lon=-74.600000&ct=livemap"  allowfullscreen></iframe>
        </div>
    )
}
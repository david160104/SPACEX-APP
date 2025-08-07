import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { launches } from "../data/launches"; // Ajusta la ruta según la ubicación real


// Define el ícono personalizado
const icon = new L.Icon({
  iconUrl: "/images/rocket-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MissionMap() {
  return (
    <div className="mt-12">
      <div className="h-96 rounded-xl overflow-hidden shadow-lg">
        <MapContainer center={[27.5, -95]} zoom={5} className="w-full h-full">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {launches.map((launch) => (
            <Marker key={launch.id} position={launch.position} icon={icon}>
              <Popup>{launch.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

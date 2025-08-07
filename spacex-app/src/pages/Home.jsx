import CommentsPanel from "../components/CommentsPanel";
import ImageSpinner from "../components/ImageSpinner";
import MissionMap from "../components/MissionMap"; // ajusta la ruta si está en otra carpeta
import { launches } from "../data/launches"; // Ajusta la ruta según la ubicación real
import StatsCounter from '../components/StatsCounter';


export default function Home() {
  return (
    <div
      className="min-h-screen px-6 py-12 bg-[#0d0d12] text-white"
    
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-purple-400">
          🚀 Bienvenido a la app de SpaceX
        </h1>
        <p className="text-lg text-gray-300">
          Explora lanzamientos, cohetes, cápsulas y más.
        </p>
      </div>

      <ImageSpinner />
    


      {/* Tarjetas de navegación */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Cohetes",
            text: "Explora los cohetes desarrollados por SpaceX.",
          },
          {
            title: "Misiones",
            text: "Descubre las misiones más importantes.",
          },
          {
            title: "Cápsulas",
            text: "Información sobre las cápsulas espaciales.",
          },
        ].map((card, index) => (
          <a
            key={index}
            className="bg-[#1a1a25] hover:bg-[#232334] transition-all duration-300 p-6 rounded-2xl shadow-lg hover:scale-105 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-400">{card.text}</p>
          </a>
        ))}
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center">
        {[
          {
            number: "280+",
            label: "Lanzamientos exitosos",
            desc: "Misiones completadas con éxito",
          },
          {
            number: "170+",
            label: "Aterrizajes de cohetes",
            desc: "Revolucionando la reutilización espacial",
          },
          {
            number: "150+",
            label: "Misiones Dragon",
            desc: "Cápsulas Dragon en operación",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a25] hover:bg-[#232334] p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-all"
          >
            <h3 className="text-3xl font-bold text-purple-400">
              {item.number}
            </h3>
            <p className="text-md font-semibold mt-2">{item.label}</p>
            <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
      <CommentsPanel />
       <h1 className="text-2xl font-bold mb-4">🚀 Mapa de Misiones</h1>
      <MissionMap />
      <div className="mt-4 space-y-2">
        {launches.map((launch) => (
    <div
      key={launch.id}
      className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
    >
      <h2 className="font-bold text-lg">{launch.name}</h2>
      <p>Latitud: {launch.position[0]}</p>
      <p>Longitud: {launch.position[1]}</p>
    </div>
  ))}
</div>
<div className="container mx-auto px-4">
  <StatsCounter />
</div>
<div class="tv-screen" onclick="playSound();">
  <div class="bot-head" id="bot">
    <div class="eyes">
      <div class="eye left"></div>
      <div class="eye right"></div>
    </div>
  </div>
</div>
<button id="speak-btn" onClick={interactWithUser}>👂 Hablar</button>

    </div>  
  );
}

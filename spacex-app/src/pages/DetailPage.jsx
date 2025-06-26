import { useParams, useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function DetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading } = useFetch(`${path}/${id}`);

  if (loading) return <p className="p-4">Cargando detalles...</p>;
  if (!data) return <p className="p-4 text-red-500">No se encontró información.</p>;

  const renderContent = () => {
    switch (path) {
      case "launches":
        return (
          <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <img
              src={data.links?.patch?.large}
              alt={data.name}
              className="w-48 mb-4"
            />
            <p><strong>Fecha:</strong> {new Date(data.date_utc).toLocaleDateString()}</p>
            <p><strong>Detalles:</strong> {data.details || "No hay detalles disponibles."}</p>
            {data.links?.webcast && (
              <a
                href={data.links.webcast}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                Ver webcast
              </a>
            )}
          </div>
        );

      case "rockets":
        return (
          <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p><strong>Primera etapa:</strong> {data.first_stage?.engines} motores</p>
            <p><strong>Altura:</strong> {data.height?.meters} metros</p>
            <p><strong>Descripción:</strong> {data.description}</p>
          </div>
        );

      case "capsules":
        return (
          <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{data.name || data.type}</h2>
            <p><strong>Serie:</strong> {data.serial}</p>
            <p><strong>Tipo:</strong> {data.type}</p>
            <p><strong>Estado:</strong> {data.status}</p>
          </div>
        );

      case "dragons":
        return (
          <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p><strong>Tipo:</strong> {data.type}</p>
            <p><strong>Descripción:</strong> {data.description}</p>
            <p><strong>Tripulación máxima:</strong> {data.crew_capacity}</p>
            <p><strong>Primero voló en:</strong> {data.first_flight}</p>
            {data.flickr_images?.[0] && (
              <img
                src={data.flickr_images[0]}
                alt="Dragon"
                className="mt-4 w-full max-w-md rounded shadow"
              />
            )}
          </div>
        );

      case "missions":
        return (
          <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p><strong>Descripción:</strong> {data.description || "No disponible"}</p>
            <p><strong>Fabricante:</strong> {data.manufacturers?.join(", ") || "N/A"}</p>
            <p><strong>Payloads:</strong> {data.payloads?.length || 0}</p>
          </div>
        );

      case "crew":
        return (
          <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p><strong>Agencia:</strong> {data.agency}</p>
            <p><strong>Estado:</strong> {data.status}</p>
            <p><strong>Wikipedia:</strong>{" "}
              <a
                href={data.wikipedia}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Ver perfil
              </a>
            </p>
            {data.image && (
              <img
                src={data.image}
                alt={data.name}
                className="mt-4 w-48 rounded-full shadow"
              />
            )}
          </div>
        );

      default:
        return (
          <div className="p-4">
            <p>No hay un diseño específico para esta sección.</p>
            <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
}

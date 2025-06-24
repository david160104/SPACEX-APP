import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import LaunchesList from "./LaunchesList"; // 👈 te lo creo abajo

export default function CrewDetail() {
  const { id } = useParams();
  const { data: crew, loading } = useFetch(`crew/${id}`);

  if (loading) return <p>Cargando detalles...</p>;

  return (
    <div>
      <h2>Detalles</h2>
      <pre>{JSON.stringify(crew, null, 2)}</pre>

      {/* Mostrar lanzamientos si hay */}
      {crew.launches?.length > 0 && <LaunchesList launchIds={crew.launches} />}
    </div>
  );
}

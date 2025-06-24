// src/pages/DetailPage.jsx
import { useParams, useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function DetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading } = useFetch(`${path}/${id}`);

  if (loading) return <p>Cargando detalles...</p>;

  return (
    <div>
      <h2>Detalles</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

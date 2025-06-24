// src/components/LaunchesList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function LaunchesList({ launchIds }) {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      launchIds.map(id =>
        axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
      )
    )
      .then(responses => setLaunches(responses.map(res => res.data)))
      .catch(err => console.error("Error al obtener lanzamientos:", err))
      .finally(() => setLoading(false));
  }, [launchIds]);

  if (loading) return <p>Cargando lanzamientos...</p>;

  return (
    <div>
      <h3>Lanzamientos relacionados</h3>
      <ul>
        {launches.map(launch => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
}

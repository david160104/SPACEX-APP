import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Crew() {
  const { data, loading } = useFetch("crew");

  if (loading) return <p>Cargando tripulación...</p>;

  return (
    <div>
      <h2>Tripulación</h2>
      <div className="grid">
        {data.map(item => (
          <ItemCard key={item.id} item={item} path="crew" />
        ))}
      </div>
    </div>
  );
}

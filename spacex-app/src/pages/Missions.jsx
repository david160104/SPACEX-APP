import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Missions() {
  const { data, loading } = useFetch("missions");

  if (loading) return <p>Cargando misiones...</p>;

  return (
    <div>
      <h2>Misiones</h2>
      <div className="grid">
        {data.map(item => (
          <ItemCard key={item.id} item={item} path="missions" />
        ))}
      </div>
    </div>
  );
}

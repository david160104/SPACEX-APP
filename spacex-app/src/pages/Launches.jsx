import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Launches() {
  const { data, loading } = useFetch("launches");

  if (loading) return <p>Cargando lanzamientos...</p>;

  return (
    <div>
      <h2>Lanzamientos</h2>
      <div className="grid">
        {data.map(item => (
          <ItemCard key={item.id} item={item} path="launches" />
        ))}
      </div>
    </div>
  );
}

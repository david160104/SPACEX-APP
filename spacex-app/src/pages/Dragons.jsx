import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Dragons() {
  const { data, loading } = useFetch("dragons");

  if (loading) return <p>Cargando dragones...</p>;

  return (
    <div>
      <h2>Dragones</h2>
      <div className="grid">
        {data.map(item => (
          <ItemCard key={item.id} item={item} path="dragons" />
        ))}
      </div>
    </div>
  );
}

import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Capsules() {
  const { data, loading } = useFetch("capsules");

  if (loading) return <p>Cargando cápsulas...</p>;

  return (
    <div>
      <h2>Cápsulas</h2>
      <div className="grid">
        {data.map(item => (
          <ItemCard key={item.id} item={item} path="capsules" />
        ))}
      </div>
    </div>
  );
}

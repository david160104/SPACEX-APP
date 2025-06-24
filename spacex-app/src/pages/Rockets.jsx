import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Rockets() {
  const { data, loading } = useFetch("rockets");

  if (loading) return <p>Cargando cohetes...</p>;

  return (
    <div>
      <h2>Cohetes</h2>
      <div className="grid">
        {data.map(item => (
          <ItemCard key={item.id} item={item} path="rockets" />
        ))}
      </div>
    </div>
  );
}

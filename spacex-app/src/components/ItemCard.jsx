// src/components/ItemCard.jsx
import { Link } from 'react-router-dom';

export default function ItemCard({ item, path }) {
  return (
    <Link to={`/${path}/${item.id}`} className="card">
      <h3>{item.name || item.full_name || item.id}</h3>
    </Link>
  );
}

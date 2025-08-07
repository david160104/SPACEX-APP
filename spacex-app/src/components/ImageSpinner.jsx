// src/components/ImageSpinner.jsx
import { useEffect, useState } from "react";

const images = [
  "/images/spinner1.jpg",
  "/images/spinner2.jpg",
  "/images/spinner3.jpg",
  "/images/spinner4.jpg",
  "/images/spinner5.jpg",
  "/images/spinner6.jpg",
  "/images/spinner7.jpg",
];

export default function ImageSpinner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-72 h-72 mx-auto mt-8 mb-12 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
      <img
        src={images[current]}
        alt={`Imagen ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
    </div>
  );
}

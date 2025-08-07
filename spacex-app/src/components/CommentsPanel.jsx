import { useState } from "react";

export default function CommentsPanel() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    if (text.trim()) {
      setComments([{ text, date: new Date().toLocaleString() }, ...comments]);
      setText("");
    }
  };

  return (
    <div className="bg-[#1a1a25] p-6 rounded-xl mt-12 shadow-lg">
      <h2 className="text-purple-400 text-xl font-bold mb-4">💬 Deja tu comentario</h2>
      <textarea
        className="w-full p-3 rounded bg-[#232334] text-white"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué opinas sobre los lanzamientos?"
      />
      <button
        onClick={addComment}
        className="mt-3 px-4 py-2 bg-purple-500 rounded hover:bg-purple-600 transition"
      >
        Publicar
      </button>

      <div className="mt-6 space-y-4">
        {comments.map((c, i) => (
          <div
            key={i}
            className="bg-[#2b2b3b] p-3 rounded shadow-inner text-sm text-gray-200"
          >
            <p>{c.text}</p>
            <span className="block text-right text-xs text-gray-400 mt-1">
              {c.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

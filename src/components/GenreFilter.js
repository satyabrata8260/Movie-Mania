import React, { useEffect, useState } from "react";
import { fetchGenres } from "../api/tmdb";

const GenreFilter = ({ onSelectGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then(setGenres);
  }, []);

  return (
    <div style={{ display: "flex", overflowX: "auto", padding: "15px 30px", gap: "10px" }}>
      {genres.map((g) => (
        <button
          key={g.id}
          style={{ padding: "8px 15px", background: "#222", border: "none", borderRadius: "20px", color: "white", cursor: "pointer" }}
          onClick={() => onSelectGenre(g.id)}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

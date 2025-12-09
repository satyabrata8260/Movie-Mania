import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const trailerUrl = movie.videos?.results?.find(v => v.type === "Trailer" && v.site === "YouTube")?.key;

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-card-overlay">
        <span>⭐ {movie.vote_average}</span>
        {trailerUrl && (
          <button onClick={(e) => { e.stopPropagation(); window.open(`https://www.youtube.com/watch?v=${trailerUrl}`, "_blank"); }}>
            Play Trailer
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;

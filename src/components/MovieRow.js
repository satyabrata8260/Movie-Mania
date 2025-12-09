import React from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => (
  <div className="movie-row">
    <h2>{title}</h2>
    <div className="movie-row-cards">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default MovieRow;

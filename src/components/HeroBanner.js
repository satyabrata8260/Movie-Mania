import React, { useEffect, useState } from "react";
import { fetchTrending, fetchMovieDetails } from "../api/tmdb";

const HeroBanner = () => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const loadHero = async () => {
      const trending = await fetchTrending();

      if (!trending || trending.length === 0) return;

      const random = trending[Math.floor(Math.random() * trending.length)];
      setMovie(random);

      const details = await fetchMovieDetails(random.id);

      const trailer = details?.videos?.results?.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };

    loadHero();
  }, []);

  if (!movie) return null;

  return (
    <div className="hero">

      {/* IF TRAILER EXISTS → SHOW VIDEO BACKGROUND */}
      {trailerKey ? (
        <iframe
          className="hero-video"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className="hero-fallback"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="Movie Background"
        />
      )}

      {/* TEXT OVERLAY */}
      <div className="hero-overlay">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default HeroBanner;

import React, { useEffect, useState } from "react";
import { fetchTrending, fetchMovieDetails } from "../api/tmdb";

const HeroBanner = () => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const loadHero = async () => {
      const trending = await fetchTrending();
      const random = trending[Math.floor(Math.random() * trending.length)];
      setMovie(random);

      const details = await fetchMovieDetails(random.id);
      const trailer = details.videos.results.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );
      if (trailer) setTrailerKey(trailer.key);
    };
    loadHero();
  }, []);

  if (!movie) return null;

  return (
    <div className="hero">
      {/* Hero background image */}
      <div
        className="hero-video"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
      />

      <div className="hero-overlay">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        {trailerKey && (
          <button onClick={() => setShowTrailer(true)}>Play Trailer</button>
        )}
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setShowTrailer(false)}
        >
          <iframe
            width="80%"
            height="80%"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Trailer"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;

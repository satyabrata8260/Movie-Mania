import React, { useEffect, useState } from "react";
import { fetchMovies, fetchMoviesByGenre } from "../api/tmdb";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    fetchMovies("popular").then(setPopular);
    fetchMovies("top_rated").then(setTopRated);
    fetchMovies("upcoming").then(setUpcoming);
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      fetchMoviesByGenre(selectedGenre).then(setGenreMovies);
    }
  }, [selectedGenre]);

  return (
    <div>
      <HeroBanner />
      <GenreFilter onSelectGenre={setSelectedGenre} />
      {selectedGenre && <MovieRow title="Selected Genre" movies={genreMovies} />}
      {popular?.length > 0 && <MovieRow title="Popular" movies={popular} />}
    {topRated?.length > 0 && <MovieRow title="Top Rated" movies={topRated} />}
    {upcoming?.length > 0 && <MovieRow title="Upcoming" movies={upcoming} />}

    </div>
  );
};

export default Home;

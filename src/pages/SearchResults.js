import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api/tmdb";
import MovieRow from "../components/MovieRow";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchMovies(query).then(setResults);
  }, [query]);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Search Results for "{query}"</h1>
      <MovieRow title="Results" movies={results} />
    </div>
  );
};

export default SearchResults;

import axios from "axios";

const API_KEY = "86ecb0fe675582af8dea05a02fa20279";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US"
  },
});

// Popular / Top Rated / Upcoming
export const fetchMovies = async (type = "popular") => {
  const res = await api.get(`/movie/${type}`);
  return res.data.results;
};

// Trending
export const fetchTrending = async () => {
  const res = await api.get(`/trending/movie/week`);
  return res.data.results;
};

// Search
export const searchMovies = async (query) => {
  const res = await api.get(`/search/movie`, {
    params: { query },
  });
  return res.data.results;
};

// Movie Details
export const fetchMovieDetails = async (id) => {
  const res = await api.get(`/movie/${id}`, {
    params: { append_to_response: "videos,credits" },
  });
  return res.data;
};

// Genres
export const fetchGenres = async () => {
  const res = await api.get("/genre/movie/list");
  return res.data.genres;
};

// Movies by Genre
export const fetchMoviesByGenre = async (genreId) => {
  const res = await api.get("/discover/movie", {
    params: {
      with_genres: genreId,
    },
  });
  return res.data.results;
};

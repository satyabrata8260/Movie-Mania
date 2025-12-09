import axios from "axios";

const API_KEY = "86ecb0fe675582af8dea05a02fa20279";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type = "popular") => {
  const res = await axios.get(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`);
  return res.data.results;
};

export const fetchTrending = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);
  return res.data;
};

export const fetchGenres = async () => {
  const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return res.data.genres;
};

export const fetchMoviesByGenre = async (genreId) => {
  const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  return res.data.results;
};

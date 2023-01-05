import axios from "axios"

const API_KEY = "your api key"
const API_URL = "https://api.themoviedb.org/3"

export const getMovieList = async () => {
    const movie = await axios.get(`${API_URL}/movie/popular?page=1&api_key=${API_KEY}`)
    return movie.data.results
} 

export const searchMovie = async (q) => {
    const search = await axios.get(`${API_URL}/search/movie?query=${q}&page=1&api_key=${API_KEY}`);
    return search.data
} 
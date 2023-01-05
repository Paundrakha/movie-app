import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const API_IMG = 'https://image.tmdb.org/t/p/w500'

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) =>{
      return (
        <div className="movie" key={i}>
          <div>
            <p>{movie.release_date}</p>
          </div>

          <div>
            <img src={`${API_IMG}/${movie.poster_path}`} alt={movie.title} />
          </div>

            <div>
              <span>{movie.vote_average}</span>
              <h3>{movie.title}</h3>
            </div>
        </div>
      )
    })
  }
  
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }



  return (
    <div className="app">
      <h1>Movie Cuy</h1>
      <div className="search">
        <input
        placeholder='cari film'
        onChange={({ target }) => search (target.value) }/>
     </div>
        <div className="container">
          <PopularMovieList />
        </div>
        <div className="empty">
        </div>
      </div>
  );
};

export default App;

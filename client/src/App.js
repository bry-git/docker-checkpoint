
import './App.css';
import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'

function App() {

  const [movies, setMovies] = useState([])
  const [directors, setDirectors] = useState([])
  const [loaded, setLoadied] = useState(false)

  const getMovies = async () => {
    await fetch('http://localhost:8080/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
  }

  const getDirectors = async () => {
    await fetch('http://localhost:8080/directors')
      .then((res) => res.json())
      .then((data) => setDirectors(data))
  }

  useEffect(() => {
    getMovies()
    getDirectors()
  }, [])

  return (
    <div className="App">
      <div className="heading"><h3>IMDB</h3></div>
      <div className="content">
        <div className="top-left">
          {movies.map((movie) => <p>{movie.movie_name}:</p>)}
        </div>
        <div className="top-right">
          {directors.map((d) => <div className="director">
          <span>{d.first_name} {d.last_name}</span>
          <span>{}</span>
          </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default App;

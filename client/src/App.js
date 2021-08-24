
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

  const handleAdd = async (event) => {
    await fetch(`http://localhost:8080/directors/`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          first_name: 'test',
          last_name: 'test',
          nationality: 'null island',
          date_of_birth: '01/01/2000'
      })
  })
  }

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
            <span>{ }</span>
          </div>
          )}
          </div>
      </div>
      <div className="add">
            <form onSubmit={handleAdd}>Add a Director<br></br>
              <input name='first_name' placeholder="director first name"></input><br></br>
              <input name='last_name' placeholder="last name"></input><br></br>
              <input name='nationality' placeholder="nationality"></input><br></br>
              <input name='date_of_birth' placeholder="date of birth"></input><br></br>
              <br></br>
              <input type="submit" className="submit"></input>
            </form>
          </div>
    </div>

  );
}

export default App;

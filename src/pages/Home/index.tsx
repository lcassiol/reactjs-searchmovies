import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import MovieCard from '../../components/MovieCard';

import { Container } from './styles';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log('Search by query:');
    console.log(query);
  }, []);

  return (
    <Container>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
          <input
            className="input"
            type="text"
            name="query"
            placeholder="i.e. Jurassic Park"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {/*
        movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
          */}
      </div>
    </Container>
  );
};

export default Home;

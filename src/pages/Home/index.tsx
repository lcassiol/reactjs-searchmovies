import React, { useState, useCallback, FormEvent } from 'react';
import ApiConfig from '../../config/movieApiConfig';
import MovieCard from '../../components/MovieCard';
import MovieInterface from '../../interfaces/IMovieInterface';

import { Container, CardList } from './styles';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [bookmarks, setBookmarks] = useState<MovieInterface[]>([]);

  const handleBookmark = useCallback(
    (id: number) => {
      let updatedBookmarks = bookmarks;
      const movieIndex = movies.findIndex((movie) => movie.id === id);
      const bookmarkIndex = updatedBookmarks.findIndex(
        (movie) => movie.id === id
      );

      if (bookmarkIndex >= 0) {
        updatedBookmarks = updatedBookmarks.filter(
          (bookmark) => bookmark.id !== id
        );
      } else {
        updatedBookmarks.push({ ...movies[movieIndex], bookmarked: true });
      }

      console.log('bookmark movie');
      console.log(updatedBookmarks);
      setBookmarks(updatedBookmarks);
    },
    [movies, bookmarks]
  );

  const searchMovies = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const url =
        `https://api.themoviedb.org/3/search/movie?` +
        `api_key=${ApiConfig.appKey}` +
        `&language=pt-BR&query=${query}&page=1&include_adult=false`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const responseMovies: MovieInterface[] = data.results;
        const markBookmarkedMovies = responseMovies.map((movie) => {
          return {
            ...movie,
            bookmarked:
              bookmarks.findIndex((bookmark) => bookmark.id === movie.id) >= 0,
          };
        });

        setMovies(markBookmarkedMovies);
      } catch (err) {
        console.error(err);
      }
    },
    [query]
  );

  return (
    <Container>
      <h1>React Typescript</h1>
      <h2>Movie Search</h2>
      <form className="form" onSubmit={searchMovies}>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="button" type="submit">
          Search
        </button>
      </form>
      <CardList>
        {movies.map((movie) => (
          <MovieCard
            handleBookmark={handleBookmark}
            movie={movie}
            key={movie.id}
          />
        ))}
      </CardList>
    </Container>
  );
};

export default Home;

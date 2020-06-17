import React, { useState, useCallback } from 'react';
import { AiFillBackward } from 'react-icons/ai';
import { useLocation, useHistory } from 'react-router-dom';
import MovieInterface from '../../interfaces/IMovieInterface';
import MovieCard from '../../components/MovieCard';
import { Container, CardList } from './styles';

const Bookmarks: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const { movies } = location.state as any;
  const [bookmarks, setBookmarks] = useState<MovieInterface[]>(movies);

  const handleBookmark = useCallback(
    (id: number) => {
      let updatedBookmarks = bookmarks;
      updatedBookmarks = updatedBookmarks.filter(
        (bookmark) => bookmark.id !== id
      );

      setBookmarks(updatedBookmarks);
    },
    [bookmarks]
  );

  const handleBackToHome = useCallback(() => {
    history.push('/', { bookmarks });
  }, [history, bookmarks]);

  return (
    <Container>
      <h1>React Typescript</h1>
      <h2>Movies Bookmark</h2>
      <button type="button" onClick={handleBackToHome}>
        <span>Back to home</span>
        <span>
          <AiFillBackward size={15} />
        </span>
      </button>
      <CardList>
        {bookmarks.map((movie) => (
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

export default Bookmarks;

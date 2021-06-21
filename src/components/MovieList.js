import "../styles/movielist.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import LoadingAnim from './LoadingAnim';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="movie-list">
        <h1>Filmler</h1>

        {loading && <LoadingAnim />}

        <div className="movies">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;

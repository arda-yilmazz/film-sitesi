import "../styles/movielist.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <div className="movie-list">
        <h1>Filmler</h1>

        <div className="movies">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;

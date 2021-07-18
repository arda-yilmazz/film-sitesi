import "../styles/movielist.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import LoadingAnim from "./LoadingAnim";

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPageHandle = (e) => {
    e.preventDefault()
    fetch(
      `${process.env.REACT_APP_ENDPOINT}top_rated?&language=tr-TR&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNumber((prev) => prev + 1);
      });
  };

  const prevPageHandle = (e) => {
    e.preventDefault()
    fetch(
      `${process.env.REACT_APP_ENDPOINT}top_rated?api_key=${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_LANGUAGE}&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNumber((prev) => prev - 1);
      });
  };

  return (
    <>
      <div className="movie-list">
        <h1>Filmler</h1>

        {!movies && <LoadingAnim />}

        <div className="movies">
          {movies &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
          <button onClick={prevPageHandle} className="pagination-button"
            disabled={pageNumber === 2 ? "disabled" : ""}
          >
            Önceki Sayfa
          </button>
          <button
            onClick={nextPageHandle}
            className="pagination-button"
            disabled={pageNumber === 443 ? "disabled" : ""}
          >
            Sonraki Sayfa
          </button>
          
        </div>
      </div>
    </>
  );
};

export default MovieList;

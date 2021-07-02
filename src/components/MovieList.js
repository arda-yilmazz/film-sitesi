import "../styles/movielist.scss";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import LoadingAnim from "./LoadingAnim";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(2)

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPageHandle = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNumber(prev => prev + 1)
        setLoading(false);
      });
  }

  const prevPageHandle = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNumber(prev => prev - 1)
        setLoading(false);
      });
  }

  return (
    <>
      <div className="movie-list">
        <h1>Filmler</h1>

        {loading && <LoadingAnim />}

        <div className="movies">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
          <button onClick={prevPageHandle} className="pagination-button" disabled={pageNumber === 2 ? 'disabled' : ''}>Önceki Sayfa</button>
          <button onClick={nextPageHandle} className="pagination-button" disabled={pageNumber === 443 ? 'disabled' : ''}>Sonraki Sayfa</button>
        </div>
      </div>
    </>
  );
};

export default MovieList;

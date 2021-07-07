/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/categorized-movie.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Movie from "./Movie";

const Categorized = () => {
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(2);
  const router = useParams();

  const nextPageHandle = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNumber((prev) => prev + 1);
        console.log(data);
      });
  };

  const prevPageHandle = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNumber((prev) => prev - 1);
      });
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${router.genreId}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <>
      <h1 className="categorized-title">İlgili Kategorideki filmler</h1>
      <div className="categorized-movies">
        {movies &&
          movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
      </div>
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
          
    </>
  );
};

export default Categorized;

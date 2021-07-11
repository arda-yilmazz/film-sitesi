/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/search-results.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Movie from "./Movie";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  const { value } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&query=${value}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results));
    }, 100);
  }, []);

  const prevPageHandle = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&query=${value}&page=${pageNumber}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setPageNumber(pageNumber - 1);
      });
  };

  const nextPageHandle = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&query=${value}&page=${pageNumber}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setPageNumber(pageNumber + 1);
      });
  };

  return (
    <>
      <div className="search-results">
        <h1>"{value}" ile ilgili filmler</h1>

        {!results && results.length === 0 && (
            <div key="1" className="not-found">Burada bir şey bulamadık :(</div>
        )}

        {!results && "yükleniyor az bekle"}

        <div className="search-result-list">
          {results && results.map((movie) => <Movie movie={movie} />)}
        </div>
      </div>

      <div className="buttons">
        {!results && (
          <>
            <button
              onClick={prevPageHandle}
              className="pagination-button"
              disabled={pageNumber === 2 ? "disabled" : ""}
            >
              Önceki Sayfa
            </button>
            <button
              onClick={nextPageHandle}
              className="pagination-button"
              disabled={pageNumber === results.length ? "disabled" : ""}
            >
              Sonraki Sayfa
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default SearchResults;

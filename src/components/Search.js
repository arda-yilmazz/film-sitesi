/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/search-form.scss";
import { useState, useEffect, useRef } from "react";

const Search = ({ search, setSearch }) => {
  const [results, setResults] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      search ?
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&query=${search}&page=1&include_adult=false`
        )
          .then((res) => res.json())
          .then((data) => setResults(data.results)) : setResults([])
    }, 500); 
  }, [search]);

  useEffect(() => {
    const clickHandleOutside = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setSearch("");
        setResults([]);
      }
    };

    document.addEventListener("click", clickHandleOutside);
  }, []);

  return (
    <>
      <div className="search" ref={searchRef}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Aramak istediğiniz filmin ismini girin"
        />

        {results && (
          <div className="search-result">
            {results.map((movie) => (
              <a
                href={`/filmler/film/${movie.id}`}
                key={movie.id}
                className="search-result-item"
              >
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <div className="title">{movie.title}</div>
                  <div className="data"></div>
                </div>
              </a>
            ))}
          </div>
        )}
        {results.length === 0 && search && (
          <div className="not-found">burada bir şey yok</div>
        )}
      </div>
    </>
  );
};

export default Search;

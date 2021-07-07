/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/genres.scss'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Categories = () => {
  const [genres, setGenres] = useState();
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres));
  }, []);

  return (
    <>
      <div className="genres-container">
        {genres &&
          genres.map((genre) => (
            <Link to={`/kategoriler/kategori/${genre.id}`} className="genre-container" key={genre.id}>
              <div className="genre-title">{genre.name}</div>
              <p className="genre-description">
                "{genre.name}" kategorisindeki filmler.
              </p>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Categories;

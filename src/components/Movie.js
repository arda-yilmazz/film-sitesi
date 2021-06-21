import '../styles/moviepage.scss'
import { Link } from "react-router-dom"; 

const Movie = ({movie}) => {
  return (
    <>
      <div className="movie">
          <Link
            to={`/filmler/film/${movie.id}`}
            className="movie"
            key={movie.id}
          >
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="title">{movie.title}</div>
          </Link>
      </div>
    </>
  );
};

export default Movie;

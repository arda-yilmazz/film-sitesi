import '../styles/moviepage.scss'
import { Link } from "react-router-dom";

const SimilarMovies = ({similars}) => {
  return (
    <>
    <h1>Bu filme benzeyen filmlere bakmak ister misin?</h1>
      <div className="similar-movies">
        {similars.map((movie) => (
          <Link to="/" className="similar-movie" key={movie.id}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="title">{movie.title}</div>
          </Link>
        ))}
        {similars.length === 0 && (
          <div className="not-found">Benzer Film Bulunmamaktadır!</div>
        )} 
      </div>
    </>
  );
};

export default SimilarMovies;

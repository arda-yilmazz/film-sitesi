import '../styles/moviepage.scss'

const MovieInfo = ({movie}) => {
  return (
    <>
      <div className="movie-info">
        <div className="movie-image">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
        <div className="info">
          <div className="description">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo

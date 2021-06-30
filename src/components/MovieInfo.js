import "../styles/moviepage.scss";

const MovieInfo = ({ movie }) => {
  return (
    <>
      <div className="movie-info">
        <span className="release-date">
          Yayınlanma tarihi: {movie.release_date}
        </span>
        <div className="movie-detail">
          <div className="movie-image">
            <img
              src={
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}` ||
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
              }
              alt={movie.title}
            />
          </div>
          <div className="info">
            <div>
              {movie.overview ? (
                <p className="description">{movie.overview}</p>
              ) : (
                <span className="not-found-overview">
                  Maalesef burada bir şey yok :(
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;

import { useState, useEffect } from "react";
import Recommendations from "./Recommendations";
import MovieInfo from "./MovieInfo";
import SimilarMovies from "./SimilarMovies";

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [similars, setSimilars] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Get Details
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));

    //Get Similar Movies
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setSimilars(data.results));

    //Get Recommendations
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TRS&page=1`
    )
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div className="movie-page">
          <div className="moviea">
            <h1>{movie.title}</h1>
            <MovieInfo movie={movie} />
            <div className="bar"></div>
            <SimilarMovies similars={similars} />
          </div>

          <Recommendations
            recommendations={recommendations}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
    </>
  );
};

export default MoviePage;

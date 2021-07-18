import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieInfo from "./MovieInfo";
import Recommendations from "./Recommendations";
import SimilarMovies from "./SimilarMovies";

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [similars, setSimilars] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const router = useParams();

  useEffect(() => {
    // Get Details
    fetch(
      `https://api.themoviedb.org/3/movie/${router.id}?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));

    //Get Similar Movies
    fetch(
      `https://api.themoviedb.org/3/movie/${router.id}/similar?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setSimilars(data.results));

    //Get Recommendations
    fetch(
      `https://api.themoviedb.org/3/movie/${router.id}/recommendations?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div className="movie-page">
          <div className="movie">
            <h1>{movie.title}</h1>
            <MovieInfo movie={movie} />
            <div className="movie-genres">
            <h3>Bu filmin içerdiği türler</h3>
              {movie.genres &&
                movie.genres.map((item) => (
                  <div className="genres">
                    <p key={item.id} className="genre">
                      {item.name}
                    </p>
                  </div>
                ))}
            </div>
            <SimilarMovies similars={similars} />
          </div>

          <Recommendations recommendations={recommendations} />
        </div>
      </div>
    </>
  );
};

export default MoviePage;

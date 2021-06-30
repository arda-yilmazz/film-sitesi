import "../styles/home.scss";
import 'swiper/swiper.scss';
import { useState, useEffect } from "react";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";

const PlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setNowPlayingMovies(data.results));
  }, []);

  return (
    <>
      <div className="playing-movies-container">
        <h3>Şuan Gösterimde Olan Filmler</h3>
        <Swiper className="movies" slidesPerView={10}>
            {nowPlayingMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                  <Movie movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default PlayingMovies;

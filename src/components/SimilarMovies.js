import "../styles/moviepage.scss";
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from "swiper/react";

const SimilarMovies = ({ similars }) => {
  return (
    <>
      <h1 style={{ margin: "20px" }} className="h1">
        Bu filme benzeyen filmlere bakmak ister misin?
      </h1>
      <div className="moviea">
        <Swiper slidesPerView={window.innerWidth < 700 ? 1 : 4} className="similar-movies">
          {similars.map((movie) => (
            <SwiperSlide key={movie.id} className="movie-container">
              <a
                href={`/filmler/film/${movie.id}`}
                className="similar-movie"
                key={movie.id}
              >
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="title">{movie.title}</div>
              </a>
            </SwiperSlide>
          ))}
          {similars.length === 0 && (
            <div className="not-found">Benzer Film Bulunmamaktadır!</div>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default SimilarMovies;

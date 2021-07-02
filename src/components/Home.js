import "../styles/home.scss";
import PlayingMovies from "./NowPlayingMovies";
import UpcomingMovies from "./UpcomingMovies";


const Home = () => {
  return (
    <>
      <PlayingMovies />

      <UpcomingMovies />
    </>
  );
};

export default Home;

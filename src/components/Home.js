import "../styles/home.scss";
import PlayingMovies from "./NowPlayingMovies";
import UpcomingMovies from "./UpcomingMovies";
import Latest from "./Latest";


const Home = () => {
  return (
    <>
      <Latest />

      <PlayingMovies />

      <UpcomingMovies />
    </>
  );
};

export default Home;

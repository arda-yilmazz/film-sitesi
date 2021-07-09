import "../styles/home.scss";
import PlayingMovies from "./NowPlayingMovies";
import UpcomingMovies from "./UpcomingMovies";


const Home = () => {
  return (
    <div className="home-container">
      <PlayingMovies />

      <UpcomingMovies />
    </div>
  );
};

export default Home;

import '../styles/home.scss'
import PlayingMovies from './NowPlayingMovies'
import UpcomingMovies from './UpcomingMovies'

const Home = () => {

    return (
        <>
            <h1>HOME PAGE</h1>

            <PlayingMovies />

            <UpcomingMovies />

        </>
    )
}

export default Home
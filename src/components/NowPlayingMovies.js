import '../styles/home.scss'
import { useState, useEffect } from 'react'
import Movie from './Movie'

const PlayingMovies = () => {
    
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setNowPlayingMovies(data.results))
    }, [])

    
    return (
        <>
        
            <div className="playing-movies-container">
                <h3>Şuan Gösterimde Olan Filmler</h3>
                <div className="movies">
                    {nowPlayingMovies.map(movie => (
                        <div className="movie" key={movie.id}>
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PlayingMovies
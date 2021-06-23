import { useState, useEffect } from 'react'
import Movie from './Movie'

const UpcomingMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US&page=1`)
                .then(res => res.json())
                .then(data => setMovies(data.results))
    }, [])

    return (
        <>
            <div className="upcoming-movies-container">
                <h3>Yakında Yayınlanması Beklenen Filmler</h3>
                <div className="movies">
                    {movies.map(movie => (
                        <div key={movie.id} className="movie-container">
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UpcomingMovies
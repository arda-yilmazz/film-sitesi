import '../styles/reacommendations.scss'

const Recommendations = ({recommendations, active}) => {
    console.log(window.innerHeight)
    return (
        <div className={`reacommendations-movies ${active ? 'active' : ''}`}>
            <ul>
                <h3>Bu filme baktığına göre bunlarda ilgini çekebilir</h3>
                {recommendations.map(movie => (
                    <li key={movie.id}>
                        <a href={`/filmler/film/${movie.id}`}>
                            {movie.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recommendations
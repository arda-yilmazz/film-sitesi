import "../styles/reacommendations.scss";

const Recommendations = ({ recommendations }) => {
  return (
    <div className="reacommendations-movies">
      <ul>
        <h3>Bu filme baktığına göre bunlarda ilgini çekebilir</h3>
        {recommendations.map((movie) => (
          <li key={movie.id}>
            <a href={`/filmler/film/${movie.id}`}>{movie.title}</a>
          </li>
        ))}
        {recommendations.length === 0 && (
          <div key="1" className="not-found">Burada bir şey bulamadık :(</div>
        )}
      </ul>
    </div>
  );
};

export default Recommendations;

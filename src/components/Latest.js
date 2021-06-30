import "../styles/latest.scss";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Latest = () => {
  const [latest, setLatest] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/latest?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="latest-movie">
        <div className="left">
          <Link to={`/filmler/film/${latest.id}`}>{latest.name}</Link>
          <div className="image">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${latest.poster_path}`}
              alt={latest.name}
            />
          </div>
        </div>
      </div>
      <div className="right"></div>
    </>
  );
};

export default Latest;

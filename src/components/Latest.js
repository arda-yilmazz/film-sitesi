import { useState, useEffect } from "react";

const Latest = () => {
  const [latest, setLatest] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/latest?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => {
        setLatest(data)
        console.log(data)
      });
  }, []);

  return (
    <>
        <h1>{latest.original_name}</h1>

        <div className="summary">
            {latest.overview}
        </div>
    </>
  );
};

export default Latest;

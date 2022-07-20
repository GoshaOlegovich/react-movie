import React, { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import styles from "./assets/styles/movies_info.module.scss";

const MovieInfo = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const imgLink = "https://image.tmdb.org/t/p/w500/";
  const apiKey = "07602740c6143bd90fdda953d093314b";
  

  function getData(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ru-RU)`
    )
      .then((response) => response.json())

      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("error", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData(props.id);
  }, [props.id]);

  if (loading) return "loading..";
  if (error) return "error..";

  return (
    <div className={styles.movieinfo}>
      <div className={styles.movieinfo__poster}>
        <img src={imgLink + data.poster_path} alt={data.title} />
      </div>
      <div className={styles.movieinfo__description}>
        <div>
          <h3 className={styles.movieinfo__title}>{data.title}</h3>
          <p className={styles.movieinfo__tagline}>{data.tagline}</p>
         
        </div>
        <div>
          <p className={styles.movieinfo__overview}>{data.overview}</p>
          <p className={styles.movieinfo__release}>
            Release: {data.release_date}
          </p>
        </div>
      <Link to='/'>
      <button className={styles.movieinfo__button} onClick={() => console.log("close")}>Back</button>
      </Link>
     
      </div>

    </div>
  );
};

export default MovieInfo;

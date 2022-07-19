import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviePost from "./MoviePost";
import styles from "./assets/styles/movies.module.scss";

const apiKey = "07602740c6143bd90fdda953d093314b";
const popular = "api.themoviedb.org/3/movie/popular";
const url = "https://image.tmdb.org/t/p/w500";

const MoviesList = (props) => {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  
  useEffect(() => {
    if (fetching) {
      console.log('fetching');
      axios
        .get(`https://${popular}?api_key=${apiKey}&page=${currentPage}`)
        .then((response) => {
          setMovies([...movies, ...response.data.results]); 
          setCurrentPage((prevState) => prevState + 1);

        })
        .finally(() => setFetching(false))
    }
  }, [fetching, movies, currentPage]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if ( 
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <ul className={styles.movies__list}>
      {movies.map((item) => {
        return (
          <MoviePost
            item={item}
            backdrop_path={item.backdrop}
            link={"/" + item.id}
            id={item.id}
            key={item.id}
            title={item.title}
            posterUrl={url + item.poster_path}
            // updateData={updateData}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;

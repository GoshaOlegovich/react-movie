import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviePost from "./MoviePost";
import styles from "./assets/styles/movies.module.scss";
import moviesArr from './moviesArr'
export const imgUrl = "https://image.tmdb.org/t/p/w500";

const MoviesList = (props) => {
  const [loading, setLoading] = useState(true);

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "07602740c6143bd90fdda953d093314b",
          page: 1,
        },
      })
      .then((data) => {
        const results = data.data.results;
        let index = 0;
        for (let i = 0; i < results.length; i++) {
          index++;
          let obj = {
            id: results[i].id,
            index: index,
            title: results[i].original_title,
            poster: results[i].poster_path,
            backdrop: results[i].backdrop_path,
            liked: false,
          };
          moviesArr.push(obj);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  });

  const selected = (data) => {
    props.updateId(data);
  };

  const updateData = (data) => {
    selected(data);
  };

  if (loading) return "Loading...";

  return (
    <ul className={styles.movies__list}>
      {moviesArr.map((item) => {
        return (
          <MoviePost
            item={item}
            backdrop_path={item.backdrop}
            link={"/" + item.id}
            id={item.id}
            title={item.title}
            posterUrl={imgUrl + item.poster}
            updateData={updateData}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;

import React, { useEffect, useState } from "react";
import MoviePost from "./MoviePost";
import styles from "./assets/styles/movies.module.scss";


const imgUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = "07602740c6143bd90fdda953d093314b";
const popular = "api.themoviedb.org/3/movie/popular";
const page = 1;
const MoviesList = (props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  function getArray() {
    fetch(`https://${popular}?api_key=${apiKey}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results)
      })
      .catch((error) => {
        console.error("Error", error);
        setError(error);
      })
      .finally(() => {
        
        setLoading(false)
      });
  }

  useEffect(() => {
   getArray()
  }, [])

  const selected = (data) =>{
    props.updateId(data)
  }

  const updateData = (data) => {
    console.log('Data:' + data);
    selected(data)
  }

  
 
  if (loading) return "Loading...";
  if (error) return "ERROR";


  return (
    <ul className={styles.movies__list}>
      {data.map((item) => {
        return (
          <MoviePost
            id={item.id}
            key={item.id}
            index={item.id}
            title={item.original_title}
            posterUrl={imgUrl + item.poster_path}
            updateData={updateData}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;

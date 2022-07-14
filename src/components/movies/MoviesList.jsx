import React, { useEffect, useState } from "react";
import MoviePost from "./MoviePost";
import styles from "./assets/styles/movies.module.scss";


export const imgUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = "07602740c6143bd90fdda953d093314b";
const popular = "api.themoviedb.org/3/movie/popular";
const page = 1;

const resultsArr = []

const MoviesList = (props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  function getArray() {
    fetch(`https://${popular}?api_key=${apiKey}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results
       
        for (let i = 0; i < results.length; i++) {
          let obj =
            {
              id: results[i].id,
              title: results[i].original_title,
              poster: results[i].poster_path,
              backdrop: results[i].backdrop_path,
              liked: false,
            }
            resultsArr.push(obj)
        }
        
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
    selected(data)
  }

  
 
  if (loading) return "Loading...";
  if (error) return "ERROR";


  return (
    <ul className={styles.movies__list}>
      {resultsArr.map((item) => {
        return (
          <MoviePost
            item={item}
            backdrop_path={item.backdrop}
            link={'/'+ item.id}
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

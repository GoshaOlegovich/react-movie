import React, { useState } from "react";
import styles from "./assets/styles/movies.module.scss";

import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import { Link } from "react-router-dom";


export const likeMovies = []


const MoviePost = (props) => {
  // const [movieId, setMovieId] = useState('')
  const [like, setLike] = useState(styles.like);
  
  const likeMovie = (id) => {
 
    if(like === styles.like) {
      setLike(styles.likeIt)
      likeMovies.push(
        {
          id: props.id,
          title: props.title,
          img: props.backdrop_path
        }
      )
      console.log(likeMovies);
    } else {
      setLike(styles.like)
    }
  }

  return (
    <div className={styles.movie}>
      <Link
        to={`movie${props.link}`}
        
        key={props}
        onClick={() => props.updateData(props.id)}
        className={styles.movie__poster}
      >
        <img src={props.posterUrl} alt={props.title} />
      </Link>
      <div className={styles.movie__panel}>
        <h3 className={styles.movie__title}>{props.title}</h3>
        <IonIcon
          icon={heart}
          onClick={() => likeMovie(props.id)}
          className={like}
        />
      </div>
    </div>
  );
};

export default MoviePost;

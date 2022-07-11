import React, { useState } from "react";
import styles from "./assets/styles/movies.module.scss";

import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import { Link } from "react-router-dom";

export const favoriteArr = [];

let likeClass = styles.like;

const MoviePost = (props) => {
  // const [movieId, setMovieId] = useState('')
  const [like, setLike] = useState(false);

  const likeMovie = (id) => {
    setLike(!like);

    if (like) {
      setLike(!like);
      likeClass = styles.likeIt;
      console.log(`I like it id: ${id}`);
    }
    if (!like) {
      likeClass = styles.like;
      console.log(`I DONT it id: ${id}`);
    }
  };

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
          className={likeClass}
        />
      </div>
    </div>
  );
};

export default MoviePost;

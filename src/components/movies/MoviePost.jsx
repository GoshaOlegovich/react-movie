import React from "react";
import styles from "./assets/styles/movies.module.scss";

import { Link } from "react-router-dom";
import LikeBtn from "../elements/buttons/LikeBtn";



const MoviePost = (props) => {


  return (
    <div key={props.id} className={styles.movie}>
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
        <LikeBtn id={props.id} obj={props.item}/>
      </div>
    </div>
  );
};

export default MoviePost;

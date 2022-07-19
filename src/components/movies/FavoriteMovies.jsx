import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./assets/styles/favorite.module.scss";


const FavoriteMovies = () => {
  let localArr = JSON.parse(localStorage.getItem("moviesArr"))

  const [liked, setLiked] = useState([])
  useEffect(() => {
    setLiked(localArr)
  },[localArr])
  
  const filtred = liked.filter((item) => item.liked === true);
 
  
  
  return (
    <ul className={styles.favorite}>
      {filtred.map((el) => {
        return (
          <Link to={"/movie/" + el.id} className={styles.favorite__item}>
            <div className={styles.favorite__poster}>
              <img src={el.backdrop} alt={el.title} />
            </div>
            <div className={styles.favorite__title_wrapp}>
              <h3 className={styles.favorite__title}>{el.title}</h3>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default FavoriteMovies;

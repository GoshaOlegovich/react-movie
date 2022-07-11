import React from "react";
import { Link } from "react-router-dom";
import styles from "./assets/styles/favorite.module.scss";
import { likeMovies } from "./MoviePost";
import { imgUrl } from "./MoviesList";

const FavoriteMovies = () => {
  return (
    <ul className={styles.favorite}>
      {likeMovies.map((el) => {
        return (
          <Link to={"/movie/" +el.id}className={styles.favorite__item}>
            <div className={styles.favorite__poster}>
              <img src={imgUrl + el.img} alt={el.title} />
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

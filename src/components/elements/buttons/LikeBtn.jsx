import React, { useState } from "react";
import styles from "./buttons.module.scss";
import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";

const LikeBtn = (props) => {
  const [like, setLike] = useState(!props.obj);
  const obj = props.obj;


  const handleLiked = (id) => {
    const AxiosMovies = JSON.parse(localStorage.getItem("AxiosMovies"));
    if (like === false) {
      setLike(true);
      obj.liked = true;

      const findMovie = AxiosMovies.find((item) => item.id === obj.id);
      const indexMovie = AxiosMovies.indexOf(findMovie);
      AxiosMovies.splice(indexMovie, 1, obj);

      localStorage.setItem("AxiosMovies", JSON.stringify(AxiosMovies));
    }
    if (like === true) {
      setLike(false);
      obj.liked = false;

      const findMovie = AxiosMovies.find((item) => item.id === obj.id);
      const indexMovie = AxiosMovies.indexOf(findMovie);
      AxiosMovies.splice(indexMovie, 1, obj);

      localStorage.setItem("AxiosMovies", JSON.stringify(AxiosMovies));
    }
  };

  return (
    <IonIcon
      icon={heart}
      onClick={() => handleLiked(props.id)}
      className={`${like ? styles.likeIt : styles.like}`}
    />
  );
};

export default LikeBtn;

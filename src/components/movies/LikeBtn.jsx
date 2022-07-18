import React, { useState } from "react";
import styles from "./assets/styles/movies.module.scss";
import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import moviesArr from "./moviesArr";

export const likedArr = [];

const arrSplice = (id) => {
  let findItem = moviesArr.find((item) => item.id === id);
  let searchIndex = moviesArr.indexOf(findItem);
  moviesArr.splice(searchIndex, findItem);
  console.log(moviesArr);
};

const LikeBtn = (props) => {
  const [like, setLike] = useState(!props.obj);
  const obj = props.obj;
  const handleLiked = (id) => {
    if (like === false) {
      setLike(true);
      obj.liked = true;
      likedArr.push(obj);

      arrSplice(id);
    }
    if (like === true) {
      setLike(false);
      obj.liked = false;
      arrSplice(id);
    }
    if (like === true && id === id) {
      obj.liked = false;
      setLike(false);
      let searchId = likedArr.find((item) => item.id === id);
      let searchIndex = likedArr.indexOf(searchId);
      likedArr.splice(searchIndex, 1);
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

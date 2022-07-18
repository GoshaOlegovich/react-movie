import React, { useState, useEffect } from "react";
import styles from "./assets/styles/movies.module.scss";
import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import moviesArr from "./moviesArr";





const LikeBtn = (props) => {
  const [like, setLike] = useState(!props.obj);
  const obj = props.obj;
  
  const checkLike = () => {
    if (obj.liked === true) {
      setLike(true);
    } else if (obj.liked === false) {
      setLike(false);
    }
  }
  useEffect(() => {
    checkLike()
  })


  const arrSplice = (id) => {
    let findItem = moviesArr.find((item) => item.id === id);
    let searchIndex = moviesArr.indexOf(findItem);
    moviesArr.splice(searchIndex, findItem);
    console.log(moviesArr);
  };

const handleLiked = (id) => {
    if (like === false) {
      setLike(true);
      obj.liked = true;
      arrSplice(id);
      localStorage.setItem("moviesArr", JSON.stringify(moviesArr));
    }
    if (like === true) {
      setLike(false);
      obj.liked = false;
      arrSplice(id);
      localStorage.setItem("moviesArr", JSON.stringify(moviesArr));
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

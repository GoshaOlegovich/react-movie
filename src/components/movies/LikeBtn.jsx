import React, { useState } from "react";
import styles from "./assets/styles/movies.module.scss";
import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";

export const likedArr = []



const LikeBtn = (props) => {
  const [like, setLike] = useState(!props.obj);
  const obj = props.obj
  const handleLiked = (id) => {
   
    if (like === false) {
      setLike(true);
      obj.liked = true
      console.log(obj);
     
    } if (like === true) {
        setLike(false)
        obj.liked = false
        console.log(obj);
    } if (like === true && id === id) {
        // let searchId = likedArr.find(item => item.id === id)
        // likedArr.splice(searchId.index - 1, 1)
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

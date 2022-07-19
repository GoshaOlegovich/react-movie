import React, { useState } from "react";
import styles from "./buttons.module.scss";
import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";






const LikeBtn = (props) => {
  const [like, setLike] = useState(!props.obj);
  const obj = props.obj;
  
  

const handleLiked = (id) => {
    if (like === false) {
      setLike(true);
      obj.liked = true;
     
    }
    if (like === true) {
      setLike(false);
      obj.liked = false;
      
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

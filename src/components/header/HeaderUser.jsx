import React from 'react';
import styles from './assets/styles/header.module.scss'
import { IonIcon } from "@ionic/react";
import { personCircle, caretDownOutline } from "ionicons/icons";

const HeaderUser = (props) => {



return (
    <div className={styles.header__user}>
                <IonIcon className={styles.header__user_icon} icon={personCircle}/>
                <span className={styles.header__user_name}>{props.name}</span>
                <IonIcon className={styles.header__user_btn} icon={caretDownOutline} />
            </div>
)
}

export default HeaderUser
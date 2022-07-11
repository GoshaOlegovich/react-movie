import React from 'react';
import { Link } from "react-router-dom";
import styles from './assets/styles/header.module.scss'
import logo from './assets/image/logo.svg'
import menu from './menu.js'
import HeaderUser from './HeaderUser';



const Header = () => {
    let userName = 'WebIngvarr'
    
    return (
        <div className={styles.header} key='31221'>
           
            <nav className={styles.header__menu}>
            <img className={styles.header__logo} src={logo} alt="" />
            {
                menu.map(item => {
                    return (
                        <Link key={item.id} className={styles.header__link} to={item.link}>{item.title}</Link>
                    )
                })
            }
            </nav>
            <HeaderUser name={userName}/>
        </div>
    )
}

export default Header
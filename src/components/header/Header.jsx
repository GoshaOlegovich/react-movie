import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../elements/Logo';
import styles from './header.module.scss'


import HeaderUser from './HeaderUser';



const Header = () => {
    let userName = 'WebIngvarr'
    
    return (
        <div className={styles.header} key='31221'>
         
            <nav className={styles.header__menu}>
            <Logo />
            <Link className={styles.header__link} to='/'>Main</Link>
            </nav>
            <HeaderUser name={userName}/>
        </div>
    )
}

export default Header
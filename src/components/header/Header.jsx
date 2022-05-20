import React from 'react';

import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth}) => {
    return (
            <header className={styles.header}>
                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width={55}  height={55} alt=""/>
                <div className={styles.loginBlock}>
                    {isAuth ? <span>{login}</span> : <NavLink to='/login'>Login</NavLink>}
                </div>
            </header>
    );
};

export default Header;

import React from 'react';

import styles from './NavBar.module.css'
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div >
                <NavLink
                    style={({isActive}) => {return {color: isActive ? 'goldenrod' : ''}}}
                    to='/profile'
                >Profile</NavLink>
            </div>
            <div>
                <NavLink
                    to='/messages'
                    style={({isActive}) => {return {color: isActive ? 'goldenrod' : ''}}}
                >Messages</NavLink>
            </div>
            <div>
                <NavLink
                    to='/users'
                    style={({isActive}) => {return {color: isActive ? 'goldenrod' : ''}}}
                >Users</NavLink>
            </div>
            <div>
                <NavLink
                    to='/login'
                    style={({isActive}) => {return {color: isActive ? 'goldenrod' : ''}}}
                >Login</NavLink>
            </div>
            <div>
                <NavLink
                    to='/settings'
                    style={({isActive}) => {return {color: isActive ? 'goldenrod' : ''}}}
                >Settings</NavLink>
            </div>

        </nav>
    );
};

export default NavBar;

import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../messages/Messages.module.css";

const Dialog = ({id, name, active}) => {
    return (
        <div>
            <NavLink to={`/messages/${id}`} className={active && `${styles.dialog} ${styles.active}`}>
                {name}
            </NavLink>
        </div>
    );
};

export default Dialog;

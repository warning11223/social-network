import React from 'react';
import styles from "../messages/Messages.module.css";

const Message = ({text}) => {
    return (
        <div className={styles.message}>
            {text}
        </div>
    );
};

export default Message;

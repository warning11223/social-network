import React from 'react';
import avatar from '../../img/avatar.png'

import styles from './Post.module.css'

const Post = ({text, likesCount, dislikesCount}) => {
    return (
        <div>
            <img src={avatar} height={45} width={45} alt="user-avatar"/>
            {text}
            <div>
                <span>like {likesCount} </span>
                <span>dislike {dislikesCount}</span>
            </div>
        </div>
    );
};

export default Post;

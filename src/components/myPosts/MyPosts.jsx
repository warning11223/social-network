import React, {useEffect} from 'react';

import styles from './MyPosts.module.css'
import Post from "../post/Post";
import {useDispatch, useSelector} from "react-redux";
import {addPost, changeTextarea} from "../../redux/actions";

const MyPosts = () => {
    let { postsData, value } = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();



    const textareaHandler = (e) => {
        dispatch(changeTextarea(e.target.value));
    }

    const addPostHandler = () => {
        dispatch(addPost(value))
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={styles.textarea}>
                <textarea name="" id="" cols="30" rows="6" value={value} onChange={e => textareaHandler(e)} placeholder='Write a new post...'></textarea> <br/>
                <button onClick={addPostHandler}>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                {
                    postsData.map(item => <Post key={item.id} text={item.text} likesCount={item.likesCount} dislikesCount={item.dislikesCount}/>)
                }
            </div>
        </div>
    );
};

export default MyPosts;

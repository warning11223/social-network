import React from 'react';
import avatar from "../../img/user.png";

import styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

const Users = ({
                   users,
                   followUser,
                   unfollowUser,
                   totalUsers,
                   pageSize,
                   currentPage,
                   onChangeCurrentPage,
                   isButtonFollowing,
                   setButtonFollow,
                   followUserThunk,
                   unfollowUserThunk,
        }) => {
    const unfollowHandler = id => (unfollowUserThunk(id));

    const followHandler = id => (followUserThunk(id));


    return (
        <div>
            <Paginator
                totalUsers={totalUsers}
                pageSize={pageSize}
                currentPage={currentPage}
                onChangeCurrentPage={onChangeCurrentPage}
            />


            {
                users.map(item => {
                    return <div key={item.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + item.id}>
                                    <img src={!item.photos.small && avatar} width={70} height={70} alt="user.png"/>
                                </NavLink>
                            </div>
                            <div>
                                {item.followed
                                    ? <button disabled={isButtonFollowing.some(value => value === item.id)} onClick={ () => unfollowHandler(item.id) }>Unfollow</button>
                                    : <button disabled={isButtonFollowing.some(value => value === item.id)}  onClick={ () => followHandler(item.id) }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                            </span>
                            <span>
                                <div>{"item.country"}</div>
                                <div>{"item.city"}</div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    );
};



export default Users;

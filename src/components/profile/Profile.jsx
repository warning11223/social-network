import React from 'react';

import styles from './Profile.module.css'
import MyPosts from "../myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../preloader/Preloader";

const Profile = ({ profile, status, updateUserStatusThunk, isOwner, savePhoto}) => {
    if(!profile) {
        return <Preloader />
    }
    return (
        <div >
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatusThunk={updateUserStatusThunk}
                savePhoto={savePhoto}
            />
            <MyPosts />
        </div>

    );
};

export default Profile;

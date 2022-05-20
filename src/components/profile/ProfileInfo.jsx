import React from 'react';
import styles from "./Profile.module.css";
import Status from "./Status";
import noAvatar from '../../img/avatar.png'


const ProfileInfo = ({profile, status, updateUserStatusThunk, isOwner, savePhoto}) => {

    const savePhotoInput = e => {
        savePhoto(e.target.files[0]);
    }

    return (
        <>
            <div>
                <img src="https://cdn.checkyeti.com/images/original/Surfing+%28c%29+Shutterstock.jpg" width={500} height={300} alt="logotype"/>
            </div>
            <div className={styles.profile}>
                <div>
                    <img src={profile.photos.large || noAvatar} width={200} height={200} alt="avatar"/>
                    {isOwner && <input type="file" onChange={savePhotoInput}/>}
                    <Status status={status} updateUserStatusThunk={updateUserStatusThunk}/>
                   <ProfileData profile={profile}/>
                </div>
            </div>
        </>
    );
};

const ProfileData = ({profile}) => {
    return (
        <>
            <div>
                {profile.aboutMe && <i><b>About me: {profile.aboutMe}</b></i>}
            </div>
            <div>
                <i><b>Looking for a job: </b></i>{profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                {profile.lookingForAJob && profile.lookingForAJobDescription && <i><b>Skills: {profile.lookingForAJob}</b></i>}
            </div>
            <div>
                {profile.contacts && <i><b>Contacts: {Object.keys(profile.contacts).map(item => {
                    return <Contacts  key={item} contactTitle={item} contactValue={profile.contacts[item]}/>
                })}</b></i>}
            </div>
        </>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div style={{marginLeft: 15}}><b>{contactTitle}</b> — {contactValue}</div>
}

export default ProfileInfo;

import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileUser} from "../../redux/actions";
import {useParams, Navigate} from "react-router-dom";
import {getUserProfileThunk, getUserStatusThunk, savePhotoThunk, updateUserStatusThunk} from "../../redux/thunks";
import { RedirectComponent } from "../../hoc/RedirectComponent";

const ProfileContainer = (props) => {

    const params = useParams();
    let id = params['*'];


    useEffect(() => {
        if (!id) id = 23955;
        props.getUserProfileThunk(id);
        props.getUserStatusThunk(id);
    }, [id])


    return <Profile
        profile={props.profile}
        status={props.status}
        updateUserStatusThunk={props.updateUserStatusThunk}
        isOwner={!id}
        savePhoto={props.savePhotoThunk}
    />
};

const RedirectHOC = RedirectComponent(ProfileContainer);

const mapStateToProps = state => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth,
        status: state.profileReducer.status,
    }
}

export default connect(mapStateToProps, {
    setProfileUser,
    getUserProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk,
    savePhotoThunk
})(RedirectHOC);

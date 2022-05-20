import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setLoginUser} from "../../redux/actions";
import {getAuthMeThunk} from "../../redux/thunks";



const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthMeThunk();
    }, [])

    return <Header isAuth={props.isAuth} login={props.login}/>
};

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
    }
}

export default connect(mapStateToProps, {
    setLoginUser,
    getAuthMeThunk,
})(HeaderContainer);

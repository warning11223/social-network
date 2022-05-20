import React from 'react';
import {Navigate} from "react-router-dom";

export const RedirectComponent = (Component) => {
    const Redirect = (props) => {
        /*if (!props.isAuth) {
            return <Navigate to='/login' />
        }*/

        return <Component {...props}/>
    }
    return Redirect;
};


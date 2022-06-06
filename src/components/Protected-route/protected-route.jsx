import React, { useEffect, useState } from 'react';
import {Route, Redirect, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../utils/Api";
import { getCookie } from "../../utils/cookie";
import PropTypes from "prop-types";

export const ProtectedRoute = ({onlyUnAuth, children, ...rest }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const isUser = useSelector((state => state.userReducer.isUser));
    const isToken = getCookie("accessToken");
    const [ isUserLoaded, setUserLoaded ] = useState(false);

    const init = () => {
        dispatch(getUser());
        setUserLoaded(true);
    };

    useEffect(() => {
        init()
    }, []);

    if (!isUserLoaded) {
        return null;
    }

    if (!isUser
        && !isToken
        && location.pathname !== '/login'
        && location.pathname !== '/register'
        && location.pathname !== '/forgot-password'
        && location.pathname !== '/reset-password') {
        return (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location },
                }}
            />
        );
    }

    if (onlyUnAuth && isUser) {
        const { from } = location.state || { from: { pathname: '/' } }
        return <Redirect to={ from } />
    }
    return <Route {...rest} render={({ location }) => children} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    rest: PropTypes.object,
    onlyUnAuth: PropTypes.bool
}
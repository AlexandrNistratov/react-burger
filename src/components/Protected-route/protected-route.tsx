import React, { useEffect, useState, FC } from 'react';
import { Route, Redirect, useLocation, RouteProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../utils/Api";
import { getCookie } from "../../utils/cookie";
import { Location } from 'history';

type TProtectedRoute = {
    onlyUnAuth?: boolean;
    children?: React.ReactNode;
    rest?: {};
} &  RouteProps

export const ProtectedRoute: FC<TProtectedRoute> = ({ onlyUnAuth, children, ...rest }) => {
    const location = useLocation<{ from: Location}>();
    const dispatch = useDispatch();

    // TODO типизировать на следующем спринте
    const isUser = useSelector(((state: any) => state.userReducer.isUser));

    const isToken = getCookie("accessToken");
    const [ isUserLoaded, setUserLoaded ] = useState(false);

    const init = () => {
        if(isUser) {
            dispatch(getUser())
        }
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
    return <Route {...rest} render={({ location }) =><>{children}</>} />;
};

import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../utils/Api";
import { getCookie } from "../../utils/cookie";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const isUser = useSelector((state => state.userReducer.isUser));
    const isToken = getCookie("accessToken");
    const [ isUserLoaded, setUserLoaded ] = useState(false);

    const init = async () => {
        await dispatch(getUser());
        setUserLoaded(true);
    };

    useEffect(() => {
        init()
            .catch(err => console.log(err))
    }, []);

    if (!isUserLoaded) {
        return null;
    }

    if (!isUser && !isToken) {
        return (
            <Route
                {...rest}
                render={({ location }) => (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )}
            />
        );
    }

    ProtectedRoute.propTypes ={
        children: PropTypes.node.isRequired,
        rest: PropTypes.object
    }

    return <Route {...rest} render={({ location }) => children} />;
};
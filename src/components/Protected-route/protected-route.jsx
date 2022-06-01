import React, { useEffect, useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../utils/Api";
import { getCookie } from "../../utils/cookie";

export const ProtectedRoute = ({ children, ...rest }) => {
    const isUser = useSelector((state => state.user.isUser));
    const isToken = getCookie("accessToken");
    const [ isUserLoaded, setUserLoaded ] = useState(false);

    const init = async () => {
        await getUser();
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

    return <Route {...rest} render={({ location }) => children} />;
};
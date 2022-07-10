import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import styles from './profile.module.css';
import FormProfile from "../../components/UI/FormProfile/FormProfile";
import OrdersHistory from "../OrdersHistory/OrdersHistory";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import { ProtectedRoute } from "../../components/Protected-route/protected-route";

const Profile: FC = () => {

    return (
        <div className={ styles.main }>
            <ProfileNav />
            <Switch>
                <ProtectedRoute path='/profile' exact>
                    <FormProfile />
                </ProtectedRoute>
                <ProtectedRoute path='/profile/orders' exact>
                    <OrdersHistory />
                </ProtectedRoute>
            </Switch>
        </div>
    );
};

export default Profile;
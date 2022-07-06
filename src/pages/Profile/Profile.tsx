import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import styles from './profile.module.css';
import FormProfile from "../../components/UI/FormProfile/FormProfile";
import OrdersHistory from "../OrdersHistory/OrdersHistory";
import ProfileNav from "../../components/App/ProfileNav/ProfileNav";

const Profile: FC = () => {
    return (
        <div className={ styles.main }>
            <ProfileNav />
            <Switch>
                <Route path='/profile' exact>
                    <FormProfile />
                </Route>
                <Route path='/profile/orders'>
                    <OrdersHistory />
                </Route>
            </Switch>
        </div>
    );
};

export default Profile;
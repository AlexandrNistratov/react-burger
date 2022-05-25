import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import styles from './profile.module.css';
import clsx from "clsx";
import FormProfile from "../../components/UI/FormProfile/FormProfile";

const Profile = () => {

    const location = useLocation();
    const isProfile = location.pathname === '/profile';

    return (
        <div className={ styles.main }>
            <div className={ styles.navigation}>
                <NavLink exact to='/profile' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>Профиль</NavLink>
                <NavLink exact to='/profile/orders' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>История заказов</NavLink>
                <NavLink exact to='/' className={ clsx(styles.link,'text_type_main-medium text_color_inactive') } activeClassName={ styles.link_active }>Выход</NavLink>
            </div>
            {isProfile ? <FormProfile /> : null}
        </div>
    );
};

export default Profile;
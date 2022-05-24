import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './profile.module.css';
import clsx from "clsx";

const Profile = () => {
    return (
        <div className={ styles.main }>
            <div className={ styles.navigation}>
                <NavLink exact to='/profile' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>Профиль</NavLink>
                <NavLink exact to='/profile/orders' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>История заказов</NavLink>
                <NavLink exact to='/profile/orders/:id' className={ clsx(styles.link,'text_type_main-medium text_color_inactive') } activeClassName={ styles.link_active }>Выход</NavLink>
            </div>
            
        </div>
    );
};

export default Profile;
import React, { FC } from 'react';
import styles from "./profileNav.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useDispatch } from '../../../types';
import {clearIngredientsActions} from "../../../services/actions/constructorActions";
import {logOutAction} from "../../../services/actions/userActions";
import {logOut} from "../../../utils/Api";

const ProfileNav: FC= () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(clearIngredientsActions())
        dispatch(logOutAction());
        logOut();
    }

    return (
        <div className={ styles.main }>
            <NavLink exact to='/profile' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>Профиль</NavLink>
            <NavLink exact to='/profile/orders' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>История заказов</NavLink>
            <NavLink exact to='/login' className={ clsx(styles.link,'text_type_main-medium text_color_inactive') } activeClassName={ styles.link_active } onClick={ handleLogOut }>Выход</NavLink>
        </div>
    );
};

export default ProfileNav;
import React from 'react';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import styles from './profile.module.css';
import clsx from "clsx";
import FormProfile from "../../components/UI/FormProfile/FormProfile";
import { logOut } from "../../utils/Api";
import { logOutAction } from "../../services/actions/login";
import { useSelector, useDispatch } from "react-redux";
import {getCookie} from "../../utils/cookie";

const Profile = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const isProfile = location.pathname === '/profile';
    const data = useSelector(state => state.login.form)
    const da = useSelector(state => state.login)
    console.log(da)



    const handleLogOut = () => {
        dispatch(logOutAction())
        const qwe = getCookie('accessToken');
        console.log(qwe)
        logOut(data.token);
    }

    return (
        <div className={ styles.main }>
            <div className={ styles.navigation}>
                <NavLink exact to='/profile' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>Профиль</NavLink>
                <NavLink exact to='/profile/orders' className={ clsx(styles.link,'text_type_main-medium text_color_inactive mb-5') } activeClassName={ styles.link_active }>История заказов</NavLink>
                <NavLink exact to='/login' className={ clsx(styles.link,'text_type_main-medium text_color_inactive') } activeClassName={ styles.link_active } onClick={ handleLogOut }>Выход</NavLink>
            </div>
            {isProfile ? <FormProfile /> : null}
        </div>
    );
};

export default Profile;
import React from 'react';
import styles from './appHeader.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from "clsx";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const AppHeader = () => {
    const user = useSelector(state => state.userReducer)
    const { isAuth, isUser } = user;
    return (
        <section className={ styles.main }>
            <div className={ styles.main__wrapper }>
                <div className={ styles.wrapper }>
                    <nav className={ styles.nav }>
                        <Link to='/' className={ clsx(styles.item, 'mr-2') }>
                            <BurgerIcon type="primary" />
                            <p className={ clsx(styles.text, 'text text_type_main-default ml-2') }>Конструктор</p>
                        </Link>
                        <a href='#' className={ styles.item }>
                            <ListIcon type="secondary" />
                            <p className={ clsx('text text_type_main-default ml-2 text_color_inactive') }>Лента заказов</p>
                        </a>
                    </nav>
                    <Logo />
                </div>
                <Link to='/profile' className={ styles.item }>
                    <ProfileIcon type="secondary" />
                    <p className={ clsx('text text_type_main-default ml-2 text_color_inactive') }>{isAuth && isUser ? user.user.name : 'Личный кабинет'}</p>
                </Link>
            </div>
        </section>
    );
};

export default AppHeader;
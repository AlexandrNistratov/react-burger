import React from 'react';
import appHeaderStyles from './appHeader.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <section className={appHeaderStyles.main}>
            <div className={appHeaderStyles.main__wrapper}>
                <div className={appHeaderStyles.wrapper}>
                    <nav className={appHeaderStyles.nav}>
                        <a href='#' className={`${appHeaderStyles.item} mr-2`}>
                            <BurgerIcon type="primary" />
                            <p className={`text text_type_main-default ml-2 ${appHeaderStyles.text}`}>Конструктор</p>
                        </a>
                        <a href='#' className={appHeaderStyles.item}>
                            <ListIcon type="secondary" />
                            <p className={`text text_type_main-default ml-2 ${appHeaderStyles.text_purple}`}>Лента заказов</p>
                        </a>
                    </nav>
                    <Logo />
                </div>
                <a href='#' className={appHeaderStyles.item}>
                    <ProfileIcon type="secondary" />
                    <p className={`text text_type_main-default ml-2 ${appHeaderStyles.text_purple}`}>Личный кабинет</p>
                </a>
            </div>
        </section>
    );
};

export default AppHeader;
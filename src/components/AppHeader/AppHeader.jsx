import React from 'react';
import styles from './appHeader.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <section className={styles.main}>
            <div className={styles.main__wrapper}>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        <a href='#' className={`${styles.item} mr-2`}>
                            <BurgerIcon type="primary" />
                            <p className={`text text_type_main-default ml-2 ${styles.text}`}>Конструктор</p>
                        </a>
                        <a href='#' className={styles.item}>
                            <ListIcon type="secondary" />
                            <p className={`text text_type_main-default ml-2 ${styles.text_purple}`}>Лента заказов</p>
                        </a>
                    </nav>
                    <Logo />
                </div>
                <a href='#' className={styles.item}>
                    <ProfileIcon type="secondary" />
                    <p className={`text text_type_main-default ml-2 ${styles.text_purple}`}>Личный кабинет</p>
                </a>
            </div>
        </section>
    );
};

export default AppHeader;
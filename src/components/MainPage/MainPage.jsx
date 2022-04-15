import React from 'react';
import styles from './mainPage.module.css';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";


const MainPage = () => {
    return (
        <section className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
        </section>
    );
};

export default MainPage;
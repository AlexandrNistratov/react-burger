import React from 'react';
import mainPageStyles from './mainPage.module.css';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";


const MainPage = () => {
    return (
        <section className={mainPageStyles.main}>
            <BurgerIngredients />
        </section>
    );
};

export default MainPage;
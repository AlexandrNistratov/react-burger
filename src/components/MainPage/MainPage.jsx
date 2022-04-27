import React, {useState} from 'react';
import styles from './mainPage.module.css';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {dataPropTypes} from "../../utils/proptypes";
import PropTypes from "prop-types";

const MainPage = () => {
    return (
        <section className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
        </section>
    );
};

export default MainPage;
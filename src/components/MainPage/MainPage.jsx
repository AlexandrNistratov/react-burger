import React from 'react';
import styles from './mainPage.module.css';
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {dataPropTypes} from "../../utils/proptypes";
import PropTypes from "prop-types";

const MainPage = ({ data }) => {
    return (
        <section className={styles.main}>
            <BurgerIngredients data={ data }/>
            <BurgerConstructor data={ data } />
        </section>
    );
};

MainPage.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes.isRequired)
}

export default MainPage;
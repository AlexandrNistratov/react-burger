import React from 'react';
import PropTypes from "prop-types";
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsList from "../IngredientsList/IngredientsList";
import {dataPropTypes} from "../../utils/proptypes";

const BurgerIngredients = ({ data, isOpen, toggleModal }) => {
    const [current, setCurrent] = React.useState('Булки')
    return (
        <section className={styles.main}>
            <h1 className={`${styles.text} text text_type_main-large`}>Соберите бургер</h1>
            <div className={styles.tab}>
                <Tab active={current === 'Булки'} value='Булки' onClick={setCurrent}>Булки</Tab>
                <Tab active={current === 'Соусы'} value='Соусы' onClick={setCurrent}>Соусы</Tab>
                <Tab active={current === 'Начинки'} value='Начинки' onClick={setCurrent}>Начинки</Tab>
            </div>
            <IngredientsList data={ data } />
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
}

export default BurgerIngredients;
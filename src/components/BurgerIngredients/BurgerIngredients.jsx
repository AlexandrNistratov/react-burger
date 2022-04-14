import React from 'react';
import ingredientsStyles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsList from "../IngredientsList/IngredientsList";

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('Булки')
    return (
        <section className={ingredientsStyles.main}>
            <h1 className={`${ingredientsStyles.text} text text_type_main-large`}>Соберите бургер</h1>
            <div className={ingredientsStyles.tab}>
                <Tab active={current === 'Булки'} value='Булки' onClick={setCurrent}>Булки</Tab>
                <Tab active={current === 'Соусы'} value='Соусы' onClick={setCurrent}>Соусы</Tab>
                <Tab active={current === 'Начинки'} value='Начинки' onClick={setCurrent}>Начинки</Tab>
            </div>
            <IngredientsList />
        </section>
    );
};

export default BurgerIngredients;
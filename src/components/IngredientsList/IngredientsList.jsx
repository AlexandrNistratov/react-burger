import React from 'react';
import ingredientsListStyles from './ingredientsList.module.css';
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import {data} from "../../utils/data";

const IngredientsList = () => {
    const buns = data.filter(item => item.type === 'bun');
    const sauce = data.filter(item => item.type === 'sauce');
    const main = data.filter(item => item.type === 'main');
    return (
        <section className={ingredientsListStyles.main}>
            <h2 className={`${ingredientsListStyles.subtitle} text_type_main-large`}>Булки</h2>
            <ul className={ingredientsListStyles.ulList}>
                {buns.map(item => <IngredientsItem data={item} key={item._id}/>)}
            </ul>
            <h2 className={`${ingredientsListStyles.subtitle} text_type_main-large`}>Соусы</h2>
            <ul className={ingredientsListStyles.ulList}>
                {sauce.map(item => <IngredientsItem data={item} key={item._id}/>)}
            </ul>
            <h2 className={`${ingredientsListStyles.subtitle} text_type_main-large`}>Начинки</h2>
            <ul className={ingredientsListStyles.ulList}>
                {main.map(item => <IngredientsItem data={item} key={item._id}/>)}
            </ul>
        </section>
    );
};

export default IngredientsList;
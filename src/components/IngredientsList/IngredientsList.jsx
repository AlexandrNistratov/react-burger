import React from 'react';
import styles from './ingredientsList.module.css';
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import {data} from "../../utils/data";

const IngredientsList = () => {
    const buns = data.filter(item => item.type === 'bun');
    const sauce = data.filter(item => item.type === 'sauce');
    const main = data.filter(item => item.type === 'main');
    return (
        <section className={styles.main}>
            <h2 className={`${styles.subtitle} text_type_main-large`}>Булки</h2>
            <ul className={styles.ulList}>
                {buns.map(item => <IngredientsItem data={item} key={item._id}/>)}
            </ul>
            <h2 className={`${styles.subtitle} text_type_main-large`}>Соусы</h2>
            <ul className={styles.ulList}>
                {sauce.map(item => <IngredientsItem data={item} key={item._id}/>)}
            </ul>
            <h2 className={`${styles.subtitle} text_type_main-large`}>Начинки</h2>
            <ul className={styles.ulList}>
                {main.map(item => <IngredientsItem data={item} key={item._id}/>)}
            </ul>
        </section>
    );
};

export default IngredientsList;
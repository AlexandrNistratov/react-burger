import React, { useContext } from 'react';
import styles from './ingredientsList.module.css';
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import clsx from "clsx";
import { IngredientsContext } from "../../context/IngredientsContext";

const IngredientsList = ({ onClick }) => {
    const ingredients = useContext(IngredientsContext);

    const buns = ingredients.filter(item => item.type === 'bun');
    const sauce = ingredients.filter(item => item.type === 'sauce');
    const main = ingredients.filter(item => item.type === 'main');

    return (
        <>
            <section className={ styles.main }>
                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>Булки</h2>
                <ul className={ styles.ulList }>
                    {buns.map(item => <IngredientsItem data={ item }
                                                       key={ item._id } onClick={ onClick }/>)}
                </ul>
                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>Соусы</h2>
                <ul className={ styles.ulList }>
                    {sauce.map(item => <IngredientsItem data={ item }
                                                        key={ item._id } onClick={ onClick }/>)}
                </ul>
                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>Начинки</h2>
                <ul className={ styles.ulList }>
                    {main.map(item => <IngredientsItem data={ item }
                                                       key={ item._id } onClick={ onClick }/>)}
                </ul>
            </section>
        </>
    );
};

export default IngredientsList;
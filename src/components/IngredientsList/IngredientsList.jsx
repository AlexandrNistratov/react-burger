import React from 'react';
import PropTypes from "prop-types";
import styles from './ingredientsList.module.css';
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import { dataPropTypes } from "../../utils/proptypes";
import clsx from "clsx";

const IngredientsList = ({ data, onClick }) => {
    const buns = data.filter(item => item.type === 'bun');
    const sauce = data.filter(item => item.type === 'sauce');
    const main = data.filter(item => item.type === 'main');

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

IngredientsList.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
}

export default IngredientsList;
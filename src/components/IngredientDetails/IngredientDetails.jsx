import React from 'react';
import styles from './ingredientDetails.module.css';
import clsx from "clsx";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
    const ingredients = useSelector(state => state.details.ingredientsDetails);
    const { image, name, calories, proteins, fat, carbohydrates } = ingredients;

    return (
        <section className={ styles.main }>
            <img className={ styles.img } src={ image } alt="Картинка ингридиента"/>
            <p className={ clsx(styles.name, 'text_type_main-medium') }>{ name }</p>
            <div className={ styles.energyValue }>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Калории,ккал</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ calories }</p>
                </div>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Белки, г</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ proteins }</p>
                </div>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Жиры, г</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ fat }</p>
                </div>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Углеводы, г</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ carbohydrates }</p>
                </div>
            </div>
        </section>
    );
};

export default IngredientDetails;
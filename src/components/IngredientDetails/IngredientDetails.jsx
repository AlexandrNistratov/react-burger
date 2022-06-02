import React from 'react';
import styles from './ingredientDetails.module.css';
import clsx from "clsx";
import { useSelector } from "react-redux";

const IngredientDetails = ({ details }) => {
    const ingredients = useSelector(state => state.details.ingredientsDetails);
    const { image, name, calories, proteins, fat, carbohydrates } = ingredients;

    return (
        <section className={ styles.main }>
            <img className={ styles.img } src={ image || details?.image } alt="Картинка ингридиента"/>
            <p className={ clsx(styles.name, 'text_type_main-medium') }>{ name || details?.name }</p>
            <div className={ styles.energyValue }>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Калории,ккал</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ calories || details?.calories }</p>
                </div>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Белки, г</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ proteins || details?.proteins }</p>
                </div>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Жиры, г</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ fat || details?.fat }</p>
                </div>
                <div className={ styles.block }>
                    <p className={ clsx(styles.text, 'text_type_main-default') }>Углеводы, г</p>
                    <p className={ clsx(styles.value, 'text_type_digits-default') }>{ carbohydrates || details?.carbohydrates }</p>
                </div>
            </div>
        </section>
    );
};

export default IngredientDetails;
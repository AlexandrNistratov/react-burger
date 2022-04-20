import React from 'react';
import styles from './ingredientDetails.module.css';

const IngredientDetails = ({data}) => {
    return (
        <section className={styles.main}>
            <img className={styles.img} src={data.image} alt="Картинка ингридиента"/>
            <p className={`${styles.name} text_type_main-medium `}>{data.name}</p>
            <div className={styles.energyValue}>
                <div className={styles.block}>
                    <p className={`${styles.text} text_type_main-default`}>Калории,ккал</p>
                    <p className={`${styles.value} text_type_digits-default`}>{data.calories}</p>
                </div>
                <div className={styles.block}>
                    <p className={`${styles.text} text_type_main-default`}>Белки, г</p>
                    <p className={`${styles.value} text_type_digits-default`}>{data.proteins}</p>
                </div>
                <div className={styles.block}>
                    <p className={`${styles.text} text_type_main-default`}>Жиры, г</p>
                    <p className={`${styles.value} text_type_digits-default`}>{data.fat}</p>
                </div>
                <div className={styles.block}>
                    <p className={`${styles.text} text_type_main-default`}>Углеводы, г</p>
                    <p className={`${styles.value} text_type_digits-default`}>{data.carbohydrates}</p>
                </div>
            </div>

        </section>
    );
};

export default IngredientDetails;
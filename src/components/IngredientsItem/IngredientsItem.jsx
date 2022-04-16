import React from 'react';
import styles from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import {dataPropTypes} from "../../utils/proptypes";

const IngredientsItem = ({data}) => {
    return (
        <li className={styles.main}>
            <img src={data.image} alt="Картинка ингридиента"/>
            <div className={styles.main__price}>
                <p className={`text_type_digits-default ${styles.price}`}>{data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text_type_main-default ${styles.name}`}>{data.name}</p>
            <Counter count={1} size="default" />
        </li>
    );
};

IngredientsItem.propTypes = {
    data: dataPropTypes.isRequired
}

export default IngredientsItem;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsItem = ({data}) => {
    return (
        <li className={styles.main}>
            <img src={data.image} alt="Картинка"/>
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
    data: PropTypes.shape({
        image: PropTypes.string,
        price: PropTypes.number,
        name: PropTypes.string
    })
}

export default IngredientsItem;
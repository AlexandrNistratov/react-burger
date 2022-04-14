import React from 'react';
import ingredientsItemStyle from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsItem = ({data}) => {
    return (
        <li className={ingredientsItemStyle.main}>
            <img src={data.image} alt="Картинка"/>
            <div className={ingredientsItemStyle.main__price}>
                <p className={`text_type_digits-default ${ingredientsItemStyle.price}`}>{data.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text_type_main-default ${ingredientsItemStyle.name}`}>{data.name}</p>
            <Counter count={1} size="default" />
        </li>
    );
};

export default IngredientsItem;
import React from 'react';
import styles from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataPropTypes } from "../../utils/proptypes";
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

const IngredientsItem = ({ data, onClick }) => {
   const { closePopupEsc } = useModal();

   const { image, price, name, _id } = data;

   const [, ref] = useDrag({
       type: 'ingredients',
       item: data
   });


    const allItems = useSelector( state => [state.constructorData.bun, state.constructorData.bun, ...state.constructorData.ingredients]);

    //Счетчик добавленных ингредиентов
    const count = allItems.filter(item => item?._id === _id).length

    return (
        <>
            <li className={ styles.main } onClick={() => onClick(data)} onKeyDown={ closePopupEsc } ref={ ref }>
                <img className={ styles.img } src={ image } alt="Картинка ингридиента"/>
                <div className={ styles.main__price }>
                    <p className={ clsx(styles.price, 'text_type_digits-default') }>{ price }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={ clsx(styles.name, 'text_type_main-default') }>{ name }</p>
                { count > 0 && <Counter count={ count } size="default" />}
            </li>
        </>
    );
};

IngredientsItem.propTypes = {
    data: dataPropTypes.isRequired
}

export default IngredientsItem;
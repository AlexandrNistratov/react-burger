import React from 'react';
import styles from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataPropTypes } from "../../utils/proptypes";
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";
import { useDrag } from "react-dnd";

const IngredientsItem = ({ data, onClick }) => {
   const { closePopupEsc } = useModal();

   const [, ref] = useDrag({
       type: 'ingredients',
       item: data
   });

    return (
        <>
            <li className={ styles.main } onClick={() => onClick(data)} onKeyDown={ closePopupEsc } ref={ ref }>
                <img className={ styles.img } src={ data.image } alt="Картинка ингридиента"/>
                <div className={ styles.main__price }>
                    <p className={ clsx(styles.price, 'text_type_digits-default') }>{ data.price }</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={ clsx(styles.name, 'text_type_main-default') }>{ data.name }</p>
                <Counter count={ 1 } size="default" />
            </li>
        </>
    );
};

IngredientsItem.propTypes = {
    data: dataPropTypes.isRequired
}

export default IngredientsItem;
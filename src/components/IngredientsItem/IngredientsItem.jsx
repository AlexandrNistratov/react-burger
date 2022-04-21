import React from 'react';
import styles from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import {dataPropTypes} from "../../utils/proptypes";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";

const IngredientsItem = ({ data }) => {
   const { isOpen, closePopupEsc, closePopup, openPopup} = useModal();

    return (
        <>
            <li className={styles.main} onClick={openPopup} onKeyDown={closePopupEsc}>
                <img className={styles.img} src={data.image} alt="Картинка ингридиента"/>
                <div className={styles.main__price}>
                    <p className={clsx(styles.price, 'text_type_digits-default')}>{data.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={clsx(styles.name, 'text_type_main-default')}>{data.name}</p>
                <Counter count={1} size="default" />
            </li>
            {isOpen &&
                <Modal isOpen={isOpen}
                       closePopup={closePopup}
                       header='Детали ингредиента'>
                    <IngredientDetails data={data}/>
                </Modal>}
        </>
    );
};

IngredientsItem.propTypes = {
    data: dataPropTypes.isRequired
}

export default IngredientsItem;
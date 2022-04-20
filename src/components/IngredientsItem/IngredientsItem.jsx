import React, {useState} from 'react';
import styles from './ingredientsItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import {dataPropTypes} from "../../utils/proptypes";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const IngredientsItem = ({ data }) => {
    //Открытие/закрытие модалок
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {setIsOpen(!isOpen)}
    return (
        <>
            <li className={styles.main} onClick={toggleModal}>
                <img src={data.image} alt="Картинка ингридиента"/>
                <div className={styles.main__price}>
                    <p className={`text_type_digits-default ${styles.price}`}>{data.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text_type_main-default ${styles.name}`}>{data.name}</p>
                <Counter count={1} size="default" />
            </li>
            <Modal isOpen={isOpen}
                   toggleModal={toggleModal}
                   header='Детали ингредиента'>
                <IngredientDetails data={data}/>
            </Modal>
        </>
    );
};

IngredientsItem.propTypes = {
    data: dataPropTypes.isRequired
}

export default IngredientsItem;
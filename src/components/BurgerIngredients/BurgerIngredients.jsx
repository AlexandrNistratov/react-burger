import React, { useState } from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsList from "../IngredientsList/IngredientsList";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useModal } from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { getDetailsAction, deleteDetailsAction } from "../../services/reducers";

const BurgerIngredients = () => {
    const { isOpen, closePopup, openPopup} = useModal();
    const [ current, setCurrent ] = useState('Булки');

    const dispatch = useDispatch();

    const clickIngredients = (item) => {
        dispatch(getDetailsAction(item));
        openPopup();
    }

    const closeModalDetails = () => {
        dispatch(deleteDetailsAction());
        closePopup();
    }

    return (
        <section className={ styles.main }>
            <h1 className={ clsx(styles.text, 'text text_type_main-large') }>Соберите бургер</h1>
            <div className={styles.tab}>
                <Tab active={ current === 'Булки' } value='Булки' onClick={ setCurrent }>Булки</Tab>
                <Tab active={ current === 'Соусы' } value='Соусы' onClick={ setCurrent }>Соусы</Tab>
                <Tab active={ current === 'Начинки' } value='Начинки' onClick={ setCurrent }>Начинки</Tab>
            </div>
            <IngredientsList onClick={ clickIngredients }/>
            {isOpen &&
                <Modal isOpen={ isOpen }
                       closePopup={ closeModalDetails }
                       header='Детали ингредиента'>
                    <IngredientDetails />
                </Modal>}
        </section>
    );
};


export default BurgerIngredients;
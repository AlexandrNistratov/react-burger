import React, { useState } from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsList from "../IngredientsList/IngredientsList";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useModal } from "../../hooks/useModal";

const BurgerIngredients = () => {
    const { isOpen, closePopup, openPopup} = useModal();
    const [ current, setCurrent ] = useState('Булки');
    const [ detail, setDetail] = useState({});



    const clickIngredients = (item) => {
        setDetail(item);
        openPopup();
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
                       closePopup={ closePopup }
                       header='Детали ингредиента'>
                    <IngredientDetails ingredients={ detail }/>
                </Modal>}
        </section>
    );
};


export default BurgerIngredients;
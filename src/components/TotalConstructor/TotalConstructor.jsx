import React, { useEffect, useState } from 'react';
import  styles from './totalConstructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { getOrders } from "../../utils/Api";
import { useDispatch, useSelector } from "react-redux";


const TotalConstructor = () => {
    const [ totalPrice, setTotalPrice ] = useState(0)
    const dispatch = useDispatch();

    const { bun, ingredients } = useSelector(state => state.constructorData)

    const allItems = useSelector( state => [state.constructorData.bun, state.constructorData.bun, ...state.constructorData.ingredients]);

    //Айдишки элементов в конструкторе
    const arrIdIngredients = allItems.map((item) => item?._id);

    //Модалка с номером заказа
    const openOrderModal = () => {
        arrIdIngredients &&
        dispatch(getOrders(arrIdIngredients))
        openPopup();
    };

    // Считаем сумму заказа
    const calculateTotalPrice = (buns, arr) => {
        const priceBuns = Number(buns?.price * 2);
        const sum = arr?.reduce((acc, item) => {
            return Number(acc + item?.price)
        }, 0)
        buns && arr && setTotalPrice(sum + priceBuns)
    }

    useEffect(() => {
        calculateTotalPrice(bun, ingredients)
    }, )


    const { isOpen, openPopup, closePopup, closePopupEsc } = useModal();
    return (
        <section className={ styles.main } onKeyDown={ closePopupEsc }>
            <div className={ styles.wrapper }>
               <p className={ clsx(styles.sum, 'text_type_digits-medium') }>{ totalPrice }</p>
                <div className={ styles.icon} >
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <div className={ styles.button }>
                <Button size='large' type='primary' onClick={ openOrderModal }>Оформить заказ</Button>
            </div>
            {isOpen &&
                < Modal isOpen={ isOpen } closePopup={ closePopup }>
                    <OrderDetails />
                </Modal>}
        </section>
    );
};

TotalConstructor.propTypes = {
    // totalPrice: PropTypes.number.isRequired,
    // arrIdIngredients: PropTypes.array.isRequired
}

export default TotalConstructor;
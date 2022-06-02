import React, { useEffect, useState } from 'react';
import  styles from './totalConstructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { getOrders } from "../../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const TotalConstructor = () => {
    const [ totalPrice, setTotalPrice ] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();

    const { bun, ingredients } = useSelector(state => state.constructorData);

    const allItems = useSelector( state => [state.constructorData.bun, state.constructorData.bun, ...state.constructorData.ingredients]);
    const isAuth = useSelector(state => state.login.isAuth)

    //Айдишки элементов в конструкторе
    const arrIdIngredients = allItems.map((item) => item?._id);

    //Модалка с номером заказа
    const openOrderModal = () => {
        if(!isAuth) {
            arrIdIngredients &&
            dispatch(getOrders(arrIdIngredients))
            history.push('login')
        }
        openPopup();
    };

    // Считаем сумму заказа
    const calculateTotalPrice = (buns, arr) => {
        const priceBuns = Number(buns?.price * 2);
        const sum = arr?.reduce((acc, item) => {
            return Number(acc + item?.price)
        }, 0)
        if (buns && arr) {
            setTotalPrice(sum + priceBuns)
        } else if (buns) {
            setTotalPrice(priceBuns) }
        else {
            setTotalPrice(sum)}
    }


    useEffect(() => {
        calculateTotalPrice(bun, ingredients);
    }, [ bun, ingredients])

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
                    <Button onClick={ openOrderModal } disabled={ !bun }>Оформить заказ</Button>
                </div>
            {isOpen &&
                < Modal isOpen={ isOpen } closePopup={ closePopup }>
                    <OrderDetails />
                </Modal>}
        </section>
    );
};

export default TotalConstructor;
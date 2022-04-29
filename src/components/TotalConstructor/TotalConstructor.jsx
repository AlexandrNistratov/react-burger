import React, { useState, useEffect } from 'react';
import  styles from './totalConstructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import { getOrders } from "../../utils/Api";

const TotalConstructor = ({ totalPrice, arrIdIngredients }) => {
    const [ orders, setOrders ] = useState(null);

    const openOrderDetails = () => {
        arrIdIngredients &&
        getOrders(arrIdIngredients)
            .then(res => {
                setOrders(res);
                openPopup();
            })
            .catch(err => console.log(err));
    };

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
                <Button size='large' type='primary' onClick={ openOrderDetails }>Оформить заказ</Button>
            </div>
            {isOpen &&
                < Modal isOpen={ isOpen } closePopup={ closePopup }>
                    <OrderDetails orders={ orders }/>
                </Modal>}
        </section>
    );
};

TotalConstructor.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    arrIdIngredients: PropTypes.array.isRequired
}

export default TotalConstructor;
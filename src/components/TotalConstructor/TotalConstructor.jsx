import React from 'react';
import  styles from './totalConstructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

const TotalConstructor = () => {
    const { isOpen, openPopup, closePopup, closePopupEsc } = useModal();
    return (
        <section className={ styles.main } onKeyDown={ closePopupEsc }>
            <div className={ styles.wrapper }>
               <p className={ clsx(styles.sum, 'text_type_digits-medium') }>610</p>
                <div className={ styles.icon} >
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <div className={ styles.button }>
                <Button size='large' type='primary' onClick={ openPopup }>Оформить заказ</Button>
            </div>
            {isOpen &&
                < Modal isOpen={ isOpen } closePopup={ closePopup }>
                    <OrderDetails />
                </Modal>}
        </section>
    );
};

export default TotalConstructor;
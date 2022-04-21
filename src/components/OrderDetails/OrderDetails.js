import React from 'react';
import styles from './orderDetails.module.css';
import clsx from "clsx";
import img from '../../images/graphics.svg';

const OrderDetails = () => {
    return (
        <section className={styles.main}>
            <h1 className={clsx(styles.header, 'text_type_digits-large ')}>034536</h1>
            <h2 className={clsx(styles.subtitle, 'text_type_main-medium')}>идентификатор заказа</h2>
            <img src={img} alt="Картинка"/>
            <p className={clsx(styles.readiness, 'text_type_main-default')}>Ваш заказ начали готовить</p>
            <p className={clsx(styles.text, 'text_type_main-default text_color_inactive')}>Дождитесь готовности на орбитальной станции</p>
        </section>
    );
};

export default OrderDetails;
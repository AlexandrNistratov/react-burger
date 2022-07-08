import React, { FC } from 'react';
import styles from './orderDetails.module.css';
import clsx from "clsx";
import img from '../../images/graphics.svg';
import Icon from "../Icon/Icon";
import { useSelector } from '../../types';

const OrderDetails: FC = () => {
    const { ordersNumberRequest, ordersNumberFailed, ordersNumber } = useSelector(state => state.numberOrder);


    return (
        <section className={ styles.main }>
            {
                ordersNumberRequest ? <p className={ clsx(styles.subtitle, 'text_type_main-medium') }>Загрузка..</p> :
                    ordersNumber ? <h1 className={ clsx(styles.header, 'text_type_digits-large ') }>{ ordersNumber?.order.number }</h1> :
                        ordersNumberFailed ? <p className={ clsx(styles.subtitle, 'text_type_main-medium') }>Ошибка</p> : null
            }
            <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>идентификатор заказа</h2>
            <Icon icon={ img }/>
            <p className={ clsx(styles.readiness, 'text_type_main-default') }>Ваш заказ начали готовить</p>
            <p className={ clsx(styles.text, 'text_type_main-default text_color_inactive') }>Дождитесь готовности на орбитальной станции</p>
        </section>
    );
};

export default OrderDetails;
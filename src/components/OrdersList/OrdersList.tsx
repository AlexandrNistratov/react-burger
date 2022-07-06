import React, { FC } from 'react';
import styles from './ordersList.module.css';
import OrdersItem from "../OrdersItem/OrdersItem";

const OrdersList: FC = () => {
    return (
        <section className={ styles.main }>
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
            <OrdersItem />
        </section>
    );
};

export default OrdersList;
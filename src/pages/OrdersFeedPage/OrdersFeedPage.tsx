import React, { FC } from 'react';
import styles from './ordersFeedPage.module.css';
import clsx from "clsx";
import TotalFeedOrders from "../../components/TotalFeedOrders/TotalFeedOrders";
import OrdersList from "../../components/OrdersList/OrdersList";

const OrdersFeedPage: FC = () => {
    return (
        <section className={ styles.main }>
            <h1 className={ clsx(styles.header, 'text text_type_main-large') }>Лента заказов</h1>
            <div className={ styles.content }>
                <OrdersList />
                <TotalFeedOrders />
            </div>
        </section>
    );
};

export default OrdersFeedPage;
import React, { FC } from 'react';
import styles from './ordersFeedPage.module.css';
import FeedOrders from "../../components/FeedOrders/FeedOrders";
import clsx from "clsx";
import TotalFeedOrders from "../../components/TotalFeedOrders/TotalFeedOrders";

const OrdersFeedPage: FC = () => {
    return (
        <section className={ styles.main }>
            <h1 className={ clsx(styles.header, 'text text_type_main-large') }>Лента заказов</h1>
            <div className={ styles.content }>
                <FeedOrders />
                <TotalFeedOrders />
            </div>
        </section>
    );
};

export default OrdersFeedPage;
import React, { FC } from 'react';
import styles from './feedOrders.module.css';
import OrdersList from "../OrdersList/OrdersList";

const FeedOrders: FC = () => {
    return (
        <section className={ styles.main }>
            <OrdersList />
        </section>
    );
};

export default FeedOrders;
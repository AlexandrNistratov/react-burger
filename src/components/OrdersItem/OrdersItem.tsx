import React, { FC } from 'react';
import styles from './ordersItem.module.css';
import clsx from "clsx";

const OrdersItem: FC = () => {
    return (
        <section className={ styles.main }>
            <div className={ styles.wrapper }>
                <p className={ clsx(styles.number, 'text_type_digits-default') }>cdcd</p>
                <p className={ clsx('text text_type_main-default text_color_inactive') }>cdcd</p>
            </div>
            <h2 className={ clsx(styles.title, 'text_type_main-medium' ) }>ччччччччч</h2>
        </section>
    );
};

export default OrdersItem;
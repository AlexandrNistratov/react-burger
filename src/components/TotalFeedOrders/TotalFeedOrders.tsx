import React, { FC } from 'react';
import styles from './totalFeedOrders.module.css';
import clsx from "clsx";

const TotalFeedOrders: FC = () => {
    return (
        <section className={ styles.main }>
            <div className={ styles.status }>
                <div className={ styles.wrapper}>
                    <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>Готово:</h2>
                    <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default') }>xsxssxs</p>
                    <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default') }>xsxssxs</p>
                    <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default') }>xsxssxs</p>
                    <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default') }>xsxssxs</p>
                    <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default') }>xsxssxs</p>
                </div>
                <div className={ styles.wrapper}>
                    <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>В работе:</h2>
                    <p className={ clsx(styles.text, 'text_type_digits-default') }>xsxsxsxsxs</p>
                    <p className={ clsx(styles.text, 'text_type_digits-default') }>xsxsxsxsxs</p>
                    <p className={ clsx(styles.text, 'text_type_digits-default') }>xsxsxsxsxs</p>
                    <p className={ clsx(styles.text, 'text_type_digits-default') }>xsxsxsxsxs</p>
                    <p className={ clsx(styles.text, 'text_type_digits-default') }>xsxsxsxsxs</p>
                    <p className={ clsx(styles.text, 'text_type_digits-default') }>xsxsxsxsxs</p>
                </div>
            </div>
            <div className={ styles.all }>
                <h2 className={ clsx(styles.subtitle, styles.subtitle__all, 'text_type_main-medium') }>Выполнено за все время:</h2>
                <p className={ clsx(styles.text__large, 'text_type_digits-large') }>28 752</p>
            </div>
            <div className={ styles.completedToday }>
                <h2 className={ clsx(styles.subtitle, styles.subtitle__all, 'text_type_main-medium') }>Выполнено за все время:</h2>
                <p className={ clsx(styles.text__large, 'text_type_digits-large') }>150</p>
            </div>
        </section>
    );
};

export default TotalFeedOrders;
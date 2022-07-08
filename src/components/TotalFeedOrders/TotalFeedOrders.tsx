import React, { FC } from 'react';
import styles from './totalFeedOrders.module.css';
import clsx from "clsx";
import { useSelector } from "../../types";

const TotalFeedOrders: FC = () => {
    const { messages, total, totalToday} = useSelector(state => state.socket);

    const doneOrders = messages && messages.filter((item) => item.status === "done");

    const pendingOrders = messages && messages.filter((item) => item.status === "pending");

    return (
        <section className={ styles.main }>
            <div className={ styles.status }>
                <div className={ styles.wrapper}>
                    <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>Готово:</h2>
                    <div className={ styles.list }>
                        {doneOrders &&
                            doneOrders.map(item => {
                                return <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default')} key={ item._id }>{ item.number }</p>
                            })
                        }
                    </div>
                </div>
                <div className={ styles.wrapper }>
                    <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>В работе:</h2>
                    <div className={ styles.list }>
                        {pendingOrders && pendingOrders.length !== 0 ?
                            pendingOrders.map(item => {
                                return <p className={ clsx(styles.text, styles.text__green, 'text_type_digits-default')} key={ item._id }>{ item.number }</p>
                            }) : <p className={ clsx(styles.text, 'text_type_main-default') }>Нет заказов</p>
                        }
                    </div>
                </div>
            </div>
            <div className={ styles.all }>
                <h2 className={ clsx(styles.subtitle, styles.subtitle__all, 'text_type_main-medium') }>Выполнено за все время:</h2>
                { total && <p className={ clsx(styles.text__large, 'text_type_digits-large') }>{ total }</p> }
            </div>
            <div className={ styles.completedToday }>
                <h2 className={ clsx(styles.subtitle, styles.subtitle__all, 'text_type_main-medium') }>Выполнено за сегодня:</h2>
                { totalToday && <p className={ clsx(styles.text__large, 'text_type_digits-large') }>{ totalToday }</p>}
            </div>
        </section>
    );
};

export default TotalFeedOrders;
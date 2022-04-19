import React from 'react';
import  styles from './totalConstructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

const TotalConstructor = () => {
    return (
        <section className={styles.main}>
            <div className={styles.wrapper}>
               <p className={`${styles.sum} text_type_digits-medium`}>610</p>
                <div className={styles.icon}>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <div className={styles.button}>
                <Button size='large' type='primary'>Оформить заказ</Button>
            </div>

        </section>
    );
};

export default TotalConstructor;
import React, { FC } from 'react';
import styles from './orderInfo.module.css';
import { TData } from "../../types/types";
import clsx from "clsx";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TOrderInfo = {
    item?: TData
}

const OrderInfo: FC<TOrderInfo> = ({ item }) => {

    return (
        <div className={ styles.main }>
            <div className={ styles.wrapper }>
                <div className={ styles.images }>
                    <div className={ styles.item } >
                        { item && <img className={ styles.img } src={ item.image_large } alt=""/>}
                    </div>
                </div>
                { item &&  <p className={ clsx(styles.name, 'text_type_main-default') }>{ item.name }</p> }
            </div>
            <div className={ styles.total}>
                <p className={ clsx(styles.price, 'text_type_digits-default') }> 2 x 20</p>
                <div className={ styles.icon }>
                    <CurrencyIcon type='primary' />
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;
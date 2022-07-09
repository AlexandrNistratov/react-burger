import React, { FC, useState, useEffect, useMemo } from 'react';
import styles from './orderDetails.module.css';
import clsx from "clsx";
import OrderInfo from "../OrderInfo/OrderInfo";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TOrders } from "../../types/types";
import { useSelector } from "../../types";
import { orderStatus, dateCalc , sumOrders} from "../../utils";
import { v4 as uuidv4 } from 'uuid';


type TOrderDetails = {
    details?: TOrders,
}

const OrderDetails:FC<TOrderDetails> = ({ details}) => {
    const [ total, setTotal ] = useState(0);
    // Массив всех ингридаентов
    const data = useSelector(state => state.data.ingredientsData);

    const orders = useSelector(state => state.oderDetails.orderDetails);
    const {  name, status, createdAt, number } = orders;

    // Ищем картинки всех ингридиентов из заказа
    const identicalIngredients = orders.ingredients
        .filter(item => item !== undefined)
        .map(id => {
            return data.find(item => item._id == id);
        });

    const identicalIngredientsDetails = details?.ingredients
        .filter(item => item !== undefined)
        .map(id => {
            return data.find(item => item._id == id);
        });


    const statusOrder = orderStatus(status);
    const statusOrderDetails = orderStatus(details?.status);

    const map = identicalIngredients.reduce((prev: any, cur: any) => {
        prev[cur.name] = (prev[cur.name] || 0) + 1;
        return prev;
    }, {});

    useEffect(() => {
        if (identicalIngredients) {
            sumOrders(identicalIngredients, setTotal)
        }
            sumOrders(identicalIngredientsDetails, setTotal)

    })

    // const findI = useMemo(() => {
    //     if (orders) {
    //         const ingredientsArray: Array<any> = [];
    //
    //         identicalIngredients.forEach((x) => {
    //             const find: boolean = ingredientsArray.some((ing) => ing._id === x!._id);
    //             if (find) {
    //                 const findElement = ingredientsArray.find(
    //                     (ing) => ing._id === x!._id
    //                 );
    //                 console.log(findElement)
    //                 if (findElement) {
    //
    //                     findElement.__v = findElement.__v + 1;
    //                 }
    //                 return;
    //             } else {
    //                 if (x) {
    //                     ingredientsArray.push(x);
    //                 }
    //             }
    //         });
    //
    //         return ingredientsArray;
    //     }
    // }, [orders, orders, data]);

    // console.log(findI)


    return (
        <div className={ styles.content }>
            <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>{ name || details?.name }</h2>
            <p className={ clsx(styles.status, 'text_type_main-default') }>{ statusOrder  || statusOrderDetails }</p>
            <h2 className={ clsx(styles.subtitle, styles.structure, 'text_type_main-medium') }>Состав:</h2>
            {identicalIngredients &&
                <div className={ styles.list }>
                    {identicalIngredients.map(item => {
                        return (
                            <OrderInfo key={ uuidv4() } item={item} />
                        );
                    })}
                </div>
            }
            {identicalIngredientsDetails &&
                <div className={ styles.list }>
                    {identicalIngredientsDetails.map(item => {
                        return (
                            <OrderInfo key={ uuidv4() } item={item} />
                        );
                    })}
                </div>
            }
            <div className={ styles.wrapper }>
                { createdAt && <p className={clsx(styles.date, 'text_type_main-default text_color_inactive')}>{ dateCalc(createdAt) }</p>}
                { details?.createdAt && <p className={clsx(styles.date, 'text_type_main-default text_color_inactive')}>{ dateCalc(details.createdAt) }</p> }
                <div className={ styles.total }>
                    { total && <p className={clsx(styles.price, 'text_type_digits-default')}>{ total }</p> }
                    <div className={ styles.icon }>
                        <CurrencyIcon type='primary' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
import React, { FC, useState, useEffect, useMemo } from 'react';
import styles from './orderDetails.module.css';
import clsx from "clsx";
import OrderInfo from "../OrderInfo/OrderInfo";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TData, TOrders} from "../../types/types";
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
    const {  name, status, createdAt } = orders;

    // Ищем картинки всех ингридиентов из заказа
    const identicalIngredients = orders.ingredients
        .filter(item => item !== undefined)
        .map(id => {
            return data.find(item => item._id === id);
        });


    const identicalIngredientsDetails = details?.ingredients
        .filter(item => item !== undefined)
        .map(id => {
            return data.find(item => item._id === id);
        });


    const statusOrder = orderStatus(status);
    const statusOrderDetails = orderStatus(details?.status);

    useEffect(() => {
        if (identicalIngredients) {
            sumOrders(identicalIngredients, setTotal)
        }
            sumOrders(identicalIngredientsDetails, setTotal)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const findI = useMemo(() => {
        if (orders._id !== '') {
            const ingredientsArray: TData[] = [];
            const arr = orders.ingredients?.map((id) =>
                data.find((ingredient) => ingredient._id === id)
            );
            arr.forEach((x) => {
                const find: boolean = ingredientsArray.some(
                    (ing) => ing._id === x!._id
                );
                if (find) {
                    const findElement = ingredientsArray.find(
                        (ing) => ing._id === x!._id
                    );
                    if (findElement) {
                        findElement.__v = findElement.__v + 1;
                    }
                    return;
                } else {
                    if (x) {
                        ingredientsArray.push(x);
                    }
                }
            });

            return ingredientsArray;
        } else {
            const ingredientsDetailsArray: TData[] = [];
            const arrDetails = details?.ingredients?.map((id) =>
                data.find((ingredient) => ingredient._id === id)
            );
            arrDetails?.forEach((x) => {
                const find: boolean = ingredientsDetailsArray.some(
                    (ing) => ing._id === x!._id
                );
                if (find) {
                    const findElement = ingredientsDetailsArray.find(
                        (ing) => ing._id === x!._id
                    );
                    if (findElement) {
                        findElement.__v = findElement.__v + 1;
                    }
                    return;
                } else {
                    if (x) {
                        ingredientsDetailsArray.push(x);
                    }
                }
            });

            return ingredientsDetailsArray;
        }
    }, [orders, details, data]);

    useEffect(() => {
        return () => {
            findI.forEach(item => {
                item.__v = 0
            })
        }
    })

    return (
        <div className={ styles.content }>
            <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>{ name || details?.name }</h2>
            <p className={ clsx(styles.status, 'text_type_main-default') }>{ statusOrder  || statusOrderDetails }</p>
            <h2 className={ clsx(styles.subtitle, styles.structure, 'text_type_main-medium') }>Состав:</h2>
            {findI &&
                <div className={ styles.list }>
                    {findI.map((item) => {
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
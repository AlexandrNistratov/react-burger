import React, {FC, useEffect} from 'react';
import styles from './orderNumberDetails.module.css';
import clsx from "clsx";
import img from '../../images/graphics.svg';
import Icon from "../Icon/Icon";
import {useDispatch, useSelector} from '../../types';
import { constructorActionCreator } from "../../store/constructor/constructor.actions";

const OrderNumberDetails: FC = () => {
    const dispatch = useDispatch();
    const { ordersNumberRequest, ordersNumberFailed, ordersNumber } = useSelector(state => state.numberOrder);
    const { clear } = constructorActionCreator;

    useEffect(() => {
        return() => {
            dispatch(clear())
        }
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className={ styles.main }>
            {
                ordersNumberRequest ? <p className={ clsx(styles.subtitle, 'text_type_main-medium') }>Загрузка..</p> :
                    ordersNumber ? <h1 className={ clsx(styles.header, 'text_type_digits-large ') }>{ ordersNumber?.order.number }</h1> :
                        ordersNumberFailed ? <p className={ clsx(styles.subtitle, 'text_type_main-medium') }>Ошибка</p> : null
            }
            <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>идентификатор заказа</h2>
            <Icon icon={ img }/>
            <p className={ clsx(styles.readiness, 'text_type_main-default') }>Ваш заказ начали готовить</p>
            <p className={ clsx(styles.text, 'text_type_main-default text_color_inactive') }>Дождитесь готовности на орбитальной станции</p>
        </section>
    );
};

export default OrderNumberDetails;
import React, { FC } from 'react';
import styles from './ordersHistory.module.css';
import OrdersItem from "../../components/OrdersItem/OrdersItem";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
// import {TIngredientDetails} from "../../types/types";
// import { getDetailsAction } from "../../services/actions/detailsActions";
import { useDispatch } from "../../types";

const OrdersHistory: FC = () => {
    const { isOpen, closePopup, openPopup} = useModal();
    const dispatch = useDispatch();

    // const clickIngredients: (item: TIngredientDetails) => void  = (item) => {
    //     // dispatch(getDetailsAction(item));
    //     openPopup();
    // };

    const clickIngredients: () => void  = () => {
        // dispatch(getDetailsAction(item));
        openPopup();
    };
    return (
        <section className={ styles.main }>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            <OrdersItem clickIngredients={clickIngredients}/>
            {isOpen && <Modal isOpen={ isOpen } closePopup={ closePopup } header='номер заказа' isOrders={ true }/>}
        </section>
    );
};

export default OrdersHistory;
import React, { FC, useEffect } from 'react';
import styles from './ordersFeedPage.module.css';
import clsx from "clsx";
import TotalFeedOrders from "../../components/TotalFeedOrders/TotalFeedOrders";
import OrdersList from "../../components/OrdersList/OrdersList";
import { socketActionCreators } from "../../store/socket/socket.actions";
import { useDispatch, useSelector } from "../../types";
import {TOrders} from "../../types/types";
import { orderDetailsActionCreator } from "../../store/ordersDetails/ordersDetails.actions";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/Modal/Modal";
import { useHistory } from "react-router-dom";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

const OrdersFeedPage: FC = () => {
    const history = useHistory();
    const { isOpen, openPopup, closePopup } = useModal();
    const dispatch = useDispatch();
    const { number } = useSelector(state => state.oderDetails.orderDetails);
    const { getOrdersDetails, deleteOrdersDetails } = orderDetailsActionCreator;

    useEffect(() => {
        dispatch(socketActionCreators.start('/all'))
        return () => {
            dispatch(socketActionCreators.close())
        }
    }, [dispatch])

    const clickIngredients: (item: TOrders) => void  = (item) => {
        dispatch(getOrdersDetails(item));
        openPopup();
    };

    const closeModalDetails = () => {
        dispatch(deleteOrdersDetails());
        closePopup();
        history.push('/feed')
    };

    return (
        <section className={ styles.main }>
            <h1 className={ clsx(styles.header, 'text text_type_main-large') }>Лента заказов</h1>
            <div className={ styles.content }>
                <OrdersList onClick={ clickIngredients }/>
                <TotalFeedOrders />
            </div>
            {isOpen &&
                <Modal
                    isOrders={ true }
                    isOpen={ isOpen }
                    closePopup={ closeModalDetails }
                    header={ number }>
                    <OrderDetails />
                </Modal>}
        </section>
    );
};

export default OrdersFeedPage;
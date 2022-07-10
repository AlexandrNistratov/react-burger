import React, { FC, useEffect } from 'react';
import styles from './ordersHistory.module.css';
import OrdersItem from "../../components/OrdersItem/OrdersItem";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { socketActionCreators } from "../../store/socket/socket.actions";
import { useDispatch, useSelector } from "../../types";
import { getCookie } from "../../utils/cookie";
import { Link, useHistory, useLocation } from "react-router-dom";
import {TOrders} from "../../types/types";
import { orderDetailsActionCreator } from "../../store/ordersDetails/ordersDetails.actions";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

const OrdersHistory: FC = () => {
    const { isOpen, closePopup, openPopup} = useModal();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        dispatch(socketActionCreators.start(getCookie("accessToken")?.split("Bearer ").join("")))
        return () => {
            dispatch(socketActionCreators.close())
        }
    }, [dispatch])
    const { getOrdersDetails, deleteOrdersDetails } = orderDetailsActionCreator;
    const orders = useSelector(state => state.socket.messages);
    const { number } = useSelector(state => state.oderDetails.orderDetails)

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
            {
                orders?.map(item => {
                    return <Link className={ styles.link }
                                 key={item._id}
                                 to={ { pathname: `orders/${item._id}`,
                                     state: { background: location }} }
                    >
                        <OrdersItem onClick={ clickIngredients } key={ item._id } item={ item }/>
                    </Link>
                })
            }
            {isOpen &&
                <Modal
                    isOpen={ isOpen }
                    closePopup={ closeModalDetails }
                    header={ number }
                    isOrders={ true }>
                    <OrderDetails />
                </Modal>}
        </section>
    );
};

export default OrdersHistory;
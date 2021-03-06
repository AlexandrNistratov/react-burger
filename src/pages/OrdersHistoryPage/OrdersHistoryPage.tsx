import React, { FC, useEffect } from 'react';
import styles from './ordersHistoryPage.module.css';
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
import clsx from "clsx";
import ProfileNav from "../../components/ProfileNav/ProfileNav";

const OrdersHistoryPage: FC = () => {
    const { isOpen, closePopup, openPopup} = useModal();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const url = getCookie("accessToken")?.split("Bearer ").join("");

    useEffect(() => {
        url && dispatch(socketActionCreators.start(url));
        return () => {
            dispatch(socketActionCreators.close())
        }
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps

    const { getOrdersDetails, deleteOrdersDetails } = orderDetailsActionCreator;
    const orders = useSelector(state => state.socket.messages);
    const { number } = useSelector(state => state.oderDetails.orderDetails);
    const ingredient = useSelector(state => state.oderDetails.orderDetails);


    const clickIngredients: (item: TOrders) => void  = (item) => {
        dispatch(getOrdersDetails(item));
        openPopup();
    };


    const closeModalDetails = () => {
        dispatch(deleteOrdersDetails());
        closePopup();
        history.push('/profile/orders')
    };

    return (
            <div className={ styles.container}>
                <ProfileNav />
                {
                    orders && orders.length > 0 ?
                        <section className={ styles.main }>
                            {
                                orders?.reverse().map(item => {
                                    return <Link className={ styles.link }
                                                 key={item._id}
                                                 to={ { pathname: `orders/${item._id}`,
                                                     state: { background: location }} }
                                    >
                                        <OrdersItem onClick={ clickIngredients } key={ item._id } item={ item } status={ true }/>
                                    </Link>
                                })
                            }
                            {isOpen &&
                                <Modal
                                    isOpen={ isOpen }
                                    closePopup={ closeModalDetails }
                                    header={ number }
                                    isOrders={ true }>
                                    <OrderDetails details={ ingredient } />
                                </Modal>}
                        </section> : <p className={ clsx(styles.text, 'text_type_main-medium') }>??????????????????, ???????? ????????????????</p>
                }
            </div>
    );
};

export default OrdersHistoryPage;
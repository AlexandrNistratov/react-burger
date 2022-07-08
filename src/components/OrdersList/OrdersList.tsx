import React, { FC } from 'react';
import styles from './ordersList.module.css';
import OrdersItem from '../OrdersItem/OrdersItem';
import { useModal } from '../../hooks/useModal';
import { useSelector } from "../../types";

const OrdersList: FC = () => {
	const { openPopup } = useModal();

	const orders = useSelector(state => state.socket.messages);

	const clickIngredients: () => void = () => {
		// dispatch(getDetailsAction(item));
		openPopup();
	};

	return (
		<section className={styles.main}>
			{
				orders?.map(item => {
					return <OrdersItem clickIngredients={clickIngredients} key={ item._id } item={ item }/>
				})
			}
		</section>
	);
};

export default OrdersList;

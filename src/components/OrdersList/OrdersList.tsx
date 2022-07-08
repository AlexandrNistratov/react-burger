import React, { FC } from 'react';
import styles from './ordersList.module.css';
import OrdersItem from '../OrdersItem/OrdersItem';
import { useModal } from '../../hooks/useModal';

const OrdersList: FC = () => {
	const { openPopup } = useModal();

	const clickIngredients: () => void = () => {
		// dispatch(getDetailsAction(item));
		openPopup();
	};

	return (
		<section className={styles.main}>
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
			<OrdersItem clickIngredients={clickIngredients} />
		</section>
	);
};

export default OrdersList;

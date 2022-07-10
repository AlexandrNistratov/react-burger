import React, { FC } from 'react';
import styles from './ordersList.module.css';
import OrdersItem from '../OrdersItem/OrdersItem';
import { useSelector } from "../../types";
import  { Link, useLocation } from "react-router-dom";
import { TOrders } from "../../types/types";

type TOrdersList = {
	onClick: (item: TOrders) => void;
}

const OrdersList: FC<TOrdersList> = ({ onClick }) => {
	const location = useLocation();

	const orders = useSelector(state => state.socket.messages);

	return (
		<section className={styles.main}>
			{
				orders?.map(item => {
					return <Link className={ styles.link }
								 key={item._id}
								 to={ { pathname: `feed/${item._id}`,
									 state: { background: location }} }
					>
						<OrdersItem onClick={ onClick } key={ item._id } item={ item }/>
					</Link>
				})
			}
		</section>
	);
};

export default OrdersList;

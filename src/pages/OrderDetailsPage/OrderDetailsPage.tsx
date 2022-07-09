import React, { FC, useEffect}  from 'react';
import styles from './orderDetailsPage.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from '../../types';
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import { useHistory } from "react-router-dom";
import { socketActionCreators } from "../../store/socket/socket.actions";

const OrderDetailsPage: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(socketActionCreators.start())
		return () => {
			dispatch(socketActionCreators.close())
		}
	}, [dispatch])

	const orders = useSelector(state => state.socket.messages);

	const history = useHistory();
	const id = history.location.pathname.replace("/feed/", "");

	const itemFilter = orders?.filter((el: any) => el._id === id)[0];
	console.log(itemFilter)


	return (
		<section className={styles.main}>
			<div className={styles.header}>
				<h1 className={clsx(styles.title, 'text_type_digits-default')}>{`#${ itemFilter?.number }`}</h1>
			</div>
			{orders ? <OrderDetails details={ itemFilter }/> : 'идет загрузка'}

		</section>
	);
};

export default OrderDetailsPage;

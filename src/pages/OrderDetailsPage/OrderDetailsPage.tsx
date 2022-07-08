import React, { FC } from 'react';
import styles from './orderDetailsPage.module.css';
import clsx from 'clsx';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import { useSelector } from '../../types';

const OrderDetailsPage: FC = () => {
	const ingredients = useSelector(state => state.data.ingredientsData).slice(
		0,
		6
	);
	return (
		<section className={styles.main}>
			<div className={styles.header}>
				<h1 className={clsx(styles.title, 'text_type_digits-default')}>
					cdcdcdcdc
				</h1>
			</div>
			<h2 className={clsx(styles.subtitle, 'text_type_main-medium')}>cdcdcd</h2>
			<p className={clsx(styles.status, 'text_type_main-default')}>cdcdcdc</p>
			<h2
				className={clsx(
					styles.subtitle,
					styles.structure,
					'text_type_main-medium'
				)}
			>
				Состав:
			</h2>
			<div className={styles.list}>
				{ingredients.map(item => {
					return <OrderInfo key={item._id} item={item} />;
				})}
			</div>
			<div className={styles.wrapper}>
				<p
					className={clsx(
						styles.date,
						'text_type_main-default text_color_inactive'
					)}
				>
					cccwwwcwccwwcwcwccwwcwccw
				</p>
				<div className={styles.total}>
					<p className={clsx(styles.price, 'text_type_digits-default')}> 121</p>
					<div className={styles.icon}>
						<CurrencyIcon type='primary' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrderDetailsPage;

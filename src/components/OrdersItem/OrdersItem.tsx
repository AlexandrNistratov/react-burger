import React, { FC, useEffect, useState } from 'react';
import styles from './ordersItem.module.css';
import clsx from 'clsx';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';
import { TOrders } from '../../types/types';
import { dateCalc } from '../../utils';
import { useSelector } from '../../types';
import { sumOrders, orderStatus } from '../../utils';

type TOrdersItem = {
	onClick: (item: TOrders) => void;
	item: TOrders;
	status?: boolean;
};

const OrdersItem: FC<TOrdersItem> = ({ onClick,  item, status }) => {
	const [ price, setPrice ] = useState(0);

	// Массив всех ингридаентов
	const data = useSelector(state => state.data.ingredientsData);

	// Ищем картинки всех ингридиентов из заказа
	const identicalIngredients = item.ingredients
		.filter(item => item !== undefined)
		.map(id => {
			return data.find(item => item._id === id);
		});

	//5 ингредиентов для отображения
	const ingredients = identicalIngredients.slice(0, 5);

	// разница изнгидаеиов в заказе относительно отображенных
	const difference =
		identicalIngredients.length - ingredients.length !== 0 &&
		identicalIngredients.length - ingredients.length;

	//последний ингредиент заказа
	const lastIngredient = identicalIngredients[identicalIngredients.length - 1];

	useEffect(() => sumOrders(identicalIngredients, setPrice),[]);// eslint-disable-line react-hooks/exhaustive-deps

	const statusOrder = orderStatus(item.status)

	return (
		<section className={styles.main} onClick={() => onClick(item)}>
			<div className={styles.wrapper}>
				<p
					className={clsx(styles.number, 'text_type_digits-default')}
				>{`#${item.number}`}</p>
				<p className={clsx('text text_type_main-default text_color_inactive')}>
					{dateCalc(item.createdAt)}
				</p>
			</div>
			<h2 className={clsx(styles.title, 'text_type_main-medium')}>
				{item.name}
			</h2>
			{status && (
				<p className={clsx(styles.status, 'text_type_main-default')}>
					{ statusOrder }
				</p>
			)}
			<div className={styles.wrapper}>
				<div className={styles.images}>
					{ingredients.map((el) => {
						return (
							<div className={styles.item} key={uuidv4()}>
								<img className={styles.img} src={el?.image_large} alt='' />
							</div>
						);
					})}
					{ difference && lastIngredient && (
						<div className={ styles.item } key={ uuidv4() }>
							<p
								className={clsx(
									styles.difference,
									'text text_type_main-default'
								)}
							>{`+${difference}`}</p>
							<div className={styles.bg}></div>
							<img
								className={styles.img}
								src={lastIngredient.image_large}
								alt=''
							/>
						</div>
					)}
				</div>
				<div className={styles.price}>
					<p className={clsx(styles.price__text, 'text_type_digits-default')}>
						{price}
					</p>
					<div className={styles.icon}>
						<CurrencyIcon type='primary' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrdersItem;

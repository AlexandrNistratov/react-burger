import React, { FC } from 'react';
import styles from './ordersItem.module.css';
import clsx from "clsx";
import { useSelector} from "../../types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuidv4 } from 'uuid';

type TOrdersItem = {
    clickIngredients: () => void;
}

const OrdersItem: FC<TOrdersItem> = ({ clickIngredients }) => {

    const { ingredientsData } = useSelector(state => state.data);

    const ingredients = ingredientsData.slice(0,5)


    const difference = (ingredientsData.length - ingredients.length) !== 0 ? ingredientsData.length - ingredients.length : null;

    const lastIngredient = ingredientsData[ingredientsData.length - 1];

    return (
        <section className={ styles.main } onClick={ clickIngredients }>
            <div className={ styles.wrapper }>
                <p className={ clsx(styles.number, 'text_type_digits-default') }>cdcd</p>
                <p className={ clsx('text text_type_main-default text_color_inactive') }>cdcd</p>
            </div>
            <h2 className={ clsx(styles.title, 'text_type_main-medium' ) }>ччччччыыыыыыыыыыыыччч</h2>
            <p className={ clsx(styles.status, 'text_type_main-default') }>dsdsd</p>
            <div className={ styles.wrapper }>
                <div className={ styles.images }>
                    {
                        ingredients.map(item => {
                            return <div className={ styles.item } key={ item._id }>
                                <img className={ styles.img } src={item.image_large} alt=""/>
                            </div>
                        })
                    }
                    { difference && lastIngredient &&
                        <div className={ styles.item } key={ uuidv4() }>
                            <p className={ clsx(styles.difference, 'text text_type_main-default') }>{`+${ difference}`}</p>
                            <div className={ styles.bg}></div>
                            <img className={ styles.img } src={lastIngredient.image_large} alt=""/>
                        </div>
                    }
                </div>
                <div className={ styles.price }>
                    <p className={ clsx(styles.price__text, 'text_type_digits-default')}>23232</p>
                    <div className={ styles.icon }>
                        <CurrencyIcon type='primary' />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrdersItem;
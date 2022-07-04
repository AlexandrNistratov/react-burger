import React, { FC } from 'react';
import styles from './ingredientsList.module.css';
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import clsx from "clsx";
import { useSelector } from '../../types';
import { Link, useLocation } from "react-router-dom";
import {TIngredientDetails} from "../../types/types";

type TIngredientsList = {
    onClick: (item: TIngredientDetails) => void;
    scrollHandler: (item: any) => void;
}

const IngredientsList: FC<TIngredientsList> = ({ onClick, scrollHandler }) => {
    const data = useSelector(state => state.data.ingredientsData)

    const buns = data.filter((item: any) => item.type === 'bun');
    const sauce = data.filter((item: any) => item.type === 'sauce');
    const main = data.filter((item: any) => item.type === 'main');

    const location = useLocation();

    return (
        <>
            <section className={ styles.main } onScroll={ scrollHandler }>
                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') } id='Булки'>Булки</h2>
                <ul className={ styles.ulList }>
                    {
                        buns.map((item: any) => {
                            return <Link className={ styles.link }
                                         key={item._id}
                                         to={ { pathname: `ingredients/${item._id}`,
                                             state: { background: location }} }
                            >
                                <IngredientsItem data={ item } key={ item._id } onClick={ onClick }/>
                            </Link>
                        })
                    }
                </ul>

                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') } id='Соусы'>Соусы</h2>
                <ul className={ styles.ulList }>
                    {
                        sauce.map((item: any) => {
                            return <Link className={ styles.link }
                                         key={item._id}
                                         to={ { pathname: `ingredients/${item._id}`,
                                             state: { background: location }} }
                            >
                                <IngredientsItem data={ item } key={ item._id } onClick={ onClick }/>
                            </Link>
                        })
                    }
                </ul>
                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') } id='Начинки'>Начинки</h2>
                <ul className={ styles.ulList }>
                    {
                        main.map((item: any) => {
                            return <Link className={ styles.link }
                                         key={item._id}
                                         to={ { pathname: `ingredients/${item._id}`,
                                             state: { background: location }} }
                            >
                                <IngredientsItem data={ item } key={ item._id } onClick={ onClick }/>
                            </Link>
                        })
                    }
                </ul>
            </section>
        </>
    );
};

export default IngredientsList;
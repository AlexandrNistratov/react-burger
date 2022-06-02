import React from 'react';
import styles from './ingredientsList.module.css';
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import clsx from "clsx";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const IngredientsList = ({ onClick, scrollHandler }) => {
    const data = useSelector(state => state.data.ingredientsData)

    const buns = data.filter(item => item.type === 'bun');
    const sauce = data.filter(item => item.type === 'sauce');
    const main = data.filter(item => item.type === 'main');

    const location = useLocation();

    return (
        <>
            <section className={ styles.main } onScroll={ scrollHandler }>
                <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') } id='Булки'>Булки</h2>
                <ul className={ styles.ulList }>
                    {
                        buns.map(item => {
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
                        sauce.map(item => {
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
                        main.map(item => {
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

IngredientsList.propTypes ={
    onClick: PropTypes.func.isRequired,
    onScroll: PropTypes.func
}

export default IngredientsList;
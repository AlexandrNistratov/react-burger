import React, {useState, useContext, useEffect} from 'react';
import styles from './burgerConstructor.module.css';
import ConstructorList from "../ConstructorList/ConstructorList";
import TotalConstructor from "../TotalConstructor/TotalConstructor";
import {ingredientsContext} from "../../context/ingredientsContext";

const BurgerConstructor = () => {
    const ingredients = useContext(ingredientsContext);

    // Стейт для подсчета стоимости
    const [ totalPrice, setTotalPrice ] = useState(0);

    const calculateTotalPrice = (buns, arr) => {
        const priceBuns = Number(buns.price * 2);
             const sum = arr.reduce((acc, item) => {
               return Number(acc + item.price)
            }, 0)
        setTotalPrice(sum + priceBuns);
    }

    return (
        <section className={ styles.main }>
            <ConstructorList ingredients={ingredients} calculateTotalPrice={ calculateTotalPrice }/>
            <TotalConstructor totalPrice={ totalPrice }/>
        </section>
    );
};


export default BurgerConstructor;
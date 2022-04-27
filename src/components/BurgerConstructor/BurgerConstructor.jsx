import React, {useState, useContext, useEffect} from 'react';
import styles from './burgerConstructor.module.css';
import ConstructorList from "../ConstructorList/ConstructorList";
import TotalConstructor from "../TotalConstructor/TotalConstructor";
import {ingredientsContext} from "../../context/ingredientsContext";

const BurgerConstructor = () => {
    const ingredients = useContext(ingredientsContext);

    // Стейт для подсчета стоимости
    const [ totalPrice, setTotalPrice ] = useState(0);

    //Все ингридиенты в конструкторе
    const [totalIngredients, setTotalIngredients] = useState([]);

    //Собираем все элементы в массив
    const collectIngredients = (arr, ...item) => {
        const arrIngredients = arr.concat(...item)
        setTotalIngredients(arrIngredients)
    }

    //Айдишки элементов в конструкторе
    const arrIdIngredients = totalIngredients.map((item) => item._id)

    //Считаем сумму заказа
    const calculateTotalPrice = (buns, arr) => {
        const priceBuns = Number(buns.price * 2);
             const sum = arr.reduce((acc, item) => {
               return Number(acc + item.price)
            }, 0)
        setTotalPrice(sum + priceBuns);
    }

    return (
        <section className={ styles.main }>
            <ConstructorList
                ingredients={ ingredients }
                calculateTotalPrice={ calculateTotalPrice }
                collectIngredients={ collectIngredients }
            />
            <TotalConstructor
                totalPrice={ totalPrice }
                arrIdIngredients={ arrIdIngredients }
            />
        </section>
    );
};


export default BurgerConstructor;
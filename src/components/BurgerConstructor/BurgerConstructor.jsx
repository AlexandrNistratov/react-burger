import React, {useState } from 'react';
import styles from './burgerConstructor.module.css';
import ConstructorList from "../ConstructorList/ConstructorList";
import TotalConstructor from "../TotalConstructor/TotalConstructor";

const BurgerConstructor = () => {

    // Стейт для подсчета стоимости
    const [ totalPrice, setTotalPrice ] = useState(0);

    //Все ингридиенты в конструкторе
    const [totalIngredients, setTotalIngredients] = useState([]);

    //Собираем все элементы в массив
    const collectIngredients = (arr, ...item) => {
        const arrIngredients = arr.concat(...item)
        setTotalIngredients(arrIngredients)
    }



    return (
        <section className={ styles.main }>
            <ConstructorList
                collectIngredients={ collectIngredients }
            />
            <TotalConstructor
                totalPrice={ totalPrice }
            />
        </section>
    );
};


export default BurgerConstructor;
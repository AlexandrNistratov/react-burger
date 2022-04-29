import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";
import { getData } from "../../utils/Api";
import { IngredientsContext } from "../../context/IngredientsContext";

const App = () => {
    //стейт данных из API
    const [ ingredients, setIngredients ] = useState([]);

    useEffect(() => {
        getData()
            .then(data => setIngredients(data.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <IngredientsContext.Provider value={ingredients}>
            <section className={ styles.main }>
                {ingredients.length !== 0 &&
                    <>
                        <AppHeader />
                        <MainPage />
                    </>
                }
            </section>
        </IngredientsContext.Provider>
    );
};

export default App;
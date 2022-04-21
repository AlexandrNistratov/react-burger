import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";
import { API_URL } from "../../utils/constants";

const App = () => {
    //стейт данных из API
    const [ stateData, setStateData ] = useState([]);

    //Запрос к API
    const getData =  async () => {
        const res = await fetch(API_URL);
        return await res.json();
    };

    useEffect(() => {
        getData()
            .then(data => setStateData(data.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <section className={ styles.main }>
            {stateData.length !== 0 &&
                <>
                    <AppHeader />
                    <MainPage data={ stateData }/>
                </>
            }
        </section>
    );
};

export default App;
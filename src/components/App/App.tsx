import React from 'react';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";
import {data} from "../../utils/data";

const App = () => {
    return (
        <section className={styles.main}>
            <AppHeader />
            <MainPage data={ data }/>
        </section>
    );
};

export default App;
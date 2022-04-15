import React from 'react';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";

const App = () => {
    return (
        <section className={styles.main}>
            <AppHeader />
            <MainPage />
        </section>
    );
};

export default App;
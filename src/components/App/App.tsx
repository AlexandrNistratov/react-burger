import React from 'react';
import appStyles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";

const App = () => {
    return (
        <section className={appStyles.main}>
            <AppHeader />
            <MainPage />
        </section>
    );
};

export default App;
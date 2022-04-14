import React from 'react';
import appStyles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";

const App = () => {
    return (
        <section className={appStyles.main}>
            <AppHeader />
        </section>
    );
};

export default App;
import React, { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";
import { getData } from "../../utils/Api";
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.ingredientsData)

    useEffect(() => {
        dispatch(getData())
    }, []);

    return (
            <section className={ styles.main }>
                {data.length !== 0 &&
                    <>
                        <AppHeader />
                        <MainPage />
                    </>
                }
            </section>
    );
};

export default App;
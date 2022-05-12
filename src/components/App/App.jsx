import React, { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";
import { getData } from "../../utils/Api";
import { useDispatch, useSelector } from 'react-redux';
import clsx from "clsx";


const App = () => {
    const dispatch = useDispatch();
    const { ingredientsData, dataRequest, dataFailed } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
            <section className={ styles.main }>
                        <AppHeader />
                {
                    dataRequest ? <p className={ clsx('text_type_main-medium') }>Загрузка..</p> :
                        ingredientsData ? <MainPage /> :
                            dataFailed ? <p className={ clsx('text_type_main-medium') }>Ошибка</p> : null
                }

            </section>
    );
};

export default App;
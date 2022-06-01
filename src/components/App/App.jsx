import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import { ProtectedRoute } from "../Protected-route/protected-route";
import { MainPage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPassword, Profile, OrdersPage } from '../../pages/pages';


import { getData } from "../../utils/Api";
import { useDispatch, useSelector } from 'react-redux';
import clsx from "clsx";


const App = () => {
    const dispatch = useDispatch();
    const { ingredientsData, dataRequest, dataFailed } = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
            <section className={ styles.main }>
                <Router>
                    <AppHeader />
                    <Switch>
                        <ProtectedRoute path='/' exact>
                            {
                                dataRequest ? <p className={ clsx('text_type_main-medium') }>Загрузка..</p> :
                                    ingredientsData ? <MainPage /> :
                                        dataFailed ? <p className={ clsx('text_type_main-medium') }>Ошибка</p> : null
                            }
                        </ProtectedRoute>
                        <Route path='/login' >
                            <LoginPage />
                        </Route>
                        <Route path='/register'>
                            <RegisterPage />
                        </Route>
                        <Route path='/forgot-password'>
                            <ForgotPasswordPage />
                        </Route>
                        <Route path='/reset-password'>
                            <ResetPassword />
                        </Route>
                        <ProtectedRoute path='/profile'>
                            <Profile />
                        </ProtectedRoute>
                        <ProtectedRoute path='/profile/orders'>
                            <OrdersPage />
                        </ProtectedRoute>
                    </Switch>
                </Router>
            </section>
    );
};

export default App;
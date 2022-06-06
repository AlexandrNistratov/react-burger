import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import { ProtectedRoute } from "../Protected-route/protected-route";
import { MainPage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPassword, Profile, OrdersPage } from '../../pages/pages';


import {getData, getUser} from "../../utils/Api";
import { useDispatch, useSelector } from 'react-redux';
import clsx from "clsx";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";


const App = () => {
    const dispatch = useDispatch();
    const { ingredientsData, dataRequest, dataFailed } = useSelector(state => state.data);

    const location = useLocation();
    const history = useHistory();
    const action = history.action === "PUSH" || history.action === "REPLACE";
    const background = action && location.state && location.state.background;

    useEffect(() => {
        dispatch(getData());
        dispatch(getUser())
    }, [dispatch]);

    const onlyUnAuth = true;

    return (
            <section className={ styles.main }>
                    <AppHeader />
                    <Switch location={ background || location }>
                        <Route path='/' exact>
                            {
                                dataRequest ? <p className={ clsx('text_type_main-medium') }>Загрузка..</p> :
                                    ingredientsData ? <MainPage /> :
                                        dataFailed ? <p className={ clsx('text_type_main-medium') }>Ошибка</p> : null
                            }
                        </Route>
                        <ProtectedRoute path='/login' exact  onlyUnAuth={ onlyUnAuth }>
                            <LoginPage />
                        </ProtectedRoute>
                        <ProtectedRoute path='/register' exact  onlyUnAuth={ onlyUnAuth }>
                            <RegisterPage />
                        </ProtectedRoute>
                        <ProtectedRoute path='/forgot-password' exact  onlyUnAuth={ onlyUnAuth }>
                            <ForgotPasswordPage />
                        </ProtectedRoute>
                        <ProtectedRoute path='/reset-password' exact  onlyUnAuth={ onlyUnAuth }>
                            <ResetPassword />
                        </ProtectedRoute>
                        <ProtectedRoute path='/profile' exact>
                            <Profile />
                        </ProtectedRoute>
                        <ProtectedRoute path='/profile/orders' exact>
                            <OrdersPage />
                        </ProtectedRoute>
                        <Route path='/ingredients/:id' exact>
                            <IngredientPage />
                        </Route>
                    </Switch>
            </section>
    );
};

export default App;
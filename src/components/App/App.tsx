import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from "../AppHeader/AppHeader";
import { ProtectedRoute } from "../Protected-route/protected-route";
import {
    MainPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    ResetPassword,
    Profile,
    OrdersFeedPage,
    NotFoundPage
} from '../../pages/pages';
import { getData, getUser } from "../../utils/Api";
import { useDispatch, useSelector } from '../../types';
import clsx from "clsx";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import { Location } from 'history';
import OrdersHistory from "../../pages/OrdersHistory/OrdersHistory";
import OrderDetailsPage from "../../pages/OrderDetailsPage/OrderDetailsPage";


const App: FC = () => {
    const dispatch = useDispatch();

    const { ingredientsData, dataRequest, dataFailed } = useSelector(state => state.data);


    const { isUser } = useSelector(state => state.userReducer);

    const location = useLocation<{ background : Location }>();
    const history = useHistory();
    const action = history.action === "PUSH" || history.action === "REPLACE";
    const background = action && location.state && location.state.background;

    useEffect(() => {
        dispatch(getData());
        if(isUser) {
            dispatch(getUser())
        }
    }, [dispatch, isUser]);

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
                        <ProtectedRoute path='/profile'>
                            <Profile />
                        </ProtectedRoute>
                        <Route path='/feed' exact>
                            <OrdersFeedPage />
                        </Route>
                        <Route path='/ingredients/:id' exact>
                            <IngredientPage />
                        </Route>
                        <Route path='/feed/:id' exact>
                            <OrderDetailsPage/>
                        </Route>
                        <Route path='/profile/orders/:id' exact>
                            <OrderDetailsPage/>
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
            </section>
    );
};

export default App;
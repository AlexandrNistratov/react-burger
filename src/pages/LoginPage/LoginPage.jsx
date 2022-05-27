import React, { useEffect } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import './index.css';
import FormLink from "../../components/UI/FormLink/FormLink";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/Api";
import { setLoginAction } from "../../services/actions/login";
import { useHistory } from "react-router-dom";
import {getCookie} from "../../utils/cookie";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const form = useSelector(state => state.login.form);
    const isAuth = useSelector(state => state.login.isAuth);
    const log = useSelector(state => state.login);
    // console.log(log)
    const qwe = getCookie('accessToken')
    console.log(qwe)
    const { email, password } = form;

    // console.log(isAuth, email, password)

    const onChange = e => {
        dispatch(setLoginAction({...form, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form));
    }

    useEffect(() => {
        isAuth && history.push('/')
    },[isAuth])

    return (
        <>
            <Form text='Вход' textButton='Войти' onSubmit={ handleSubmit }>
                <div className={'mt-6'}>
                    <Input value={ email } onChange={ onChange } type='email' placeholder='E-mail' name='email'/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ password } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={'ShowIcon'}/>
                </div>
            </Form>
            <FormLink text='Вы — новый пользователь?' url='/register' textLink='Зарегистрироваться'/>
            <FormLink text='Забыли пароль?' url='/forgot-password' textLink='Восстановить пароль'/>
        </>
    );
};

export default LoginPage;
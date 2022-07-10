import React, { ChangeEvent, FC, SyntheticEvent } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import './index.css';
import FormLink from "../../components/UI/FormLink/FormLink";
import { useDispatch, useSelector } from '../../types';
import { login } from "../../utils/Api";
import { userActionCreator } from "../../store/user/user.actions";

const LoginPage: FC = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.userReducer);
    const { email, password } = data.user;
    const { setEdit } = userActionCreator;


    const onChange: (e: ChangeEvent<HTMLInputElement>) => void  = e => {
        dispatch(setEdit({...data.user, [e.target.name]: e.target.value}))
    }

    const handleSubmit: (e: SyntheticEvent) => void  = (e) => {
        e.preventDefault();
        dispatch(login(data.user));
    }

    return (
        <>
            <Form text='Вход' textButton='Войти' onSubmit={ handleSubmit }>
                <div className={'mt-6'}>
                    <Input value={ email || '' } onChange={ onChange } type='email' placeholder='E-mail' name='email'/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ password || '' } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={'ShowIcon'}/>
                </div>
            </Form>
            <FormLink text='Вы — новый пользователь?' url='/register' textLink='Зарегистрироваться'/>
            <FormLink text='Забыли пароль?' url='/forgot-password' textLink='Восстановить пароль'/>
        </>
    );
};

export default LoginPage;
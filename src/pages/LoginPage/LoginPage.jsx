import React, { useState } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import './index.css';
import FormLink from "../../components/UI/FormLink/FormLink";

const LoginPage = () => {
    const [ value, setValue ] = useState({ email: '', password: ''});

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
    return (
        <>
            <Form text='Вход' textButton='Войти'>
                <div className={'mt-6'}>
                    <Input value={ value.email } onChange={ onChange } type='email' placeholder='E-mail' name='email'/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ value.password } onChange={ onChange } type='password' placeholder='Пароль' name='password'/>
                </div>
            </Form>
            <FormLink text='Вы — новый пользователь?' url='/register' textLink='Зарегистрироваться'/>
        </>

    );
};

export default LoginPage;
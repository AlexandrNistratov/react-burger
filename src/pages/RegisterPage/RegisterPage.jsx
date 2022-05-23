import React, { useState } from 'react';
import Form from "../../components/UI/Form/Form";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";

const RegisterPage = () => {
    const [ value, setValue ] = useState({ name: '', email: '', password: ''});

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
    return (
        <>
            <Form text='Регистрация' textButton='Зарегистрироваться'>
                <div className={'mt-6'}>
                    <Input value={ value.name } onChange={ onChange } type='text' placeholder='Имя' name='name'/>
                </div>
                <div className={'mt-6'}>
                    <Input value={ value.email } onChange={ onChange } type='email' placeholder='E-mail' name='email'/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ value.password } onChange={ onChange } type='password' placeholder='Пароль' name='password'/>
                </div>
            </Form>
            <FormLink text='Уже зарегистрированы?' url='/login' textLink='Войти'/>
        </>
    );
};

export default RegisterPage;
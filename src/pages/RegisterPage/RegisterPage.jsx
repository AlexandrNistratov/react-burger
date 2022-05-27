import React from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import {login, register} from "../../utils/Api";
import { setRegistrationAction } from "../../services/actions/registration";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {
    const dispatch = useDispatch();

    const form = useSelector(state => state.register.form);

    const onChange = e => {
        dispatch(setRegistrationAction({...form, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(form));
        dispatch(login(form));
    }

    return (
        <>
            <Form text='Регистрация' textButton='Зарегистрироваться' onSubmit={ handleSubmit }>
                <div className={'mt-6'}>
                    <Input value={ form.name || '' } onChange={ onChange } type='text' placeholder='Имя' name='name'/>
                </div>
                <div className={'mt-6'}>
                    <Input value={ form.email || '' } onChange={ onChange } type='email' placeholder='E-mail' name='email'/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ form.password || '' } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={ 'ShowIcon' }/>
                </div>
            </Form>
            <FormLink text='Уже зарегистрированы?' url='/login' textLink='Войти'/>
        </>
    );
};

export default RegisterPage;
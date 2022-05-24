import React, { useState } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import { handleResetPassword } from "../../utils/Api";
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {
    const history = useHistory();
    const [ value, setValue ] = useState({ password: '', token: '' });
    const { password, token } = value;

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleResetPassword(password, token)
            .then(res => {
                console.log(res)
                res && history.push('/');
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            <Form text='Восстановление пароля' textButton='Сохранить' onSubmit={ handleSubmit }>
                <div className={'mt-6'}>
                    <Input value={ password } onChange={ onChange } type='password' placeholder='Введите новый пароль' name='password' icon={ 'ShowIcon' }/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ token } onChange={ onChange } type='text' placeholder='Введите код из письма' name='token'/>
                </div>
            </Form>
            <FormLink text='Вспомнили пароль?' url='/login' textLink='Войти'/>
        </>
    );
};

export default ResetPassword;
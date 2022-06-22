import React, { useState, useEffect, FC, SyntheticEvent, ChangeEvent } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import { resetPassword } from "../../utils/Api";
import { useHistory, useLocation } from 'react-router-dom';
import { Location } from 'history';

const ResetPassword: FC = () => {
    const history = useHistory();
    const location = useLocation<Location>()
    const isForgotPassword = location.state?.pathname === '/forgot-password';

    const [ value, setValue ] = useState<{ password: string, token: string}>({ password: '', token: '' });
    const { password, token } = value;

    const onChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit: (e: SyntheticEvent) => void = (e) => {
        e.preventDefault();
        resetPassword(password, token)
            .then(res => {
                console.log(res)
                res && history.push('/');
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        !isForgotPassword && history.push('/forgot-password')
    }, [isForgotPassword, history])

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
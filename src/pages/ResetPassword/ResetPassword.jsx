import React, { useState } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input, ShowIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";

const ResetPassword = () => {
    const [ value, setValue ] = useState({ newPassword: '', emailCode: '' });

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
    return (
        <>
            <Form text='Восстановление пароля' textButton='Сохранить'>
                <div className={'mt-6'}>
                    <Input value={ value.newPassword } onChange={ onChange } type='password' placeholder='Введите новый пароль' name='newPassword' icon={ 'ShowIcon' }/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ value.emailCode } onChange={ onChange } type='text' placeholder='Введите код из письма' name='emailCode'/>
                </div>
            </Form>
            <FormLink text='Вспомнили пароль?' url='/login' textLink='Войти'/>
        </>
    );
};

export default ResetPassword;
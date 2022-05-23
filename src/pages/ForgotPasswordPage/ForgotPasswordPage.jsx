import React, { useState } from 'react';
import Form from "../../components/UI/Form/Form";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";

const ForgotPasswordPage = () => {
    const [ value, setValue ] = useState({ email: '' });

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
    return (
        <>
            <Form text='Восстановление пароля' textButton='Восстановить'>
                <div className={'mt-6 mb-6'}>
                    <Input value={ value.email } onChange={ onChange } type='email' placeholder='Укажите e-mail' name='email'/>
                </div>
            </Form>
            <FormLink text='Вспомнили пароль?' url='/login' textLink='Войти'/>
        </>
    );
};

export default ForgotPasswordPage;
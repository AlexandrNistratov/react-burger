import React, { useState } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import { useHistory } from 'react-router-dom';
import { handleForgotPassword } from "../../utils/Api";

const ForgotPasswordPage = () => {
    const history = useHistory();

    const [ value, setValue ] = useState({ email: '' });

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        handleForgotPassword(value.email)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        await history.push('/reset-password')
    }

    return (
        <>
            <Form text='Восстановление пароля' textButton='Восстановить' onSubmit={ handleSubmit }>
                <div className={'mt-6 mb-6'}>
                    <Input value={ value.email } onChange={ onChange } type='email' placeholder='Укажите e-mail' name='email'/>
                </div>
            </Form>
            <FormLink text='Вспомнили пароль?' url='/login' textLink='Войти'/>
        </>
    );
};

export default ForgotPasswordPage;
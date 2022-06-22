import React, {useState, useEffect, FC, SyntheticEvent, ChangeEvent} from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import { useHistory, useLocation } from 'react-router-dom';
import { forgotPassword } from "../../utils/Api";
import { useSelector } from "react-redux";

const ForgotPasswordPage: FC = () => {
    const history = useHistory();
    const location = useLocation();

    const [ value, setValue ] = useState({ email: '' });

    const onChange: (e: ChangeEvent<HTMLInputElement>) => void = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    // TODO типизировать на следующем спринте
    const data = useSelector((state: any) => state.userReducer);
    const { isAuth } = data

    const handleSubmit: (e: SyntheticEvent) => void = (e) => {
        e.preventDefault();
        forgotPassword(value.email)
            .then(res => {
                console.log(res)
                res && history.push({ pathname: '/reset-password', state: location});
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        isAuth && history.push('/')
    }, [isAuth, history])

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
import React, { useEffect } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import { register } from "../../utils/Api";
import { setEditAction } from "../../services/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateSuccessAction } from "../../services/actions/userActions";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.userReducer.user);
    const data = useSelector(state => state.userReducer);
    const { isAuth } = data

    const onChange = e => {
        dispatch(setEditAction({...user, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(user));
        dispatch(userUpdateSuccessAction(user))
    }

    useEffect(() => {
        isAuth && history.push('/')
    }, [isAuth, history])

    return (
        <>
            <Form text='Регистрация' textButton='Зарегистрироваться' onSubmit={ handleSubmit }>
                <div className={'mt-6'}>
                    <Input value={ user.name || '' } onChange={ onChange } type='text' placeholder='Имя' name='name'/>
                </div>
                <div className={'mt-6'}>
                    <Input value={ user.email || '' } onChange={ onChange } type='email' placeholder='E-mail' name='email'/>
                </div>
                <div className={'mt-6 mb-6'}>
                    <Input value={ user.password || '' } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={ 'ShowIcon' }/>
                </div>
            </Form>
            <FormLink text='Уже зарегистрированы?' url='/login' textLink='Войти'/>
        </>
    );
};

export default RegisterPage;
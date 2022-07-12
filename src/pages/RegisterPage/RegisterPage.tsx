import React, { ChangeEvent, FC, SyntheticEvent } from 'react';
import Form from "../../components/UI/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../../components/UI/FormLink/FormLink";
import { register } from "../../utils/Api";
import { useDispatch, useSelector } from '../../types';
import { userActionCreator } from "../../store/user/user.actions";

const RegisterPage: FC = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.userReducer.user);
    const { setEdit, userUpdateSuccess, loginSuccess } = userActionCreator;

    const onChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        dispatch(setEdit({...user, [e.target.name]: e.target.value}))
    }

    const handleSubmit: (e: SyntheticEvent) => void  = (e) => {
        e.preventDefault();
        dispatch(register(user));
        dispatch(userUpdateSuccess(user))
        setTimeout(() => {
            dispatch(loginSuccess(user))
        },3000)
    }

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
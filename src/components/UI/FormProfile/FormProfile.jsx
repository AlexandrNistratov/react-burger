import React from 'react';
import styles from './formProfile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userUpdate } from "../../../utils/Api";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setUserUpdateAction } from "../../../services/actions/user";
import clsx from "clsx";

const FormProfile = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);// стор с данными из авторизации

    const onChange = e => {
        dispatch(setUserUpdateAction({...user, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userUpdate(user));//обновляю тот стор с данными из авторизации
    }

    const handleCloseEdit = () => {
        dispatch(getUser());
    }

    return (
        <form className={ styles.form } onSubmit={ handleSubmit }>
            <div>
                <Input value={ user.name || '' } onChange={ onChange } type='text' placeholder='Имя' name='name' icon={ 'EditIcon' }/>
            </div>
            <div className={'mt-6'}>
                <Input value={ user.email || '' } onChange={ onChange } type='email' placeholder='Логин' name='email' icon={ 'EditIcon' }/>
            </div>
            <div className={'mt-6'}>
                <Input value={ user.password || '' } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={ 'EditIcon' }/>
            </div>
            <div className={ clsx(styles.button, 'mt-6') }>
                <Button type='secondary' size='large' onClick={ handleCloseEdit }>Отмена</Button>
                <Button type='primary' size='large'>Сохранить</Button>
            </div>
        </form>
    );
};

export default FormProfile;
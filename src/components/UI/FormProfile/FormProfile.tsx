import React, { FC } from 'react';
import styles from './formProfile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userUpdate } from "../../../utils/Api";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setEditAction } from "../../../services/actions/userActions";
import clsx from "clsx";

const FormProfile: FC = () => {
    const dispatch = useDispatch();

    // TODO типизировать на следующем спринте
    const user = useSelector((state: any) => state.userReducer.user);// стор с данными из авторизации

    const onChange: (e: any) => void = e => {
        dispatch(setEditAction({...user, [e.target.name]: e.target.value}))
    }

    const handleSubmit: (e: any) => void = (e) => {
        e.preventDefault();
        dispatch(userUpdate(user));//обновляю тот стор с данными из авторизации
    }

    const handleCloseEdit: (e: any) => void = (e) => {
        e.preventDefault();
        dispatch(getUser());
    }

    return (
        <form className={ styles.form } >
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
                <Button type='primary' size='large' onClick={ handleSubmit }>Сохранить</Button>
            </div>
        </form>
    );
};

export default FormProfile;
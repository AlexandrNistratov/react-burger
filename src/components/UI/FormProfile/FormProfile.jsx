import React, { useState } from 'react';
import styles from './formProfile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateSuccessAction } from "../../../services/actions/updateUser";
import {getUser, userUpdate} from "../../../utils/Api";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import clsx from "clsx";

const FormProfile = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    const updateUser = useSelector(state => state.updateUser);
    const { isUpdate } = updateUser;

    const [ state, setState ] = useState({
        name: isUpdate ? updateUser.user.name : user.user.name,
        email: isUpdate ? updateUser.user.email : user.user.email,
        password: isUpdate ? updateUser.user.password : ''
    });


    const onChange = e => {
        setState({...state, [e.target.name]: e.target.value})
        dispatch(userUpdateSuccessAction({...user, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userUpdate(user));
        console.log(updateUser)
    }

    const handleCloseEdit = () => {
        dispatch(getUser());
        setState({...user, password: ''})
    }


    return (
        <form className={ styles.form } onSubmit={ handleSubmit }>
            <div>
                <Input value={ state.name } onChange={ onChange } type='text' placeholder='Имя' name='name' icon={ 'EditIcon' }/>
            </div>
            <div className={'mt-6'}>
                <Input value={ state.email } onChange={ onChange } type='email' placeholder='Логин' name='email' icon={ 'EditIcon' }/>
            </div>
            <div className={'mt-6'}>
                <Input value={ state.password } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={ 'EditIcon' }/>
            </div>
            <div className={ clsx(styles.button, 'mt-6') }>
                <Button type='secondary' size='large' onClick={ handleCloseEdit }>Отмена</Button>
                <Button type='primary' size='large'>Сохранить</Button>
            </div>
        </form>
    );
};

export default FormProfile;
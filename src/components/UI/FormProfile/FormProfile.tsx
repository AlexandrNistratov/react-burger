import React, {FC, FormEvent, ChangeEvent, SyntheticEvent} from 'react';
import styles from './formProfile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from '../../../types';
import { getUser, userUpdate } from "../../../utils/Api";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setEditAction } from "../../../services/actions/userActions";
import clsx from "clsx";

const FormProfile: FC = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.userReducer.user);// стор с данными из авторизации

    const onChange: (e: ChangeEvent<HTMLInputElement>) => void = e => {
        dispatch(setEditAction({...user, [e.target.name]: e.target.value}))
    }

    const handleSubmit: (e: FormEvent) => void = (e) => {
        e.preventDefault();
        dispatch(userUpdate(user));//обновляю тот стор с данными из авторизации
    }

    const handleCloseEdit: (e: SyntheticEvent) => void = (e) => {
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
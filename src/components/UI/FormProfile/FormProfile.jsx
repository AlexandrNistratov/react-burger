import React, { useState } from 'react';
import styles from './formProfile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const FormProfile = () => {
    const [ value, setValue ] = useState({ name: '', login: '', password: ''});

    const onChange = e => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        console.log('мы в handleSubmit')
    }

    return (
        <form className={ styles.form } onSubmit={ handleSubmit }>
            <div>
                <Input value={ value.name } onChange={ onChange } type='text' placeholder='Имя' name='name' icon={ 'EditIcon' }/>
            </div>
            <div className={'mt-6'}>
                <Input value={ value.login } onChange={ onChange } type='text' placeholder='Логин' name='login' icon={ 'EditIcon' }/>
            </div>
            <div className={'mt-6'}>
                <Input value={ value.password } onChange={ onChange } type='password' placeholder='Пароль' name='password' icon={ 'EditIcon' }/>
            </div>
        </form>
    );
};

export default FormProfile;
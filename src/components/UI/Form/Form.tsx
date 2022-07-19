import React, { FC } from 'react';
import styles from './form.module.css';
import clsx from "clsx";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

type TForm = {
    text: string;
    textButton: string | number;
    onSubmit: (item: any) => void;
}

const Form: FC<TForm> = ({ text, children, textButton, onSubmit }) => {
    return (
        <form className={ styles.main } onSubmit={ onSubmit }>
            <h1 className={ clsx(styles.header, 'text_type_main-medium')}>{ text }</h1>
            { children }
            <div className={ clsx(styles.button, 'mb-20') }>
                <Button type='primary' size='large' htmlType='submit'>{ textButton }</Button>
            </div>
        </form>
    );
};

export default Form;
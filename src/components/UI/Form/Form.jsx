import React from 'react';
import styles from './form.module.css';
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

const Form = ({ text, children, textButton }) => {
    return (
        <form className={ styles.main }>
            <h1 className={ clsx(styles.header, 'text_type_main-medium')}>{ text }</h1>
            { children }
            <div className={ clsx(styles.button, 'mb-20') }>
                <Button type='primary' size='large'>{ textButton }</Button>
            </div>
        </form>
    );
};

Form.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    textButton: PropTypes.string.isRequired
}

export default Form;
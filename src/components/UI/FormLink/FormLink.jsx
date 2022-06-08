import React from 'react';
import styles from './formLink.module.css';
import { Link } from 'react-router-dom';
import clsx from "clsx";
import PropTypes from "prop-types";

const FormLink = ({ text, url, textLink}) => {
    return (
        <section className={ clsx(styles.main, 'mb-4')}>
            <p className={'text text_type_main-default text_color_inactive mr-2'}>{ text }</p>
            <Link className={ clsx(styles.link, 'text text_type_main-default')  } to={ url }>{ textLink }</Link>
        </section>
    );
};

FormLink.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    textLink: PropTypes.string.isRequired
}

export default FormLink;
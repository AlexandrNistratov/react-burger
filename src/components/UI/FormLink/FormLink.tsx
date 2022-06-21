import React, { FC } from 'react';
import styles from './formLink.module.css';
import { Link } from 'react-router-dom';
import clsx from "clsx";

type TFormLink = {
    text: string;
    url: string;
    textLink: string;
}

const FormLink: FC<TFormLink> = ({ text, url, textLink}) => {
    return (
        <section className={ clsx(styles.main, 'mb-4')}>
            <p className={'text text_type_main-default text_color_inactive mr-2'}>{ text }</p>
            <Link className={ clsx(styles.link, 'text text_type_main-default')  } to={ url }>{ textLink }</Link>
        </section>
    );
};

export default FormLink;
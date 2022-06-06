import React from 'react';
import styles from './notFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={ styles.main }>
            <p className='text text_type_main-large'>404</p>
            <p className='text text_type_main-medium'>
                Такой страницы не существует.
            </p>
        </div>
    );
};

export default NotFoundPage;
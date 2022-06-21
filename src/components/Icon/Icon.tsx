import React, { FC } from 'react';
import styles from './icon.module.css';

type TIcon = {
    icon: string;
}

const Icon: FC<TIcon> = ({ icon }) => {
    return (
        <img className={ styles.icon } src={ icon } alt="Иконка"/>
    );
};

export default Icon;
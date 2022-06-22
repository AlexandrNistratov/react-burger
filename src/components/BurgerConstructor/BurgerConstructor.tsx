import React, { FC } from 'react';
import styles from './burgerConstructor.module.css';
import ConstructorList from "../ConstructorList/ConstructorList";
import TotalConstructor from "../TotalConstructor/TotalConstructor";

const BurgerConstructor: FC = () => {
    return (
        <section className={ styles.main }>
            <ConstructorList />
            <TotalConstructor/>
        </section>
    );
};


export default BurgerConstructor;
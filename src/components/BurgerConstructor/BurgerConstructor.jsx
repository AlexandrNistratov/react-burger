import React from 'react';
import styles from './burgerConstructor.module.css';
import ConstructorList from "../ConstructorList/ConstructorList";
import TotalConstructor from "../TotalConstructor/TotalConstructor";
import PropTypes from "prop-types";
import {dataPropTypes} from "../../utils/proptypes";

const BurgerConstructor = () => {

    return (
        <section className={ styles.main }>
            <ConstructorList />
            <TotalConstructor />
        </section>
    );
};


export default BurgerConstructor;
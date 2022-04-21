import React from 'react';
import styles from './icon.module.css';
import PropTypes from "prop-types";

const Icon = ({ icon }) => {
    return (
        <img className={styles.icon} src={ icon } alt="Иконка"/>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired
}
export default Icon;
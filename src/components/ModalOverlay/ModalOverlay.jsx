import React from 'react';
import styles from'./modalOverlay.module.css';
import clsx from "clsx";
import PropTypes from "prop-types";

const ModalOverlay = ({children, isOpen, closePopup}) => {
    return (
        <section className={clsx(styles.main, {[styles.hidden] : !isOpen})} onClick={closePopup}>
            {children}
        </section>
    );
};

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired
}

export default ModalOverlay;
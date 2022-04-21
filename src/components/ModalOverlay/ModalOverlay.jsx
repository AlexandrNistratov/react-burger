import React from 'react';
import styles from'./modalOverlay.module.css';
import clsx from "clsx";

const ModalOverlay = ({children, isOpen, closePopup}) => {
    return (
        <section className={clsx(styles.main, {[styles.hidden] : !isOpen})} onClick={closePopup}>
            {children}
        </section>
    );
};

export default ModalOverlay;
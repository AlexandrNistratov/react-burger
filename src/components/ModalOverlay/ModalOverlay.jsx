import React from 'react';
import styles from'./modalOverlay.module.css';

const ModalOverlay = ({children, isOpen}) => {
    return (
        <section className={isOpen ? styles.main : styles.hidden}>
            {children}
        </section>
    );
};

export default ModalOverlay;
import React from 'react';
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({children, isOpen, toggleModal, header}) => {
    const reactModals = document.getElementById('modals');

    return ReactDOM.createPortal(
        <ModalOverlay isOpen={isOpen}>
            <section className={styles.main}>
                <div className={styles.header}>
                    <h1 className={`${styles.title} text_type_main-large`}>{header}</h1>
                    <CloseIcon type="primary" onClick={toggleModal}/>
                </div>
                {children}
            </section>
        </ModalOverlay>, reactModals
        )
};

export default Modal;
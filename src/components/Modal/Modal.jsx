import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";

const Modal = ({children, isOpen, closePopup, header}) => {
    const reactModals = document.getElementById('modals');

    return ReactDOM.createPortal(
        <ModalOverlay isOpen={isOpen} closePopup={closePopup}>
            <section className={styles.main}>
                <div className={styles.header}>
                    <h1 className={clsx(styles.title, 'text_type_main-large')}>{header}</h1>
                    <CloseIcon type="primary" onClick={closePopup}/>
                </div>
                {children}
            </section>
        </ModalOverlay>, reactModals
        )
};

Modal.proptypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
    header: PropTypes.string
}

export default Modal;
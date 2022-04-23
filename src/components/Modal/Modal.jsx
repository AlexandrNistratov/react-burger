import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";

const Modal = ({ children, isOpen, closePopup, header }) => {
    const reactModals = document.getElementById('modals');

    const closePopupEsc = (e) => {
        if (e.key ==='Escape') {
            closePopup()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closePopupEsc)

        return () => document.removeEventListener('keydown', closePopupEsc)
    })

    return ReactDOM.createPortal(
        <>
            <ModalOverlay isOpen={ isOpen } closePopup={ closePopup } />
            <section className={ styles.main }>
                <div className={ styles.header }>
                    <h1 className={ clsx(styles.title, 'text_type_main-large') }>{ header }</h1>
                    <div className={ styles.icon }>
                        <CloseIcon type="primary" onClick={ closePopup }/>
                    </div>
                </div>
                { children }
            </section>
        </>, reactModals
        )
};

Modal.proptypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
    header: PropTypes.string
}

export default Modal;
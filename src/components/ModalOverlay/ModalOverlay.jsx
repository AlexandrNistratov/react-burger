import React, { useRef, useEffect } from 'react';
import styles from'./modalOverlay.module.css';
import clsx from "clsx";
import PropTypes from "prop-types";

const ModalOverlay = ({isOpen, closePopup}) => {

    const overlayRef = useRef(null)

    const closeOverlay = (event) => {
        if(isOpen && overlayRef.current && overlayRef.current.contains(event.target)){
            closePopup();
       }
    }

    useEffect(() => {
        isOpen && document.addEventListener('click', closeOverlay)
        return () => document.removeEventListener('click', closeOverlay)
    })

    return (
        <section className={clsx(styles.main, {[styles.hidden] : !isOpen})} ref={overlayRef} />

    );
};

ModalOverlay.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired
}

export default ModalOverlay;
import React, { useRef, FC, MouseEvent } from 'react';
import styles from'./modalOverlay.module.css';
import clsx from "clsx";

type TModalOverlay = {
    isOpen: boolean;
    closePopup: () => void;
}

const ModalOverlay: FC<TModalOverlay> = ({ isOpen, closePopup }) => {

    const overlayRef = useRef<HTMLInputElement>(null)

    const closeOverlay: (event: MouseEvent<HTMLInputElement>) => void = (event) => {
        if(isOpen && overlayRef.current && overlayRef.current.contains(event.target as Node)){
            closePopup()}
    }

    return (
        <section className={ clsx(styles.main, {[styles.hidden] : !isOpen}) } ref={ overlayRef } onClick={ closeOverlay }/>

    );
};

export default ModalOverlay;
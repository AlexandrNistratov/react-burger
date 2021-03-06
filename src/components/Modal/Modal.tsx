import React, { useEffect, FC } from 'react';
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";

type IModal = {
    isOpen: boolean;
    closePopup: () => void;
    header?: string | number;
    isOrders?: boolean;
}

const ModalIngredients: FC<IModal> = ({ children, header, closePopup }) => {
    return (
        <section className={ styles.main }>
            <div className={ styles.header }>
                <h1 className={ clsx(styles.title, 'text_type_main-large') }>{ header }</h1>
                <div className={ styles.icon }>
                    <CloseIcon type="primary" onClick={ closePopup }/>
                </div>
            </div>
            { children }
        </section>
    );
}

const ModalOrderInfo: FC<IModal> = ({ children, header, closePopup }) => {
    return (
      <section className={ clsx(styles.main, styles.main__orders) }>
          <div className={ styles.header }>
              <h1 className={ clsx(styles.title, 'text_type_digits-default') }>{ `#${ header }` }</h1>
              <div className={ styles.icon }>
                  <CloseIcon type="primary" onClick={ closePopup }/>
              </div>
          </div>
          { children }
      </section>
    );
}

const Modal: FC<IModal> = ({ isOrders, children, isOpen, closePopup, header }) => {
    const reactModals: any = document.getElementById('modals');

    const closePopupEsc: (e: KeyboardEvent) => void = (e) => {
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
            {isOrders ?
                <ModalOrderInfo isOpen={ isOpen } closePopup={ closePopup } header={ header } children={ children } />
                :
                <ModalIngredients isOpen={ isOpen } closePopup={ closePopup } header={ header } children={children}/>
            }
        </>, reactModals
        )
};

export default Modal;
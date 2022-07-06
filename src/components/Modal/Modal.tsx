import React, { useEffect, FC } from 'react';
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import { useSelector } from "../../types";
import OrderInfo from "../OrderInfo/OrderInfo";
import { TData } from "../../types/types";

type IModal = {
    isOpen: boolean;
    closePopup: () => void;
    header?: string;
    isOrders?: boolean;
    item?: TData
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

    const ingredients = useSelector(state => state.data.ingredientsData).slice(0, 6)

    return (
      <section className={ clsx(styles.main, styles.main__orders) }>
          <div className={ styles.header }>
              <h1 className={ clsx(styles.title, 'text_type_digits-default') }>{ header }</h1>
              <div className={ styles.icon }>
                  <CloseIcon type="primary" onClick={ closePopup }/>
              </div>
          </div>
          <div className={ styles.content }>
              <h2 className={ clsx(styles.subtitle, 'text_type_main-medium') }>cdcdcd</h2>
              <p className={ clsx(styles.status, 'text_type_main-default') }>cdcdcdc</p>
              <h2 className={ clsx(styles.subtitle, styles.structure, 'text_type_main-medium') }>Состав:</h2>
              <div className={ styles.list }>
                  {ingredients.map(item => {
                      return (
                          <OrderInfo key={ item._id } item={item}/>
                      );
                  })}
              </div>
              <div className={ styles.wrapper }>
                  <p className={ clsx(styles.date, 'text_type_main-default text_color_inactive') }>cccwwwcwccwwcwcwccwwcwccw</p>
                  <div className={ styles.total }>
                      <p className={ clsx(styles.price, 'text_type_digits-default') }> 121</p>
                      <div className={ styles.icon }>
                          <CurrencyIcon type='primary' />
                      </div>
                  </div>
              </div>
          </div>

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
                <ModalOrderInfo isOpen={ isOpen } closePopup={ closePopup } header={ header } />
                :
                <ModalIngredients isOpen={ isOpen } closePopup={ closePopup } header={ header } children={children}/>
            }
            {/*<section className={ styles.main }>*/}
            {/*    <div className={ styles.header }>*/}
            {/*        <h1 className={ clsx(styles.title, 'text_type_main-large') }>{ header }</h1>*/}
            {/*        <div className={ styles.icon }>*/}
            {/*            <CloseIcon type="primary" onClick={ closePopup }/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    { children }*/}
            {/*</section>*/}
        </>, reactModals
        )
};

export default Modal;
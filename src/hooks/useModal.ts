import { useState } from 'react';

export const useModal = ()  => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
    const closePopupEsc = () => setIsOpen(false);

    return { isOpen, openPopup, closePopup, closePopupEsc };
};

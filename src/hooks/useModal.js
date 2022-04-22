import {useState, useEffect} from 'react';

export const useModal = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const openPopup = () => setIsOpen(true)
    const closePopup = () => setIsOpen(false)

    const closePopupEsc = (e) => {
        if (e.key ==='Escape') {
            closePopup()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closePopup)

        return () => document.removeEventListener('keydown', closePopup)

    })

    return { isOpen, openPopup, closePopup, closePopupEsc };
};

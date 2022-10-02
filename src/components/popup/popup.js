import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './popup.module.css';

const modalRoot = document.querySelector('#modal');

export function Popup({ setPopupOpen, children }) {
  useEffect(() => {
    document.addEventListener('keydown', handleCloseEsc);
    return () => document.removeEventListener('keydown', handleCloseEsc);
  });

  const handleCloseEsc = (e) => e.key === 'Escape' && setPopupOpen(false);

  return ReactDOM.createPortal(
    <div
      className={style.popup}
      onClick={(event) => event.target === event.currentTarget && setPopupOpen(false)}
    >
      {children}
    </div>,
    modalRoot
  );
}

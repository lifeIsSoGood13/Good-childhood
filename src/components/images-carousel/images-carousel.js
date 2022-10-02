import React, { useState, useContext, useRef } from 'react';
import classnames from 'classnames';
import style from './images-carousel.module.css';
import { BooksListContext } from '../../services/AppContext';

export function ImagesCarousel({ book }) {
  const booksListData = useContext(BooksListContext);
  const slider = useRef(null);
  const image = useRef(0);
  const [currentSize, setCurrentSize] = useState(booksListData.size);
  const [position, setPosition] = useState(1);

  const handlePrevButtonClick = () => {
    if (position === 1) {
      return;
    } else if (position === 2) {
      setPosition((currentPosition) => currentPosition - 1);
      slider.current.style = `transform: translateX(0px)`;
    } else {
      setPosition((currentPosition) => {
        const newPosition = currentPosition - 1;
        const newOffset = (newPosition - 1) * (image.current.clientWidth + 23);
        slider.current.style = `transform: translateX(-${newOffset}px)`;
        return newPosition;
      });
    }
  };

  const handleNextButtonClick = () => {
    if (position === book.images.length) {
      return;
    } else {
      setPosition((currentPosition) => {
        const newPosition = currentPosition + 1;
        const newOffset = (newPosition - 1) * (image.current.clientWidth + 23);
        slider.current.style = `transform: translateX(-${newOffset}px)`;
        return newPosition;
      });
    }
  };

  const setImagePosition = () => {
    if (position === 1) {
      return;
    } else {
      setPosition(1);
      slider.current.style = `transform: translateX(${0}px)`;
      setCurrentSize(booksListData.size);
    }
  };

  return (
    <section className={style.container} aria-label="Иллюстрации из книги">
      <h2 className={style.title}>Иллюстрации</h2>
      <div className={style.window}>
        {currentSize !== booksListData.size && setImagePosition()}
        <ul className={style.track} ref={slider}>
          {book &&
            book.images.map((item, index) => (
              <li
                key={index}
                className={style.imageWrapper}
                onClick={() => {
                  booksListData.setBookImage(item);
                  booksListData.setPopupOpen(true);
                }}
              >
                <img className={style.image} src={item} alt="Картинка" ref={image} />
              </li>
            ))}
        </ul>
      </div>
      <div className={style.infoWrapper}>
        <button
          className={position === 1 ? style.leftButton : classnames(style.leftButton, style.leftButtonActive)}
          type="button"
          onClick={handlePrevButtonClick}
        ></button>
        <span className={style.infoText}>
          {position} / {book && book.images.length}
        </span>
        <button
          className={
            book && position === book.images.length
              ? style.rightButton
              : classnames(style.rightButton, style.rightButtonActive)
          }
          type="button"
          onClick={handleNextButtonClick}
        ></button>
      </div>
    </section>
  );
}

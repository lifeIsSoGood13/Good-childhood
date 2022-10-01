import React, { useState, useContext, useRef } from 'react';
import classnames from 'classnames';
import style from './images-carousel.module.css';
import { BooksListContext } from '../../services/AppContext';

export function ImagesCarousel({ book }) {
  const booksListData = useContext(BooksListContext);
  const slider = useRef(null);
  const image = useRef(0);
  const [offset, setOffset] = useState(0);
  const [position, setPosition] = useState(1);

  const handlePrevClick = () => {
    if (offset === 0) {
      return;
    } else {
      setOffset((currentOffset) => {
        const newOffset = currentOffset + (image.current.clientWidth + 23);
        slider.current.style = `transform: translateX(${newOffset}px)`;
        return newOffset;
      });
      setPosition((currentPosition) => currentPosition - 1);
    }
  };

  const handleNextClick = () => {
    if (offset === -((book.images.length - 1) * (image.current.clientWidth + 23))) {
      return;
    } else {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - (image.current.clientWidth + 23);
        slider.current.style = `transform: translateX(${newOffset}px)`;
        return newOffset;
      });
      setPosition((currentPosition) => currentPosition + 1);
    }
  };

  return (
    <section className={style.container} aria-label="Иллюстрации из книги">
      <h2 className={style.title}>Иллюстрации</h2>
      <div className={style.window}>
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
          className={offset === 0 ? style.leftButton : classnames(style.leftButton, style.leftButtonActive)}
          type="button"
          onClick={handlePrevClick}
        ></button>
        <span className={style.infoText}>
          {position} / {book && book.images.length}
        </span>
        <button
          className={
            offset === -((book && book.images.length - 1) * (image.current.clientWidth + 23))
              ? style.rightButton
              : classnames(style.rightButton, style.rightButtonActive)
          }
          type="button"
          onClick={handleNextClick}
        ></button>
      </div>
    </section>
  );
}

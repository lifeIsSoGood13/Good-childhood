import React, { useState, useContext, useRef } from 'react';
import classnames from 'classnames';
import style from './images-carousel.module.css';
import { BooksListContext } from '../../services/AppContext';

export function ImagesCarousel({ book }) {
  const booksListData = useContext(BooksListContext);
  const slider = useRef(null);
  const image = useRef(null);
  const [initialWindowSize, setInitialWindowSize] = useState(booksListData.size);
  const [imagePosition, setImagePosition] = useState(1);

  const setImageParams = (position, width, operator) => {
    setImagePosition((currentPosition) => {
      const newPosition = operator === 'plus' ? currentPosition + position : currentPosition - position;
      const newOffset = (newPosition - 1) * width;
      slider.current.style = `transform: translateX(-${newOffset}px)`;
      return newPosition;
    });
  };

  const handlePrevButtonClick = () => {
    imagePosition === 1 && setImageParams(0, 0, 'plus');
    imagePosition === 2 && setImageParams(1, 0, 'minus');
    imagePosition > 2 && setImageParams(1, image.current.clientWidth + 23, 'minus');
  };

  const handleNextButtonClick = () => {
    imagePosition < book.images.length && setImageParams(1, image.current.clientWidth + 23, 'plus');
  };

  const setSliderPosition = (width) => {
    slider.current.style = `transform: translateX(-${(imagePosition - 1) * width}px)`;
    setInitialWindowSize(booksListData.size);
  };

  const selectSliderPosition = () => {
    imagePosition === 1 && setSliderPosition(0);
    booksListData.size > 1160 && setSliderPosition(803);
    booksListData.size > 665 && booksListData.size <= 1160 && setSliderPosition(623);
    booksListData.size <= 665 && setSliderPosition(316);
  };

  return (
    <section className={style.container} aria-label="Иллюстрации из книги">
      <h2 className={style.title}>Иллюстрации</h2>
      <div className={style.window}>
        {initialWindowSize !== booksListData.size && selectSliderPosition()}
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
          className={
            imagePosition === 1 ? style.leftButton : classnames(style.leftButton, style.leftButtonActive)
          }
          type="button"
          onClick={handlePrevButtonClick}
        ></button>
        <span className={style.infoText}>
          {imagePosition} / {book && book.images.length}
        </span>
        <button
          className={
            book && imagePosition === book.images.length
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

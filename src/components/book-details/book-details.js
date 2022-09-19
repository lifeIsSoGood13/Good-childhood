import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import style from './book-details.module.css';
import { BooksListContext } from '../../services/AppContext';

export function BookDetails() {
  const booksListData = useContext(BooksListContext);
  const id = useParams();
  const book = name();

  function name() {
    return booksListData.books.length && booksListData.books.find((item) => item.link_param === id.name);
  }

  return (
    <section className={style.bookDetails}>
      <div className={style.bookDetailsWrapper}>
        <div className={style.imageContainer}>
          <img className={style.image} src={book.image} alt={book.title} />
        </div>
        <div className={style.bookDescription}>
          <h1 className={style.title}>{book.title}</h1>
          <p className={style.author}>
            <span>Автор: </span>
            {book.author}
          </p>
          <p className={style.annotation}>{book.annotation}</p>
          <ul className={style.prices}>
            <li className={style.buttonWrapper}>
              <button
                className={style.buttonKonzeptual}
                onClick={() => (window.location.href = `${book.konz_href}`)}
              >
                Купить в интеренет-магазине &laquo;Концептуал&raquo;
              </button>
              <span className={style.price}>{book.konz_price} руб.</span>
            </li>
            <li className={style.buttonWrapper}>
              <button
                className={style.buttonWildberries}
                onClick={() => (window.location.href = `${book.wb_href}`)}
              >
                Wildberries
              </button>
              <span className={style.price}>{book.wb_price} руб.</span>
            </li>
            <li className={style.buttonWrapper}>
              <button
                className={style.buttonOzon}
                onClick={() => (window.location.href = `${book.ozon_href}`)}
              >
                Ozon
              </button>
              <span className={style.price}>{book.ozon_price} руб.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

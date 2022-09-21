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
          <div className={style.descriptionPricesWrapper}>
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
      </div>
      <div className={style.afterDescriptionPricesWrapper}>
        <ul className={style.prices}>
          <li className={style.buttonWrapper}>
            <button
              className={style.buttonKonzeptual}
              onClick={() => window.open(`${book.konz_href}`, '_blank')}
            >
              Купить в интеренет-магазине &laquo;Концептуал&raquo;
            </button>
            <span className={style.price}>{book.konz_price} руб.</span>
          </li>
          <li className={style.buttonWrapper}>
            <button
              className={style.buttonWildberries}
              onClick={() => window.open(`${book.wb_href}`, '_blank')}
            >
              Wildberries
            </button>
            <span className={style.price}>{book.wb_price} руб.</span>
          </li>
          <li className={style.buttonWrapper}>
            <button className={style.buttonOzon} onClick={() => window.open(`${book.ozon_href}`, '_blank')}>
              Ozon
            </button>
            <span className={style.price}>{book.ozon_price} руб.</span>
          </li>
        </ul>
      </div>
      <div className={style.teachWrapper}>
        <p className={style.mainTeach}>Научит ребёнка</p>
        <p className={style.teachDescription}>{book.teach}</p>
      </div>
      {book.has_video && (
        <>
          <h2 className={style.headVideo}>Видео о книге</h2>
          <div id="video" className={style.video}>
            <div id="my_playlist"></div>
            <div id="vk_playlist_-147845620_5"></div>
            <div id="vk_playlist_-147845620_508"></div>
            <iframe
              src="https://vk.com/video_ext.php?oid=-136337801&id=456239473&hash=160120364c694f2f&hd=2"
              width="100%"
              height="664px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            ></iframe>
          </div>
        </>
      )}
    </section>
  );
}

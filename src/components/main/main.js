import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.css';
import FirstCloud from '../../images/first-cloud.svg';
import SecondCloud from '../../images/second-cloud.svg';
import ThirdCloud from '../../images/third-cloud.svg';
import { Book } from '../book/book';
import { BooksListContext } from '../../services/AppContext';
import { Logo } from '../logo/logo';

export function Main() {
  const booksListData = useContext(BooksListContext);

  return (
    <main className={style.main}>
      <Logo position={'main'} />
      <h1 className={style.tagline}>
        Проект для повышения осознанности общества в&nbsp;деле воспитания детей
      </h1>
      <ul className={style.description}>
        <li className={style.descriptionItem}>
          <img className={style.cloudImage} src={FirstCloud} alt="Мы выпускаем развивающие книги" />
          <p className={style.descriptionText}>
            Издаем развивающие детские книги, созданные на основе правильных и психологически безопасных
            историй.
          </p>
        </li>
        <li className={style.descriptionItem}>
          <img className={style.cloudImage} src={SecondCloud} alt="Разбираем популярные медиа-продукты" />
          <p className={style.descriptionText}>
            Рассказываем, как именно образы из&nbsp;книг, мультфильмов и&nbsp;других популярных медиа влияют
            на&nbsp;детей, а&nbsp;значит&nbsp;&mdash; на&nbsp;наше будущее.
          </p>
        </li>
        <li className={style.descriptionItem}>
          <img className={style.cloudImage} src={ThirdCloud} alt="Проводим вебинары и форумы" />
          <p className={style.descriptionText}>
            Проводим вебинары, форумы по&nbsp;актуальным темам воспитания детей, здоровьесберегающим
            технологиям и&nbsp;многом другом.
          </p>
        </li>
      </ul>
      <section className={style.books}>
        <h2 className={style.booksTitle}>Новинки издательства</h2>
        <div className={style.booksContainer}>
          {window.innerWidth <= 665
            ? booksListData.books.slice(0, 2).map((item) => (
                <Link className={style.link} key={item.id} to={`/books/${item.link_param}`}>
                  <Book key={item.id} {...item} />
                </Link>
              ))
            : booksListData.books.slice(0, 3).map((item) => (
                <Link className={style.link} key={item.id} to={`/books/${item.link_param}`}>
                  <Book key={item.id} {...item} />
                </Link>
              ))}
        </div>
      </section>
      <section className={style.video}>
        <h2 id="video" className={style.videoTitle}>
          Видеоконтент проекта
        </h2>
        <div className={style.videoContainer}>
          <iframe
            title="Видеоконтент проекта"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PLi6aBhEuWKGOuI9HG_K2nEqR7GfuB59sL"
            width="100%"
            height="664px"
            allow="autoplay; encrypted-media; clipboard-write; fullscreen; gyroscope; picture-in-picture;"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

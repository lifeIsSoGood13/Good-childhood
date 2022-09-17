import React from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.css';
import FirstCloud from '../../images/first-cloud.png';
import SecondCloud from '../../images/second-cloud.png';
import ThirdCloud from '../../images/third-cloud.png';
import { Book } from '../book/book';
import { BooksContext } from '../../services/AppContext';

export function Main({ jumpToTop }) {
  const items = React.useContext(BooksContext);
  return (
    <main>
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
            Рассказываем, как именно образы из книг, мультфильмов и других популярных медиа влияют на детей, а
            значит &mdash; на наше будущее.
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
        <h2 className={style.headingNewBooks}>Новинки издательства</h2>
        <div></div>
        <div className={style.booksWrap}>
          {items.slice(0, 3).map((item) => (
            <Link className={style.link} key={item.id} to={`/books/${item.link_param}`}>
              <Book key={item.id} {...item} jumpToTop={jumpToTop} />
            </Link>
          ))}
        </div>
      </section>
      <section id="video" className={style.books}>
        <h2 className={style.headingVideos}>Видеоконтент проекта</h2>
        <div id="my_playlist"></div>
        <div id="vk_playlist_-147845620_5"></div>
        <div id="vk_playlist_-147845620_508"></div>
        <iframe
          className={style.video}
          src="https://vk.com/video_ext.php?oid=-136337801&id=456239500&hash=a5083d250d3f61c2&hd=2"
          width="100%"
          height="664px"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
        ></iframe>
      </section>
    </main>
  );
}

import React from 'react';
import style from './app.module.css';
import { Header } from '../header/header';
import Iframe from 'react-iframe';
import FirstCloud from '../../images/first-cloud.png';
import SecondCloud from '../../images/second-cloud.png';
import ThirdCloud from '../../images/third-cloud.png';
import { Book } from '../book/book';
import { Footer } from '../footer/footer';

export function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://632054139f82827dcf2a1cca.mockapi.io/books')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.App}>
      <Header />
      <main>
        <h1 className={style.tagline}>
          Проект для повышения осознанности общества в&nbsp;деле воспитания детей
        </h1>
        <ul className={style.description}>
          <li className={style.descriptionItem}>
            <img className={style.cloudImage} src={FirstCloud} alt="" />
            <p className={style.descriptionText}>
              Мы&nbsp;выпускаем развивающие книги, созданные по&nbsp;критериям правильных детских книг,
              разработанных лучшими психологами и&nbsp;сказкотерапевтами.
            </p>
          </li>
          <li className={style.descriptionItem}>
            <img className={style.cloudImage} src={SecondCloud} alt="" />
            <p className={style.descriptionText}>
              Разбираем воспитательные посылы популярных медиа-продуктов.
            </p>
          </li>
          <li className={style.descriptionItem}>
            <img className={style.cloudImage} src={ThirdCloud} alt="" />
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
              <Book key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section id="video" className={style.books}>
          <h2 className={style.headingVideos}>Видеоконтент проекта</h2>
          <iframe
            className={style.video}
            src="https://vk.com/video_ext.php?oid=-136337801&id=456239500&hash=a5083d250d3f61c2&hd=2"
            width="100%"
            height="664px"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}

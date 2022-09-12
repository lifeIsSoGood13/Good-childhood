import style from './app.module.css';
import { Header } from '../header/header';
import FirstCloud from '../../images/first-cloud.png';
import SecondCloud from '../../images/second-cloud.png';
import ThirdCloud from '../../images/third-cloud.png';
import { Book } from '../book/book';

const data = [
  {
    id: 1,
    image: 'https://konzeptual.ru/image/cache/catalog/products/49bf2756c304a8aeff27965bc91c7377-540x860.jpg',
    title: 'Непослушный котенок',
    author: 'Иван Белышев, Борис Житков',
  },
  {
    id: 2,
    image: 'https://konzeptual.ru/image/cache/catalog/products/49bf2756c304a8aeff27965bc91c7377-540x860.jpg',
    title: 'Непослушный котенок',
    author: 'Иван Белышев, Борис Житков',
  },
  {
    id: 3,
    image: 'https://konzeptual.ru/image/cache/catalog/products/49bf2756c304a8aeff27965bc91c7377-540x860.jpg',
    title: 'Непослушный котенок и маленький сорванец и звери на луне',
    author: 'Иван Белышев, Борис Житков',
  },
];

export function App() {
  return (
    <div className={style.App}>
      <Header />
      <main>
        <h1 className={style.tagline}>
          Проект для повышения осознанности общества в&nbsp;деле воспитания детей.
        </h1>
        <ul className={style.description}>
          <li className={style.descriptionItem}>
            <img className={style.cloudImage} src={FirstCloud} alt="" />
            <p className={style.descriptionText}>
              Мы&nbsp;выпускаем развивающие книги, созданные по&nbsp;критериям правильных детских книг
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
              Проводим вебинары, форумы по&nbsp;актуальным темам о&nbsp;воспитаний, здоровьесберегающим
              технологиям и&nbsp;многом другом.
            </p>
          </li>
        </ul>
        <section className={style.books}>
          <h2 className={style.headingNewBooks}>Новинки издательства</h2>
          <div></div>
          <div className={style.booksWrap}>
            {data.map((item) => (
              <Book key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section className={style.books}>
          <h2 className={style.headingVideos}>Видеоконтент проекта</h2>
        </section>
      </main>
    </div>
  );
}

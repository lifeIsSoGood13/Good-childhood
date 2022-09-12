import style from './app.module.css';
import { Header } from '../header/header';
import Iframe from 'react-iframe';
import FirstCloud from '../../images/first-cloud.png';
import SecondCloud from '../../images/second-cloud.png';
import ThirdCloud from '../../images/third-cloud.png';
import { Book } from '../book/book';
import { Footer } from '../footer/footer';

const data = [
  {
    id: 1,
    image: 'https://konzeptual.ru/image/cache/catalog/products/49bf2756c304a8aeff27965bc91c7377-540x860.jpg',
    title: 'Непослушный котенок',
    author: 'Иван Белышев',
  },
  {
    id: 2,
    image: 'https://konzeptual.ru/image/cache/catalog/products/418a22a71e1f04fe883c8811d531be2c-540x860.jpg',
    title: 'Бригада смышлёных. Повесть [1947]',
    author: 'Владимир Курочкин',
  },
  {
    id: 3,
    image: 'https://konzeptual.ru/image/cache/catalog/products/08311ea7c2564deaafb05655bc183296-540x860.jpg',
    title: 'Златый путь. Сказки Бояна',
    author: 'Владимир Борисов',
  },
];

export function App() {
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
            {data.map((item) => (
              <Book key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section className={style.books}>
          <h2 className={style.headingVideos}>Видеоконтент проекта</h2>
          <Iframe
            className={style.video}
            width="100%"
            height="664px"
            url="https://www.youtube.com/embed/videoseries?list=PLxkQ0Mnh7vgzHR6npBF-eB8n0UAX74m-D"
            frameBorder="0"
            allowFullScreen
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

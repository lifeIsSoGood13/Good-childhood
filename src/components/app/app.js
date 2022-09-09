import style from './app.module.css';
import { Header } from '../header/header';
import FirstCloud from '../../images/first-cloud.png';
import SecondCloud from '../../images/second-cloud.png';
import ThirdCloud from '../../images/third-cloud.png';

export function App() {
  return (
    <div className={style.App}>
      <Header />
      <main>
        <p className={style.tagline}>
          Проект для повышения осознанности общества в&nbsp;деле воспитания детей.
        </p>
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
      </main>
    </div>
  );
}

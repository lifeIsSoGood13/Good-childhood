import { Link } from 'react-router-dom';
import alas from '../../images/alas.jpg';
import style from './not-found.module.css';

export function NotFound() {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img className={style.image} src={alas} alt="Ошибка 404" />
      </div>
      <p className={style.text}>
        А на{' '}
        <Link className={style.link} to="/">
          главной странице
        </Link>{' '}
        у нас уже кое-что есть!
      </p>
    </div>
  );
}

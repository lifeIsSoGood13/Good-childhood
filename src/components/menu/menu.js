import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Logo } from '../logo/logo';
import style from './menu.module.css';
import logo from '../../images/logo-white.png';
import telegram from '../../images/telegram.svg';
import vkontakte from '../../images/vk.svg';
import youtube from '../../images/youtube.svg';

export function Menu({ menuActive, setMenuActive }) {
  return (
    <div className={menuActive ? style.menuOverlayActive : style.menuOverlay}>
      <div className={menuActive ? style.menuActive : style.menu}>
        <button className={style.closeButton} type="button" onClick={() => setMenuActive(false)}></button>
        <Logo position={'menu'} />
        <ul className={style.navigation}>
          <li className={style.navigationItem} onClick={() => setMenuActive(false)}>
            <Link className={style.navigationLink} to="/">
              Главная
            </Link>
          </li>
          <li className={style.navigationItem} onClick={() => setMenuActive(false)}>
            <Link className={style.navigationLink} to="/books">
              Книги
            </Link>
          </li>
          <li className={style.navigationItem} onClick={() => setMenuActive(false)}>
            <HashLink className={style.navigationLink} to="/#video">
              Видеоконтент
            </HashLink>
          </li>
          <li className={style.navigationItem} onClick={() => setMenuActive(false)}>
            <Link className={style.navigationLink} to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
        <p className={style.phone}>+7 (495) 374-84-75</p>
        <ul className={style.social}>
          <li className={style.socialItem}>
            <a
              className={style.socialLink}
              href="https://t.me/dobroe_detstvo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Телеграм" />
            </a>
          </li>
          <li className={style.socialItem}>
            <a
              className={style.socialLink}
              href="https://vk.com/izdatel_dobroe_detstvo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={vkontakte} alt="ВКонтакте" />
            </a>
          </li>
          <li className={style.socialItem}>
            <a
              className={style.socialLink}
              href="https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="Ютуб" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

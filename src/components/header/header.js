import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from './header.module.css';
import logo from '../../images/logo-white.png';
import telegram from '../../images/telegram.svg';
import vkontakte from '../../images/vk.svg';
import youtube from '../../images/youtube.svg';
import navigation from '../../images/header-menu.svg';

export function Header({ setMenuActive }) {
  return (
    <header className={style.header}>
      <nav>
        <img className={style.navIcon} src={navigation} alt="Навигация" onClick={() => setMenuActive(true)} />
        <ul className={style.navigation}>
          <li className={style.navigationItem}>
            <Link className={style.pageLink} to="/books">
              Книги
            </Link>
          </li>
          <li className={style.navigationItem}>
            <HashLink
              className={style.pageLink}
              to="/#video"
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Видеоконтент
            </HashLink>
          </li>
          <li className={style.navigationItem}>
            <Link className={style.navigationLink} to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/">
        <img className={style.logo} src={logo} alt="Доброе детство" />
      </Link>
      <div className={style.contacts}>
        <span className={style.telephone}>+7 (495) 374-84-75</span>
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
              <span className={style.ourChannel}>Наш канал</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

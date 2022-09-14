import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as HashRouter } from 'react-router-hash-link';
import style from './header.module.css';
import logo from '../../images/logo-white.png';
import telegram from '../../images/telegram.png';
import vkontakte from '../../images/vk.png';
import youtube from '../../images/youtube.png';
import navigation from '../../images/header-menu.png';

export function Header() {
  return (
    <header className={style.header}>
      <nav>
        <img className={style.navIcon} src={navigation} alt="Навигация" />
        <ul className={style.navigation}>
          <Link className={style.pageLink} to="/books">
            <li className={style.navigationItem}>Книги</li>
          </Link>
          <li className={style.navigationItem}>
            <HashRouter className={style.navigationLink} to="/#video">
              Видеоконтент
            </HashRouter>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Logo } from '../logo/logo';
import style from './header.module.css';
import telegram from '../../images/telegram.svg';
import vkontakte from '../../images/vk.svg';
import youtube from '../../images/youtube.svg';
import navigation from '../../images/header-menu.svg';

export function Header({ setMenuActive }) {
  const navigationData = [
    { linkName: 'Книги', linkHref: '/books', isHashLink: false },
    { linkName: 'Видеоконтент', linkHref: '/#video', isHashLink: true },
    { linkName: 'Контакты', linkHref: '/contacts', isHashLink: false },
  ];

  const socialData = [
    {
      socialHref: 'https://t.me/dobroe_detstvo',
      socialIcon: telegram,
      socialName: 'Телеграм',
      isYoutube: false,
    },
    {
      socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
      socialIcon: vkontakte,
      socialName: 'ВКонтакте',
      isYoutube: false,
    },
    {
      socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
      socialIcon: youtube,
      socialName: 'Ютуб',
      isYoutube: true,
    },
  ];

  return (
    <header className={style.container}>
      <nav>
        <img className={style.navIcon} src={navigation} alt="Навигация" onClick={() => setMenuActive(true)} />
        <ul className={style.navigation}>
          {navigationData.map((item, i) => (
            <li key={i} className={style.navigationItem}>
              {item.isHashLink ? (
                <HashLink
                  className={style.navigationLink}
                  to={item.linkHref}
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  {item.linkName}
                </HashLink>
              ) : (
                <Link className={style.navigationLink} to={item.linkHref}>
                  {item.linkName}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Link to="/">
        <Logo position={'header'} />
      </Link>
      <div className={style.contacts}>
        <span
          className={style.telephone}
          onClick={() => {
            window.location.href = 'tel:+74951506970';
          }}
        >
          +7 (495) 374-84-75
        </span>
        <ul className={style.social}>
          {socialData.map((item, i) => (
            <li key={i} className={style.socialItem}>
              <a className={style.socialLink} href={item.socialHref} target="_blank" rel="noreferrer">
                <img src={item.socialIcon} alt={item.socialName} />
                {item.isYoutube && <span className={style.ourChannel}>Наш канал</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

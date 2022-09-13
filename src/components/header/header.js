import style from './header.module.css';
import logo from '../../images/logo-white.png';
import telegram from '../../images/telegram.png';
import vkontakte from '../../images/vk.png';
import youtube from '../../images/youtube.png';

export function Header() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.navigation}>
          <li className={style.navigationItem}>Книги</li>
          <li className={style.navigationItem}>
            <a className={style.navigationLink} href="#video">
              Видеоконтент
            </a>
          </li>
          <li className={style.navigationItem}>Контакты</li>
        </ul>
      </nav>
      <a href="/">
        <img className={style.logo} src={logo} alt="Доброе детство" />
      </a>
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

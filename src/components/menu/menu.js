import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Logo } from '../logo/logo';
import style from './menu.module.css';
import { menuNavigationData, menuSocialData } from '../../utils/constants';

export function Menu({ menuActive, setMenuActive }) {
  return (
    <div className={menuActive ? style.overlayActive : style.overlay}>
      <div className={menuActive ? style.containerActive : style.container}>
        <button className={style.closeButton} type="button" onClick={() => setMenuActive(false)}></button>
        <Logo position={'menu'} />
        <ul className={style.navigation}>
          {menuNavigationData.map((item, i) => (
            <li key={i} className={style.navigationItem} onClick={() => setMenuActive(false)}>
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
        <p
          className={style.phone}
          onClick={() => {
            window.location.href = 'tel:+74951506970';
          }}
        >
          +7 (495) 374-84-75
        </p>
        <ul className={style.social}>
          {menuSocialData.map((item, i) => (
            <li key={i} className={style.socialItem}>
              <a className={style.socialLink} href={item.socialHref} target="_blank" rel="noreferrer">
                <img src={item.socialIcon} alt={item.socialName} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import FooterTg from '../../images/footer-telegram.png';
import FooterVk from '../../images/footer-vk.png';
import FooterYt from '../../images/footer-youtube.png';
import style from './footer.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrap}>
        <p className={style.copyright}>&copy;&nbsp;2022 Все права защищены &laquo;Доброе детство&raquo;</p>
        <div className={style.contacts}>
          <div className={style.phone}>
            <img src={Phone} alt="Телефон" />
            <span>7 (495) 374-84-75</span>
          </div>
          <div className={style.email}>
            <img src={Email} alt="Электронная почта" />
            <span>dobroedetstvotv@gmail.com</span>
          </div>
        </div>
        <ul className={style.socialItems}>
          <li className={style.socialItem}>
            <a href="https://t.me/dobroe_detstvo" target="_blank">
              <img src={FooterTg} alt="Телеграм" />
            </a>
          </li>
          <li className={style.socialItem}>
            <a href="https://vk.com/izdatel_dobroe_detstvo" target="_blank">
              <img src={FooterVk} alt="ВКонтакте" />
            </a>
          </li>
          <li className={style.socialItem}>
            <a href="https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A" target="_blank">
              <img src={FooterYt} alt="Ютуб" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

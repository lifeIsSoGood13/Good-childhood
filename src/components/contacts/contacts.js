import style from './contacts.module.css';
import Email from '../../images/email-page-contacts.png';
import Phone from '../../images/phone-page-contacts.png';

export function Contacts() {
  return (
    <div className={style.contactsPage}>
      <section className={style.contactsSection}>
        <h1 className={style.sectionTitle}>Контакты</h1>
        <div className={style.contactsWrapper}>
          <div className={style.phoneWrapper}>
            <p className={style.contactTitle}>Телефон для связи</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={Phone} alt="Контактный телефон" />
              <span className={style.contact}>7 (495) 374-84-75</span>
            </div>
          </div>

          <div className={style.emailWrapper}>
            <p className={style.contactTitle}>Почта для связи</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={Email} alt="Электронная почта" />
              <span className={style.contact}>dobroedetstvotv@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
      <section className={style.jobSection}>
        <h2 className={style.sectionTitle}>Сотрудничество</h2>
        <ul className={style.vacancyWrapper}>
          <li className={style.vacancy}>
            <h3 className={style.vacancyHeading}>Дорогой Художник!</h3>
            <p className={style.vacancyText}>
              Если ты&nbsp;умеешь создавать реалистичные, яркие образы своими рисунками. Если понимаешь, что
              рисунки в&nbsp;детских книгах&nbsp;&mdash; это еще один вариант обучения и&nbsp;здесь нет места
              негативу или неверным пропорциям. Если рисуешь от&nbsp;руки и&nbsp;готов учиться правилам
              безопасных детских иллюстрации. Обязательно пиши нам!
            </p>
            <button
              className={style.sendButton}
              onClick={() =>
                (window.location.href =
                  'mailto:dobroedetstvotv@gmail.com?subject=Сотрудничество с издательством: художник')
              }
              type="button"
            >
              Откликнуться
            </button>
          </li>
          <li className={style.vacancy}>
            <h3 className={style.vacancyHeading}>Дорогой Писатель!</h3>
            <p className={style.vacancyText}>
              Если ты&nbsp;знаешь особенности детской литературы и&nbsp;понимаешь важность традиционных
              семейных ценностей, которые мы&nbsp;храним и&nbsp;доносим до&nbsp;детей. Если умеешь писать
              легкие для восприятия и&nbsp;одновременно поучительные тексты для детей от&nbsp;трёх
              до&nbsp;семи лет. Обязательно пиши нам!
            </p>
            <button
              className={style.sendButton}
              onClick={() =>
                (window.location.href =
                  'mailto:dobroedetstvotv@gmail.com?subject=Сотрудничество с издательством: писатель')
              }
              type="button"
            >
              Откликнуться
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

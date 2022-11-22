import style from './contacts.module.css';
import Email from '../../images/email-page-contacts.svg';
import Phone from '../../images/phone-page-contacts.svg';
import { Helmet } from 'react-helmet-async';
import ogImage from '../../images/og-image.png';
import { contactData } from '../../utils/constants';

export function Contacts() {
	return (
		<div className={style.contactsPage}>
			<Helmet>
				<title>Контакты | «Доброе детство»</title>
				<link rel='canonical' href='https://dobroedetstvo.ru/contacts' />
				<meta
					name='description'
					content='Если вы детский писатель или художник и хотите стать частью нашей команды, обязательно свяжитесь с нами по телефону или email.'
				/>

				<meta
					name='keywords'
					content='ищу писателя, ищу художника, ищу дизайнера, сотрудничество с издательством'
				/>
				<meta property='og:title' content='Связаться с нами' />
				<meta
					property='og:description'
					content='Если вы детский писатель или художник и хотите стать частью нашей команды, обязательно свяжитесь с нами по телефону или email.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:image' content={ogImage} />
				<meta property='og:url' content='https://dobroedetstvo.ru/contacts' />
			</Helmet>

			<section className={style.contactsSection}>
				<h1 className={style.sectionTitle}>Контакты</h1>
				<div className={style.contactsWrapper}>
					<div className={style.phoneWrapper}>
						<p className={style.contactTitle}>Телефон для связи</p>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<img src={Phone} alt='Контактный телефон' />
							<span className={style.contact}>7 (495) 374-84-75</span>
						</div>
					</div>
					<div className={style.emailWrapper}>
						<p className={style.contactTitle}>Почта для связи</p>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<img src={Email} alt='Электронная почта' />
							<span className={style.contact}>kontakt@dobroedetstvo.ru</span>
						</div>
					</div>
				</div>
			</section>

			<section className={style.jobSection}>
				<h2 className={style.sectionTitle}>Сотрудничество</h2>
				<ul className={style.vacancyWrapper}>
					{contactData.map((item, index) => (
						<li key={index} className={style.vacancy}>
							<h3 className={style.vacancyHeading}>{item.appeal}</h3>
							<p className={style.vacancyText}>{item.vacancyText}</p>
							<button
								className={style.sendButton}
								onClick={() => (window.location.href = `${item.mailto}`)}
								type='button'
							>
								Откликнуться
							</button>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

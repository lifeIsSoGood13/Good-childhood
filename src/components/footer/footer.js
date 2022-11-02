import Phone from '../../images/phone.svg';
import Email from '../../images/email.svg';
import style from './footer.module.css';
import { footerSocialData } from '../../utils/constants';

export function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className={style.footer}>
			<div className={style.footerWrap}>
				<p className={style.copyright}>{date}&nbsp;&copy; &laquo;Доброе детство&raquo;. Все права защищены</p>
				<div className={style.contacts}>
					<div className={style.phone}>
						<img src={Phone} alt='Телефон' />
						<span>7 (495) 374-84-75</span>
					</div>
					<div className={style.email}>
						<img src={Email} alt='Электронная почта' />
						<span>kontakt@dobroedetstvo.ru</span>
					</div>
				</div>
				<ul className={style.socialItems}>
					{footerSocialData.map((item, index) => (
						<li key={index} className={style.socialItem}>
							<a href={item.socialHref} target='_blank' rel='noreferrer'>
								<img src={item.socialIcon} alt={item.socialName} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}

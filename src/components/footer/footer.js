import Phone from '../../images/phone.svg';
import Email from '../../images/email.svg';
import FooterTg from '../../images/footer-telegram.svg';
import FooterVk from '../../images/footer-vk.svg';
import FooterYt from '../../images/footer-youtube.svg';
import style from './footer.module.css';

export function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.footerWrap}>
				<p className={style.copyright}>2022&nbsp;&copy; &laquo;Доброе детство&raquo;. Все права защищены</p>
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
					<li className={style.socialItem}>
						<a href='https://t.me/dobroe_detstvo' target='_blank' rel='noreferrer'>
							<img src={FooterTg} alt='Телеграм' />
						</a>
					</li>
					<li className={style.socialItem}>
						<a href='https://vk.com/izdatel_dobroe_detstvo' target='_blank' rel='noreferrer'>
							<img src={FooterVk} alt='ВКонтакте' />
						</a>
					</li>
					<li className={style.socialItem}>
						<a
							href='https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A'
							target='_blank'
							rel='noreferrer'
						>
							<img src={FooterYt} alt='Ютуб' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

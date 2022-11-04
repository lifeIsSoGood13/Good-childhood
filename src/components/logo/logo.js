import style from './logo.module.css';
import logo from '../../images/logo-white.png';
import logoWebp from '../../images/logo-white.webp';

export function Logo({ position }) {
	const setStyle = () => {
		switch (position) {
			case 'header':
				return style.position_header;
			case 'main':
				return style.position_main;
			case 'menu':
				return style.position_menu;
			default:
				return;
		}
	};

	return (
		<picture>
			<source type='image/webp' srcSet={logoWebp} />
			<img className={setStyle()} src={logo} alt='Доброе детство' />
		</picture>
	);
}

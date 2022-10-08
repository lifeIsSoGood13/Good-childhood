import style from './logo.module.css';
import logo from '../../images/logo-white.png';

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

  return <img className={setStyle()} src={logo} alt="Доброе детство" />;
}

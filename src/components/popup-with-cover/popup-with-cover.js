import { Popup } from '../popup/popup';
import style from './popup-with-cover.module.css';

export function PopupWithCover({ bookImage, setPopupOpen }) {
  return (
    <Popup setPopupOpen={setPopupOpen}>
      <div className={style.container}>
        <button className={style.closeButton} type="button" onClick={() => setPopupOpen(false)}></button>
        <img className={style.image} src={bookImage} alt="Обложка" />
      </div>
    </Popup>
  );
}

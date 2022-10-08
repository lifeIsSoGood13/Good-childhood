import React, { useContext } from 'react';
import style from './book.module.css';
import Soon from '../../images/soon.svg';
import { BooksListContext } from '../../services/AppContext';

export function Book(props) {
  const booksListData = useContext(BooksListContext);

  return (
    <article className={style.book}>
      <div className={style.imageWrap}>
        <img className={style.image} src={props.image} alt={props.title} onClick={booksListData.jumpToTop} />
        {!props.on_sale && <img className={style.soonImage} src={Soon} alt="Скоро" />}
      </div>
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.author}>
        <span>Автор: </span>
        {props.author}
      </p>
    </article>
  );
}

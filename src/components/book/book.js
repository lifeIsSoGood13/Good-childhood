import React from 'react';
import style from './book.module.css';
import { DataContext } from '../../services/AppContext';

export function Book(props) {
  const setBookData = React.useContext(DataContext);

  return (
    <article className={style.book} onClick={() => setBookData(props)}>
      <div className={style.imageWrap}>
        <img className={style.image} src={props.image} alt={props.title} />
      </div>
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.author}>
        <span>Автор: </span>
        {props.author}
      </p>
    </article>
  );
}

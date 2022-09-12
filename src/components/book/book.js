import style from './book.module.css';

export function Book(props) {
  return (
    <article className={style.book}>
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

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../book/book';
import { BooksListContext } from '../../services/AppContext';
import style from './books.module.css';

export function Books() {
  const booksListData = useContext(BooksListContext);

  return (
    <section className={style.books}>
      <h1 className={style.title}>Книги издательства</h1>
      <p className={style.description}>
        В&nbsp;представленных книгах все иллюстрации добрые. Что это значит? Все персонажи нарисованы
        художником с&nbsp;душой и&nbsp;любовью. Особое внимание уделено анатомии и&nbsp;внешним признакам
        животных, выдержана высокая степень сходства. Мимика на&nbsp;мордочках зверят отображает эмоции,
        которые они испытывают. Это один из&nbsp;самых важных моментов для детской иллюстрации.
      </p>
      <div className={style.booksContainer}>
        {booksListData.books.map((item) => (
          <Link className={style.link} key={item.id} to={`/books/${item.link_param}`}>
            <Book {...item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

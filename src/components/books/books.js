import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Book } from '../book/book';
import { BooksContext } from '../../services/AppContext';
import style from './books.module.css';

export function Books() {
  const items = React.useContext(BooksContext);
  return (
    <section className={style.books}>
      <h1 className={style.title}>Книги издательства</h1>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto sit dolorem reiciendis
        dignissimos quam non odit, fugit expedita pariatur vero dolores, perferendis molestiae est velit
        sapiente repellendus officiis aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        iusto sit dolorem reiciendis dignissimos quam non odit, fugit expedita pariatur vero dolores,
        perferendis molestiae est velit sapiente repellendus officiis aut.
      </p>
      <div className={style.booksContainer}>
        {items.map((item) => (
          <Book key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

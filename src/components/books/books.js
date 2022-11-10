import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../book/book';
import { BooksListContext } from '../../services/AppContext';
import style from './books.module.css';
import { Helmet } from 'react-helmet-async';
import ogImage from '../../images/og-image.png';

export function Books() {
	const booksListData = useContext(BooksListContext);

	return (
		<section className={style.books}>
			<Helmet>
				<title>Книги | &laquo;Доброе детство&raquo;</title>
				<link rel='canonical' href='/books' />
				<meta
					name='description'
					content='Ассортимент детских книг издательства «Доброе детство». Самые выгодные цены. Заказывайте онлайн и выбирайте удобный способ доставки'
				/>
				<meta name='keywords' content='доброе детство, издательство, книги, купить' />
				<meta property='og:title' content='Книги "Доброго детства"' />
				<meta property='og:description' content='Книжный ассортимент издательства по самым выгодным ценам' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content={ogImage} />
				<meta property='og:url' content='https://dobroedetstvo.ru/books' />
			</Helmet>

			<h1 className={style.title}>Книги издательства</h1>
			<p className={style.description}>
				В&nbsp;представленных книгах все иллюстрации добрые. Что это значит? Все персонажи нарисованы
				художником с&nbsp;душой и&nbsp;любовью. Особое внимание уделено анатомии и&nbsp;внешним признакам
				животных, выдержана высокая степень сходства. Мимика на&nbsp;мордочках зверят отображает эмоции,
				которые они испытывают. Это один из&nbsp;самых важных моментов для детской иллюстрации.
			</p>
			<div className={style.booksContainer}>
				{booksListData.books.map(item => (
					<Link className={style.link} key={item.id} to={`/books/${item.link_param}`}>
						<Book {...item} />
					</Link>
				))}
			</div>
		</section>
	);
}

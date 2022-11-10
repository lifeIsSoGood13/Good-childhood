import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import alas from '../../images/alas.jpg';
import alasWebp from '../../images/alas.webp';
import { BooksListContext } from '../../services/AppContext';
import style from './not-found.module.css';
import { Helmet } from 'react-helmet-async';

export function NotFound() {
	const booksListData = useContext(BooksListContext);

	return (
		<div className={style.container}>
			<Helmet>
				<title>Ошибка 404 | Страница не найдена</title>
				<meta
					name='description'
					content='К сожалению, такой страницы нет на нашем сайте. Возможно, вы ввели неправильный адрес или страница была удалена с сервера.'
				/>
				<meta name='robots' content='noindex' />
			</Helmet>

			<div className={style.imageContainer}>
				<picture>
					<source srcset={alasWebp} type='image/webp' />
					<img className={style.image} src={alas} alt='Ошибка 404' />
				</picture>
			</div>
			<p className={style.text}>
				А на{' '}
				<Link className={style.link} to='/' onClick={booksListData.jumpToTop}>
					главной странице
				</Link>{' '}
				у нас уже кое-что есть!
			</p>
		</div>
	);
}

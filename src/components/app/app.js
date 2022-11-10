import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import style from './app.module.css';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { Books } from '../books/books';
import { BookDetails } from '../book-details/book-details';
import { Footer } from '../footer/footer';
import { Contacts } from '../contacts/contacts';
import { Menu } from '../menu/menu';
import { NotFound } from '../not-found/not-found';
import { PopupWithCover } from '../popup-with-cover/popup-with-cover';
import { BooksListContext } from '../../services/AppContext';

export function App() {
	const [items, setItems] = useState([]);
	const location = useLocation();
	const [size, setSize] = useState(1000);
	const [menuActive, setMenuActive] = useState(false);
	const [bookImage, setBookImage] = useState();
	const [popupOpen, setPopupOpen] = useState(false);

	const booksListData = {
		setPopupOpen: setPopupOpen,
		setBookImage: setBookImage,
		size: size,
		books: items,
		jumpToTop: () => window.scrollTo({ top: 0 }),
	};

	React.useEffect(() => {
		fetch('https://632054139f82827dcf2a1cca.mockapi.io/books')
			.then(res => {
				return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
			})
			.then(data => {
				setItems(data);
				window.addEventListener('resize', e => setSize(e.currentTarget.innerWidth));
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<React.Fragment>
			<div className={location.pathname === '/' ? style.App_background_image : style.App}>
				<Header setMenuActive={setMenuActive} />
				<BooksListContext.Provider value={booksListData}>
					<Routes>
						<Route exact path='/' element={<Main />} />
						<Route path='/books' element={<Books />} />
						<Route path='/books/:name' element={<BookDetails />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</BooksListContext.Provider>
				<Footer />
				<Menu menuActive={menuActive} setMenuActive={setMenuActive} />
			</div>
			{popupOpen && <PopupWithCover bookImage={bookImage} setPopupOpen={setPopupOpen} />}
		</React.Fragment>
	);
}

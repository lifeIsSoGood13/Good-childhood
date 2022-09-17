import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import style from './app.module.css';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { Books } from '../books/books';
import { BookDetails } from '../book-details/book-details';
import { Footer } from '../footer/footer';
import { Contacts } from '../contacts/contacts';
import { BooksContext } from '../../services/AppContext';
import { DataContext } from '../../services/AppContext';

export function App() {
  const [items, setItems] = useState([]);
  const [bookData, setBookData] = useState();
  const location = useLocation();

  const jumpToTop = () => window.scrollTo({ top: 0 });

  React.useEffect(() => {
    fetch('https://632054139f82827dcf2a1cca.mockapi.io/books')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка ${res.status}`);
        }
      })
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={location.pathname === '/' ? style.App_background_image : style.App}>
      <Header />
      <DataContext.Provider value={setBookData}>
        <BooksContext.Provider value={items}>
          <Routes>
            <Route path="/" element={<Main jumpToTop={jumpToTop} />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:name" element={<BookDetails bookData={bookData} />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BooksContext.Provider>
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

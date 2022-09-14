import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import style from './app.module.css';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { Books } from '../books/books';
import { Footer } from '../footer/footer';
import { Contacts } from '../contacts/contacts';

export function App() {
  const [items, setItems] = React.useState([]);
  const [background, setBackground] = React.useState(true);

  const handleAddBackground = () => setBackground(true);
  const handleRemoveBackground = () => setBackground(false);

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
    <div class={background ? style.App_background_image : style.App}>
      <Header addBackground={handleAddBackground} removeBackground={handleRemoveBackground} />
      <Routes>
        <Route path="/" element={<Main items={items} />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

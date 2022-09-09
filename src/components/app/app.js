import style from './app.module.css';
import { Header } from '../header/header';

export function App() {
  return (
    <div className={style.App}>
      <Header />
    </div>
  );
}

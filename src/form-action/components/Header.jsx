import styles from '../styles/styles.module.css'
import logoImg from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id='header-fa' className={styles.headerfa}>
      <Link id="header-link" className={styles.headerlink} to="/">
        <button>Back To HomePage</button>
      </Link>
      <div>
        <img src={logoImg} alt="A form and a pencil" />
        <h1>React Forms</h1>
      </div>
    </header>
  );
}

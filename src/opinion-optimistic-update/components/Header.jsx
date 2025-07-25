import styles from '../styles/styles.module.css'
export default function Header() {
  return (
    <header id="main-header" className={styles['main-header']}>
      <h1>OpinionBoard</h1>
      <p>
        Strong opinions, judged by anonymous internet users. What could possibly
        go wrong?
      </p>
    </header>
  );
}

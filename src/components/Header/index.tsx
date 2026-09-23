import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.siteId}>
          <Link to="/">Blog</Link>
        </div>
        <div className={styles.contact}>
          <Link to="/contact/">お問い合わせ</Link>
        </div>
      </div>
    </header>
  );
}
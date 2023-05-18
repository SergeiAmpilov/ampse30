
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <span>
            © 2022 - {new Date().getFullYear()}
          </span>
          <span>
            Создано с любовью &nbsp;
            <i className="fa fa-heart" aria-hidden="true"></i>
          </span>
          <span>
            ampilovs.ru
          </span>
        </div>
      </div>
    </footer>
  );
}
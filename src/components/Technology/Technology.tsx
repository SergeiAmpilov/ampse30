import cn from 'classnames';
import styles from './Technology.module.css';

import htmlIcon from './techicons/html.png';

export const Technology = (): JSX.Element => {
  return (
    <section className={styles.technology}>
      <div className="container">
        <h2>Технологии 💻</h2>
        <p>Набор технологий, с которыми я работаю:</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={htmlIcon} alt="Html logo" className={styles.img}/>
            <p className={styles.text}>HTML</p>
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};
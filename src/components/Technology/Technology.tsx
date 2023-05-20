import cn from 'classnames';
import styles from './Technology.module.css';

import htmlIcon from './techicons/html.png';
import cssIcon from './techicons/css.png';
import jsIcon from './techicons/javascript.png';
import tsIcon from './techicons/typescript.png';
import reactIcon from './techicons/react.png';
import nodeIcon from './techicons/nodejs.png';
import expressIcon from './techicons/expressjs.png';
import mongoIcon from './techicons/mongodb.png';
import phpIcon from './techicons/php.png';
import mysqlIcon from './techicons/mysql.png';
import bitrixIcon from './techicons/bitrix.png';
import bitrix24Icon from './techicons/bitrix24.png';

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
          <li className={styles.item}>
            <img src={cssIcon} alt="css logo" className={styles.img}/>
            <p className={styles.text}>CSS</p>
          </li>
          <li className={styles.item}>
            <img src={jsIcon} alt="Javascript logo" className={styles.img}/>
            <p className={styles.text}>Javascript</p>
          </li>
          <li className={styles.item}>
            <img src={tsIcon} alt="Typescript logo" className={styles.img}/>
            <p className={styles.text}>Typescript</p>
          </li>
          <li className={styles.item}>
            <img src={reactIcon} alt="React logo" className={styles.img}/>
            <p className={styles.text}>React</p>
          </li>
          <li className={styles.item}>
            <img src={nodeIcon} alt="Node.js logo" className={styles.img}/>
            <p className={styles.text}>Node.js</p>
          </li>
          <li className={styles.item}>
            <img src={expressIcon} alt="Express.js logo" className={styles.img}/>
            <p className={styles.text}>Express.js</p>
          </li>
          <li className={styles.item}>
            <img src={mongoIcon} alt="MongoDB logo" className={styles.img}/>
            <p className={styles.text}>MongoDB</p>
          </li>
          <li className={styles.item}>
            <img src={phpIcon} alt="PHP logo" className={styles.img}/>
            <p className={styles.text}>PHP</p>
          </li>
          <li className={styles.item}>
            <img src={mysqlIcon} alt="MySQL logo" className={styles.img}/>
            <p className={styles.text}>MySQL</p>
          </li>
          <li className={styles.item}>
            <img src={bitrixIcon} alt="Bitrix logo" className={styles.img}/>
            <p className={styles.text}>Bitrix</p>
          </li>
          <li className={styles.item}>
            <img src={bitrix24Icon} alt="Bitrix 24 logo" className={styles.img}/>
            <p className={styles.text}>Bitrix 24</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
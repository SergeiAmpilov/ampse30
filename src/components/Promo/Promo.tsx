import mainImg from './asy.png';
import cn from 'classnames';
import styles from './Promo.module.css';

export const Promo = (): JSX.Element => {
  return (
    <div className='container'>
      <div className={styles.grid_container}>
        <h1 className={styles.title}>
          Добро пожаловать на персональный сайт программиста! 👋
        </h1>
        <img className={styles.img} src={mainImg} alt="Программист Ампилов" />
        <p className={styles.paragraph}>
          Меня зовут Сергей, я занимаюсь веб-разработкой. 
          Если Вам требуется создать современный и технологичный сайт, 
          интернет-магазин или веб-сервис, 
          обращайтесь!
          <nav>
            <button className={styles.button_blue}>Портфолио</button>
            <button className={styles.button_yellow}>Контакты</button>
          </nav>
        </p>
      </div>
    </div>
  );
}
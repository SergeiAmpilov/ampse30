import mainImg from './asy.png';
import cn from 'classnames';
import styles from './Promo.module.css';
import { FC } from 'react';
import { PromoProps } from './Promo.props';


export const Promo: FC<PromoProps> = ({ className, ...props}): JSX.Element => {
  const handleButtonClick = (selector: string) => {
    const el = document.getElementById(selector);

    if (!el) {
      return;
    }
    el.scrollIntoView({block: "start", behavior: "smooth"});
  }
  return (
    <div 
      className={cn(className, 'container')}
      {...props}
    >
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
            <button 
              className={styles.button_blue}
              onClick={() => (handleButtonClick('portfolio'))}>Портфолио</button>
            <button 
              className={styles.button_yellow}
              onClick={() => (handleButtonClick('contacts'))}>Контакты</button>
          </nav>
        </p>
      </div>
    </div>
  );
}
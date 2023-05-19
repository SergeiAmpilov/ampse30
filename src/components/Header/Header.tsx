import { FC } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css'
import cn from 'classnames';

export const Header: FC<HeaderProps> = ({className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header 
      className={cn(className, styles.header)}
      {...props} >
      <div className="container">
        <nav className={styles.navcontainer}>
          <a href="#home">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className={styles.sitename}>
              ampilov.s
            </span>
          </a>      
          <div className={styles.nav_anchor}>
            <a href="#portfolio">Портфолио</a>
            <a href="#contacts">Контакты</a>
          </div>
          <div>
            <a href=" https://wa.me/79268373346" target='_blank'>
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a href="https://t.me/sergei_ampilov" target='_blank'>
              <i className="fa fa-telegram" aria-hidden="true"></i>
            </a>
            <a href="mailto:dev@ampilovs.ru" target='_blank'>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
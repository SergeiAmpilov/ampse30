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

      <a href="#home">ampilov.s</a>


        
        

        {/* nav menu */}
        <a href="#portfolio">Портфолио</a>
        <a href="#contacts">Контакты</a>


        {/* contacts menu */}
        <a href="tel: +79268373346" target='_blank'>
          Phone
        </a>
        <a href="mailto:dev@ampilovs.ru" target='_blank'>
          Email
        </a>
        <a href="https://t.me/sergei_ampilov" target='_blank'>
          Telegramm
        </a>


      </div>
    </header>
  );
};
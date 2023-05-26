import { FC } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css'
import cn from 'classnames';

export const Header: FC<HeaderProps> = ({className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header 
      id='top'
      className={cn(className, styles.header)}
      {...props} >
      <div className="container">
        <nav className={styles.navcontainer}>
          <a href="/">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className={styles.sitename}>
              ampilov.s
            </span>
          </a>      
          <div>
            <a href="mailto:dev@ampilovs.ru" target='_blank'>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
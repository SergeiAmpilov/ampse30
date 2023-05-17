import styles from './ArrowDown.module.css';
import { ArrowDownProps } from './ArrowDown.props';
import { FC } from 'react';
import cn from 'classnames';


export const ArrowDown: FC<ArrowDownProps> = ({ className, ...props }): JSX.Element => {
  return (
    <div 
      className={cn(className, styles.promo__scroll_down)}
      {...props}
    ></div>
  );
};
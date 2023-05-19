import { FC } from 'react';
import { CaseProps } from './Case.props';
import cn from 'classnames';
import styles from './Case.module.css'

// import mainImg from './asy.png';


export const Case: FC<CaseProps> = ({index, img, className, ...props}): JSX.Element => {
  
  return (
    <div
      className={cn(className, styles.case)}
      key={index}
    >
      <img src={`/images/${img}`} alt="" className={styles.img}/>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>{}</h3>

        {props.title}
        {props.description}
      </div>

    </div>
  );
};
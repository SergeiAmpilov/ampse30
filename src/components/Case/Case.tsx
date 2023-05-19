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
      {...props}
    >
      <img src={`/images/${img}`} alt="" className={styles.img}/>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>{props.title}</h3>
        <p className={styles.description}>
          {props.description}
        </p>
        <div className={styles.row}>          
          { 
            props.techList.map( (tech, i) => 
              (<span className={styles.techbage} key={i}>{tech}</span>)) 
          }
        </div>
        <div className={styles.row}>
          {
            props.linkList.map( (link, i) => (
              <a
                className={styles.link} 
                key={i}
                href={link.link}
                target='_blank'>{link.name}</a>
            ))
          }
        </div>
      </div>

    </div>
  );
};
import { CASES_DATA } from '../../Data/Cases.data';
import { Case } from '../components.index';
import styles from './Portfolio.module.css';
import { FC } from 'react';
import cn from 'classnames';


export const Portfolio: FC<any> = ({ className, ...props }):JSX.Element => {
  return (
    <section
      className={cn(className, styles.section)}
      {...props} id='portfolio'>
      <div className="container">
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.caselist}>
          { CASES_DATA.map( (element) => (
            <Case 
              {...element}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
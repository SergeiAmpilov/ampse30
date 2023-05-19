import { CASES_DATA } from '../../Data/Cases.data';
import { Case } from '../components.index';
import styles from './Portfolio.module.css';
import { FC } from 'react';

export const Portfolio: FC<any> = ():JSX.Element => {
  return (
    <section id='portfolio'>
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
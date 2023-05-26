import { ContactsProps } from "./Contacts.props";
import { FC } from 'react';
import cn from 'classnames';
import styles from './Contacts.module.css';

import gitHubImg from './github250.png';
import youtubeImg from './youtube500.png';
import linkedInnImg from './lin500.png';


export const Contacts: FC<ContactsProps>  = ({className, ...props}: ContactsProps):JSX.Element => {
  return (
    <section
      className={cn(className, styles.section)}
      {...props}
      id='contacts'
    >
      <div className="container">

        <div className={styles.contacts_container}>
          <div>
            <h2>Контакты</h2>
            <p>Буду рад пообщаться по поводу вашего проекта:</p>
            <ul className={styles.list}>
              <li>
              <a href="mailto:dev@ampilovs.ru" target='_blank' className={styles.link}>
                <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp; Email
              </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Социальные сети</h2>
            <p>Вы можете найти меня в социальных сетях:</p>
            <ul className={cn(styles.list, styles.list_blanc)}>
              <li className={styles.soclink}>
                <a href="https://github.com/SergeiAmpilov/" className={styles.soclink} target='_blank'>
                  <img src={gitHubImg} alt="github" className={styles.soclink_img} />
                </a>
              </li>
              <li className={styles.soclink}>
                <a href="https://www.youtube.com/channel/UCXpXbD_W2W40TEmlahZx7sQ" className={styles.soclink} target='_blank'>
                  <img src={youtubeImg} alt="Youtube" className={styles.soclink_img} />
                </a>
              </li>
              <li className={styles.soclink}>
                <a href="https://www.linkedin.com/in/sergei-ampilov/"  target='_blank'>
                  <img src={linkedInnImg} alt="linked inn" className={styles.soclink_img}/>
                </a>
              </li>
              <li>
                <a href="https://www.codewars.com/users/sergei.ampilov" target='_blank'>
                  <img
                    src="https://www.codewars.com/users/sergei.ampilov/badges/small"
                    alt="codewars"
                    className={styles.codewars}
                    />
                  <img 
                    src="https://www.codewars.com/users/sergei.ampilov/badges/micro"
                    alt="codewars"
                    className={styles.codewars_micro}
                    />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};
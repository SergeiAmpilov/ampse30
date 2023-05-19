import { ContactsProps } from "./Contacts.props";
import { FC } from 'react';
import cn from 'classnames';
import styles from './Contacts.module.css';



{/* 
 */}


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
            <h2>Contacts</h2>
            <p>Буду рад пообщаться по поводу вашего проекта:</p>
            <ul className={styles.list}>
              <li>
                <a href="https://t.me/sergei_ampilov" target='_blank' className={styles.link}>
                  <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp; Telegram
                </a>
              </li>
              <li>
                <a href=" https://wa.me/79268373346" target='_blank' className={styles.link}>
                  <i className="fa fa-whatsapp" aria-hidden="true"></i> &nbsp; Whatsapp
                </a>
              </li>
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
            <ul>
              <li>GitHub</li>
              <li>YouTube</li>
              <li>LinkedInn</li>
              <li>Codewars</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};
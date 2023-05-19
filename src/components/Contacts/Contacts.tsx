import { ContactsProps } from "./Contacts.props";
import { FC } from 'react';
import cn from 'classnames';
import styles from './Contacts.module.css';





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
            <ul>
              <li>telegramm</li>
              <li>whatsapp:  https://wa.me/79268373346</li>
              <li>email</li>
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
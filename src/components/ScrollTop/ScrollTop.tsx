import styles from './ScrollTop.module.css';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export const ScrollTop = (): JSX.Element => {

  const [curY, setCurY] = useState(0);

  const windowScrollHandler = () => {
    setCurY(window.scrollY);
  };

  const handleButtonClick = (selector: string) => {
    const el = document.getElementById(selector);

    if (!el) {
      return;
    }
    el.scrollIntoView({block: "start", behavior: "smooth"});
  }

  useEffect( () => {
    window.addEventListener('scroll', windowScrollHandler);

    return () => {
      window.removeEventListener('scroll', windowScrollHandler);
    }

  }, []);

  return (
    <button 
      className={
        cn(styles.scroll, {
          [styles.visible]:  curY > 20,
        }
      )}
      onClick={() => (handleButtonClick('top'))}
      >
      <i className="fa fa-arrow-up fa-1" aria-hidden="true"></i>
    </button>
  );
};
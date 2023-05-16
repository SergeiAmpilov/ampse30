import React from 'react';
import styles from './App.module.css';

import { TestComponent } from '../components.index'

function App() {
  return (<>
    <div className={styles.head}>
      <div>Header</div>
      <div>Promo</div>
    </div>
    <div>Portfolio</div>
    <div>Contacts</div>
    <div>Technology</div>
    <div>Sertificates</div>
    <div>Footer</div>
  </>);
}

export default App;

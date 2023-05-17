import styles from './App.module.css';

import { ArrowDown, Header, Promo } from '../components.index'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (<>
    <div className={styles.head}>
      <Header />
      <Promo />
      <ArrowDown />
    </div>
    <div>Portfolio</div>
    <div>Contacts</div>
    <div>Technology</div>
    <div>Sertificates</div>
    <div>Footer</div>
  </>);
}

export default App;

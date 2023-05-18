import styles from './App.module.css';

import { ArrowDown, Footer, Header, Portfolio, Promo } from '../components.index'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (<>
    <div className={styles.head}>
      <Header />
      <Promo />
      <ArrowDown />
    </div>
    <Portfolio />
    <div>Contacts</div>
    <div>Technology</div>
    <div>Sertificates</div>
    <Footer />
  </>);
}

export default App;

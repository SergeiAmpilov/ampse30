import styles from './App.module.css';

import { ArrowDown, Contacts, Footer, Header, Portfolio, Promo, Technology } from '../components.index'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (<>
    <div className={styles.head}>
      <Header />
      <Promo />
      <ArrowDown />
    </div>
    <Portfolio />
    <Contacts />
    <Technology />
    <Footer />
  </>);
}

export default App;

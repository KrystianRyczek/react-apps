import './styles/styles.css';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import ShopContextProvider from './store/shopping-store-controlers.jsx';

export default function ElegantContext() {

  return (
    <div id='elegant-context'>
      
      <ShopContextProvider>
        <Header/>
        <Shop/>
      </ShopContextProvider>
    </div>
  );
}

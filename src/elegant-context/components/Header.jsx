import { useRef, useContext } from 'react';
import CartModal from './CartModal.jsx';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../store/shoping-store-context.jsx';

export default function Header() {

  const {items}=useContext(ShopContext)
  
  const modal = useRef();

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>

      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header >
        <Link id="header-ec-link" to="/">
            <button type='button'>Back To HomePage</button>
        </Link>
        <div id="header-ec">
          <div id="main-title">
            <img src={logo} alt="Elegant model" />
            <h1>Elegant Context</h1>
          </div>
          <p>
            <button type='button' onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
          </p>
        </div>

      </header>
    </>
  );
}

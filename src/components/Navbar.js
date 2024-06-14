import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import '../css/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Products</Link>
    <Link to="/checkout">Checkout</Link>
    <div className="cart-icon">
      <CartIcon />
    </div>
  </nav>
);

export default Navbar;

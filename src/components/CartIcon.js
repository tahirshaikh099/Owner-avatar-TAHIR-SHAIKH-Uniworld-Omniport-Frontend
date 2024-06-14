import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/CartIcon.css';

const CartIcon = () => {
  
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-icon" onClick={handleCheckout}>
      <span className="cart-count">{cart.items.length}</span>
      <i className="fas fa-shopping-cart"></i>
      <div className="cart-dropdown">
        {cart.items.length > 0 ? (
          cart.items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default CartIcon;

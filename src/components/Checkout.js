import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../css/Checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = (e) => {
    e.preventDefault();

    const order = {
      name,
      email,
      items: cart.items
    };

    axios.post('https://tahir-shaikh-uniworld-omniport-backend.onrender.com/api/checkout', order)
      .then(response => {
        console.log(response.data);
        dispatch({ type: 'CLEAR_CART' });
      })
      .catch(error => {
        console.error('There was an error placing the order!', error);
      });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const totalAmount = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <h3>Order Items:</h3>
      <div className="cart-items">
        {cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <h3>Order Info:</h3>
      <form onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
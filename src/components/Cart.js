import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const handleQuantityChange = (id, change) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
    ));
  };

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>
                  <p><strong>${item.price}</strong></p>
                </div>
                <div>
                  <button className="btn btn-secondary btn-sm me-2" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm ms-2" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

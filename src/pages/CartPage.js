import React, { useState } from 'react';
import Cart from '../components/Cart';

// Mock data
const initialCart = [
  { id: 1, title: 'Cozy Apartment', price: 100, quantity: 0 },
  { id: 2, title: 'Luxury Villa', price: 500, quantity: 0 },
  { id: 3, title: 'Charming Cottage', price: 150, quantity: 0 },
  { id: 4, title: 'Modern Loft', price: 200, quantity: 0 },
  { id: 5, title: 'Spacious House', price: 300, quantity: 0 },
  { id: 6, title: 'Conceives Farmhouse', price: 800, quantity: 0 }
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  return (
    <Cart cart={cart} setCart={setCart} />
  );
};

export default CartPage;

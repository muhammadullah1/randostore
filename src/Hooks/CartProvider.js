import React, { useState, useEffect } from 'react';
import CartContext from './cartContext';

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const getCartFromLocalStorage = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };
  
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  useEffect(() => {
    setCart(getCartFromLocalStorage());
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    saveCartToLocalStorage([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
    saveCartToLocalStorage(cart.filter((i) => i !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

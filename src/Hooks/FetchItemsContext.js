import React, { useContext, createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
const ItemsContext = createContext();
export const useItems = () => useContext(ItemsContext);
export default function ItemsProvider(props) {

  const [store, setStore] = useState([]);
  const [dataLoader, setDataLoader] = useState(false);
  const [cart, setCart] = useState([]);

  const getCartFromLocalStorage = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };


  const addItem = (data) => {
    axios.post('http://localhost:3000/items', data)
      .then(response => {
        console.log(response.data);
        setDataLoader(true)
      })
      .catch(error => {
        console.log(error);
      });
  }
  const addToCart = (item) => {
    const present = cart.some(it => JSON.stringify(it) === JSON.stringify(item));
    if (!present) {
      setCart([...cart, item]);
      saveCartToLocalStorage([...cart, item]);
    }
    else {
      alert('Item Already Present In Cart')
    }
  }

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
    saveCartToLocalStorage(cart.filter((i) => i !== item));
  };
  const removeAllFromCart = useCallback((item) => {
    setCart(cart.splice(0,cart.length));
    saveCartToLocalStorage(cart.splice(0,cart.length));
  }, []);
  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then((response) => {
        setStore(response.data)
        setDataLoader(false)
      });
  }, [dataLoader]);
  useEffect(() => {
    setCart(getCartFromLocalStorage());
  }, []);
  return (
    <ItemsContext.Provider value={{ store, addItem, cart, addToCart, removeFromCart, removeAllFromCart }}>
      {props.children}
    </ItemsContext.Provider>
  )
}



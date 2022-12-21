import React, { useContext, createContext, useState, useEffect } from 'react'
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
      useEffect(() => {
        axios.get('http://localhost:3000/items')
            .then((response) => {
                setStore(response.data)
                setDataLoader(false)
            });
    }, [dataLoader]);

    return (
        <ItemsContext.Provider value={{ store,  addItem, cart, addToCart, removeFromCart }}>
            {props.children}
        </ItemsContext.Provider>
    )
}



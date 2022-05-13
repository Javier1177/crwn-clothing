import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  if (existingCartItem)
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const finalCartItems = cartItems.filter(
    item => item.id !== cartItemToRemove.id
  );
  return finalCartItems;
};

const removeQuantity = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity > 1)
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

  return removeCartItem(cartItems, cartItemToRemove);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  clearItemFromCart: () => {},
  removeItemFromCart: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const totalCartPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(totalCartPrice);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const clearItemFromCart = productToRemove => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemFromCart = productToRemove => {
    setCartItems(removeQuantity(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    clearItemFromCart,
    removeItemFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

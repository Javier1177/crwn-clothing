import React from 'react';

import {
  CartItemContainer,
  ImgElement,
  ItemDetails,
  NameElement,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgElement src={imageUrl} alt="item" />
    <ItemDetails>
      <NameElement>{name}</NameElement>
      <span className="price">
        {quantity} x {price}€
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;

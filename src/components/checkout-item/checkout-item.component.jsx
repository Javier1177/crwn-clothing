import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cart.action';

import {
  CheckoutItemContainer,
  ImgContainer,
  ImgElement,
  ItemInfo,
  ArrowElement,
  ValueElement,
  RemoveButtonElement,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <ImgElement src={imageUrl} alt="item" />
      </ImgContainer>
      <ItemInfo>{name}</ItemInfo>
      <ItemInfo>
        <ArrowElement onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowElement>
        <ValueElement>{quantity}</ValueElement>
        <ArrowElement onClick={() => addItem(cartItem)}>&#10095;</ArrowElement>
      </ItemInfo>
      <ItemInfo>{price}</ItemInfo>
      <RemoveButtonElement onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonElement>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutImage,
  CheckoutImageContainer,
  CheckoutItemContainer,
  BaseSpan,
  Arrow,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

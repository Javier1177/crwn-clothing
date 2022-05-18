import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

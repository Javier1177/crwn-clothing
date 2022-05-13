import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

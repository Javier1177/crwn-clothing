import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  Footer,
  FooterName,
  FooterPrice,
  ProductCardContainer,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </Footer>
      <Button onClick={addProductToCart} type={BUTTON_TYPE_CLASSES.inverted}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

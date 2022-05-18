import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  CategoryPreviewElement,
  CategoryPreviewTitle,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={`/shop/${title}`}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewElement>
        {products
          .filter((_, index) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewElement>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

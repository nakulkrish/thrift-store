import React from 'react';
import ProductQuantity from './ProductQuantity'; // Correct the path as per your folder structure

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>

      {/* Integrate ProductQuantity component */}
      <ProductQuantity />

      <button onClick={onClick}>View Details</button>
    </div>
  );
};

export default ProductCard;
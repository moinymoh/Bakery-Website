import React from 'react';

const ProductThumbnail = ({ product }) => {
  return (
    <div className="product-thumbnail">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductThumbnail;

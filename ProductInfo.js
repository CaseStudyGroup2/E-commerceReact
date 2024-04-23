import React from 'react';

const ProductInfo = ({ product, addToCart }) => {
  const { name, price, description } = product;

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: Php {price}</p>
      <p>Description: {description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductInfo;
import React, { useState } from 'react';
import CartSummary from './CartSummary';
import ProductInfo from './ProductInfo';

const ProductPages = ({ cart, setCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Pencils', price: 2.99, description: 'Pack of 10 pencils' },
    { id: 2, name: 'Notebooks', price: 5.99, description: 'Set of 3 notebooks' },
    { id: 3, name: 'Pens', price: 3.49, description: 'Set of 5 pens' },
    { id: 4, name: 'Highlighters', price: 4.99, description: 'Pack of 6 highlighters' },
    { id: 5, name: 'Markers', price: 7.99, description: 'Set of 8 markers' },
    { id: 6, name: 'Rulers', price: 1.99, description: 'Set of 2 rulers' },
    { id: 7, name: 'Glue Sticks', price: 3.99, description: 'Pack of 3 glue sticks' },
    { id: 8, name: 'Scissors', price: 4.49, description: 'Pair of scissors' },
    { id: 9, name: 'Calculator', price: 9.99, description: 'Basic calculator' },
    { id: 10, name: 'Backpack', price: 19.99, description: 'Sturdy backpack' }
  ]);

  const addToCart = (selectedProduct) => {
    const productInCart = cart.find(item => item.id === selectedProduct.id);
    if (productInCart) {
      // If product is already in cart, update quantity
      const updatedCart = cart.map(item =>
        item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If product is not in cart, add with quantity 1
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <CartSummary cart={cart} />
      {products.map(product => (
        <ProductInfo key={product.id} product={product} addToCart={() => addToCart(product)} />
      ))}
    </div>
  );
};

export default ProductPages;
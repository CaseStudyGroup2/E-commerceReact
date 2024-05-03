import React from 'react';

const CartSummary = ({ cart }) => {
  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Calculate total price in the cart
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: Php {totalPrice}</p>
    </div>
  );
};

export default CartSummary;

import React from 'react';

const CartSummary = ({ cart }) => {
  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((acc, curr) => {
    const itemPrice = curr.price * curr.quantity;
    return acc + itemPrice;
  }, 0);

  // Format total price in PHP currency
  const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  });

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {formatter.format(totalPrice)}</p>
    </div>
  );
};

export default CartSummary;
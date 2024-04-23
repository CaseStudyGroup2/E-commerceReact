import React from 'react';
import { Link } from 'react-router-dom';

const ViewCart = ({ cart, setCart }) => {
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cart.map(cartItem =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (item) => {
    const updatedCart = cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setCart([]); // Clear the cart
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{item.name}</strong> - Php {item.price} x {item.quantity}
                  </div>
                  <div>
                    <button className="btn btn-sm btn-secondary" onClick={() => decreaseQuantity(item)}>-</button>
                    <button className="btn btn-sm btn-secondary mx-1">{item.quantity}</button>
                    <button className="btn btn-sm btn-secondary" onClick={() => increaseQuantity(item)}>+</button>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
            <Link to="/products" className="btn btn-secondary ms-2">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewCart;

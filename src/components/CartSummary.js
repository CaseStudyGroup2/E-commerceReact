
const CartSummary = ({ cart }) => {
  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  
};

export default CartSummary;
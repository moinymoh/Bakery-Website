import React from 'react';

const Checkout = ({ cartItems }) => {
  const handleCheckout = () => {
    console.log('Checkout:', cartItems);
    // Perform any additional actions here, such as sending the cart data to a server
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;

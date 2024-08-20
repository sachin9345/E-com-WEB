import React, { Fragment } from 'react';
import './CartPage.css'; // Ensure you update the CSS file accordingly
import Cartitems from './Cartitems'
//import Products from '../Products/Products'
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  // Sample cart items with added image and description for design purposes
  

  const { items } = useSelector(state => state.cartState);
  const navigate = useNavigate();
 

  


  // Sample calculations (these could be dynamic based on actual cart contents)
  const itemsPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const shippingPrice = itemsPrice > 500 ? 0 : 20; // Free shipping for orders over ₹500
  const taxPrice = 0.1 * itemsPrice; // Assuming a 10% tax rate
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const checkoutHandler = ()  => {
    navigate('/login?redirect=shipping')

  }

  return (
    <Fragment>
       {items.length === 0 ? (
        <h2 className="emptycart">Your cart is empty</h2>
        
      ) : (
    <div className="cart-container">
      <div className="cart-page">
        <h2>Your Shopping Cart</h2>
       <Cartitems/>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Total Items:</span>
          <span>₹{itemsPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping:</span>
          <span>₹{shippingPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Tax:</span>
          <span>₹{taxPrice.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <strong>Total Payable:</strong>
          <strong>₹{totalPrice.toFixed(2)}</strong>
        </div>
        <button onClick={checkoutHandler} className="checkout-btn">Checkout</button>
      </div>
     
  
    </div>  
      )}
   

</Fragment>
  );
};

export default CartPage;

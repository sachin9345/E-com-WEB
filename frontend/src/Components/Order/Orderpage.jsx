import React from 'react';
import './Orderpage.css'; // Make sure the CSS file is created and imported for styling

const OrderingPage = () => {
  return (
    <div className="ordering-page">
      <h1>Complete Your Order</h1>

      <section className="section shipping-info">
        <h2>Shipping Information</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="Postal Code" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
        </form>
      </section>

      <section className="section payment-info">
        <h2>Payment</h2>
        <form>
          <div>
            <label>
              <input type="radio" name="paymentMethod" value="creditCard" checked />
              Credit Card
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="paymentMethod" value="paypal" />
              PayPal
            </label>
          </div>
          {/* Additional fields based on selected payment method can be dynamically shown */}
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Card Holder Name" required />
          <input type="month" placeholder="Expiry Date" required />
          <input type="text" placeholder="CVV" required />
        </form>
      </section>

      <section className="section confirm-order">
        <h2>Confirm Order</h2>
        {/* Dynamically generated order summary goes here */}
        <p>Order summary...</p>
        <button className="confirm-btn">Confirm and Pay</button>
      </section>
    </div>
  );
};

export default OrderingPage;

import React from 'react'
import './OrderSuccess.css'

const OrderSuccess = () => {
  return (
    <div className="successorder">
       <img src="success.png" alt="Order Success" width="200" height="200" />

       <h2>Your Order has been placed successfully.</h2>

       <a href="/orders">Go to Orders</a>
    </div>
  )
}

export default OrderSuccess

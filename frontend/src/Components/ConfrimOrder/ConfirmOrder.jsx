import React, { Fragment, useState } from 'react';
import './ConfirmOrder.css'; // Import the CSS file
import CheckoutSteps from '../Checkoutsteps/CheckoutSteps';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderCompleted } from '../../Slices/CartSlice';
import { createOrder } from '../../actions/OrderAction';


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

function ConfirmOrder() {
    const { items, shippingInfo, items: cartItems } = useSelector(state => state.cartState);
    const { user } = useSelector(state => state.authState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
    const itemsPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shippingPrice = itemsPrice > 500 ? 0 : 20;
    const taxPrice = 0.1 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    async function displayRazorpay() {
        const datas = {
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        }
        navigate('/payment'); 
        sessionStorage.setItem('orderInfo', JSON.stringify(datas))

    
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const data = await fetch('/api/v1/payment/process', { method: 'POST' }).then(t => t.json());

        var paymentData = {
            key: "rzp_test_Pd1wam22He09HZ", 
            amount: totalPrice * 100, 
            currency: "INR",
            name: "WEARIN",
            description: "Test Transaction",
            order_id: data.id,
           
            handler: function (response) {
                setPaymentSuccess(true);
                dispatch(orderCompleted())
                dispatch(createOrder(order))
                navigate('/order-success'); 
            },
            prefill: {
                name: user.name,
                email: user.email,
            },
            notes: {
                address:{
                    city: shippingInfo.city,
                    postalcode: shippingInfo.postalCode,
                    state: shippingInfo.state,
                    line1: shippingInfo.address
                }
                
            },
            theme: {
                color: "#3399cc"
            }
        };


        const paymentObject = new window.Razorpay(paymentData);
        paymentObject.open();
    }

    const backToShopping = () => {
        navigate('/'); 
    }

    
    const order = {
        orderItems : cartItems,
        shippingInfo
    }

    if(orderInfo) {
        order.itemsPrice = itemsPrice
        order.shippingPrice = shippingPrice
        order.taxPrice = taxPrice
        order.totalPrice = totalPrice
    }


    return (
        <Fragment>
            <CheckoutSteps steps={['Shipping Info', 'Confirm Order', 'Payment']} currentStep={1} />
            <div className="container">
            <div style={{ flex: 1 }}>
                    <div className="section">
                        <h4 className="header">Shipping Info</h4>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                        <p><b>Address:</b> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}</p>
                    </div>
                    <div className="section">
                        <h4 className="header">Your Cart Items:</h4>
                        {cartItems.map(item => (
                            <Fragment key={item.product}>
                                <div className="cartItem">
                                    <img className="image" src={item.image} alt={item.name} />
                                    <div className="itemDetails">
                                        <Link className="link" to={`/product/${item.product}`}>{item.name}</Link>
                                        <p className="description">{item.description || "No description available"}</p>
                                        <p className="size">Size: {item.selectedSize}</p>
                                    </div>
                                    <p>{item.quantity} x ₹{item.price} = <b>₹{item.quantity * item.price}</b></p>
                                </div>
                            </Fragment>
                        ))}
                        <button onClick={backToShopping} className="button" style={{ backgroundColor: '#ccc', color: '#333' }}>Back to Shopping</button>
                    </div>
                </div>
                <div className="summary">
                <h4 className="header">Order Summary</h4>
                    <p>Subtotal: <span>₹{itemsPrice.toFixed(2)}</span></p>
                    <p>Delivery charges: <span>{shippingPrice === 0 ? "Free Delivery" : `₹${shippingPrice.toFixed(2)}`}</span></p>
                    <p>Tax: <span>₹{taxPrice.toFixed(2)}</span></p>
                    <p>Total: <span>₹{totalPrice.toFixed(2)}</span></p>
                    <button onClick={displayRazorpay} className="button">Proceed to Payment</button>
                </div>
            </div>
            {paymentSuccess && <div className="alert success">Your order has been placed successfully!</div>}
        </Fragment>
    );
};

export default ConfirmOrder;

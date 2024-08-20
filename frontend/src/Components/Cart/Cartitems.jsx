import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cartitems.css';
import { decreaseCartItemQty, increaseCartItemQty, removeItemFromCart } from '../../Slices/CartSlice';

function CartPage() {
  const { items } = useSelector(state => state.cartState);
  const dispatch = useDispatch();

  const increaseQty = (item) => {
    const count = item.quantity;
    if (item.stock === 0 || count >= item.stock) return;
    dispatch(increaseCartItemQty(item.product));
  };

  const decreaseQty = (item) => {
    const count = item.quantity;
    if (count === 1) return;
    dispatch(decreaseCartItemQty(item.product));
  };


  return (
    <Fragment>
      
        <div className="cart-page">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-desc">Size: {item.selectedSize}</div>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                </div>
                <div className="item-quantity">
                  <button className="quantity-btn decrement" onClick={() => decreaseQty(item)}>-</button>
                  <input type="number" className="count" value={item.quantity} readOnly />
                  <button className="quantity-btn increment" onClick={() => increaseQty(item)}>+</button>
                  <button onClick={() => dispatch(removeItemFromCart(item.product))} className="delete-btn" >X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </Fragment>
  );
}

export default CartPage;

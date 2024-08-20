import React, { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../Slices/CartSlice";
import './ShippingForm.css';  // Importing the CSS for styling
import CheckoutSteps from '../Checkoutsteps/CheckoutSteps';
import { toast } from "react-toastify";

export const validateShipping = (shippingInfo, navigate) => {
   
    if(
        !shippingInfo.address||
        !shippingInfo.city||
        !shippingInfo.state|| 
        !shippingInfo.phoneNo||
        !shippingInfo.postalCode
        ) {
            toast.error('Please fill the shipping information',{position: toast.POSITION.BOTTOM_CENTER})
            navigate('/shipping')
    }
} 


const ShippingForm = () => {
    
    const {shippingInfo={} } = useSelector(state => state.cartState)

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [state, setState] = useState(shippingInfo.state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingInfo({address, city, phoneNo, postalCode, state}))
        navigate('/order/confirm')
    }




    return (
        <Fragment>
        
            <CheckoutSteps steps={['Shipping Info', 'Confirm Order','Payment']}
        currentStep={0} />
        
        <div className="shipping-form-wrapper">
            <form  onSubmit={submitHandler} className="shipping-form">
                <h1 className="form-title">Shipping Info</h1>
                <div className="form-group">
                    <label htmlFor="address_field">Address</label>
                    <input
                        type="text"
                        id="address_field"
                        className="form-input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        required
                        placeholder="Enter your address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city_field">City</label>
                    <input
                        type="text"
                        id="city_field"
                        className="form-input"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="Enter your city"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone_field">Phone No</label>
                    <input
                        type="text"
                        id="phone_field"
                        className="form-input"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postal_code_field">Postal Code</label>
                    <input
                        type="text"
                        id="postal_code_field"
                        className="form-input"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                        placeholder="Enter your postal code"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postal_code_field">State</label>
                    <input
                        type="text"
                        id="state_field"
                        className="form-input"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        placeholder="Enter your State"
                    />
                </div>
               
                <button
                    type="submit"
                    className="submit-btn"
                >
                    CONTINUE
                </button>
            </form>
        </div>
    </Fragment>
    );
}


export default ShippingForm;

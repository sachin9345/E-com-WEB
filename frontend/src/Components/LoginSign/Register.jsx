import React, { Fragment, useState } from 'react';
import './Register.css';
import wear from '../Assets/wearin.png';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setLoading(true);
        // Here you would usually handle the registration logic
        console.log("Registration successful");
        setLoading(false);
    };

    return (
        <Fragment>
        <div className="register-container">
        <div className="register-image-side">
            {/* Place your image here. Example: <img src="your-image-url.jpg" alt="Login" /> */}
        </div>
        <div className="register-form-side">
          <form onSubmit={submitHandler}>
            <div className="register-form">
            <img src={wear } alt="Login"  className="register-logo"/>
                <h2>Login to your account</h2>
                <p>Welcome to wearin</p>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" value={email}
                                onChange={e =>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" value={password}
                                onChange={e =>setPassword(e.target.value)}/>

                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" value={confirmPassword}
                                onChange={e =>setConfirmPassword(e.target.value)}/>

                <button className="register-button" type="submit" disabled={loading}>REGISTER</button>
                {/* Add Google and Phone Number login options here */}
                <p>Already a user? <Link to="/login" className="register-link">LOGIN</Link></p>
            </div>
            </form>
        </div>
    </div>
        </Fragment>
    );
}

export default Register;

import React from 'react';
import './Footer.css'; // Assuming your CSS file is named Footer.css
import { FaInstagram, FaFacebookF, FaYoutube, FaPhone, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                <div className="footer-section">
                    <img src="/footerlog.png" alt="Logo" className="footer-logo" />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <div className="social-icons">
                        <FaInstagram size="32px"/>
                        <FaFacebookF size="32px"/>
                        <FaYoutube size="32px"/>
                    </div>
                </div>

               
                <div className="footer-section">
                    <h4>MAY WE HELP YOU?</h4>
                    <a href="#contact">Contact Us</a>
                    <a href="#shipping">Shipping</a>
                    <a href="#payments">Payments</a>
                </div>

                
                <div className="footer-section">
                    <h4>YOU.WE.US</h4>
                    <a href="#shopall">Shop All New Arrivals</a>
                    <a href="#shopall">Shop All Men</a>
                </div>

                
                <div className="footer-section">
                    <h4>Customer Support</h4>
                    <div><FaPhone />97155 24124</div>
                    <div><FaEnvelope />Wearinshop@gmal.com</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


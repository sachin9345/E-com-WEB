import React, { useState } from 'react';
import './Sidenav.css'; 
import { Link } from 'react-router-dom';
import menu from "../Assets/menu.png";
import welog from "../Assets/wearin.png";
import profile from "../Assets/prof.png";
import ord from "../Assets/order.png";
import shop from "../Assets/shop.png";
import ar from "../Assets/AR.png";
import logout from "../Assets/logout.png";


function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidee">
      <img src={menu} onClick={toggleNav} alt='' height="20px" />
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className="llog">
          <img src={welog} alt='ww' height="50px" />
        </div>
        <div className="name">
          <img src={profile} alt='' height="50px" />

          <Link to='/login' onClick={closeNav}><p>SACHIN</p></Link>
        </div>
        <div className="orders">
          <img src={ord} alt='' />
          <p>ORDERS</p>
        </div>
        <div className="shops">
          <img src={shop} alt='' />
          <p>SHOP<i className="fa fa-caret-down"></i></p>
        </div>
        <div className="whatar">
          <img src={ar} alt='' />
          <p>WHAT IS AR?</p>
        </div>
        <div className="logout">
          <img src={logout} alt='' />
          <p>Logout</p>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleNav}></div>}
      <div className={`content ${isOpen ? 'pushed' : ''}`}></div>
    </div>
  );
}

export default Sidenav;


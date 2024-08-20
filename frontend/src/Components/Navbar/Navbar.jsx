import React from 'react';
import './Navbar.css';
import logo from '../Assets/wearin.png'
import Sidenav from '../Sidenav/Sidenav';
import { Link, useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import cartIcon from '../Assets/cart.png';
import likesIcon from '../Assets/heart.png';
import {useDispatch,useSelector} from 'react-redux';
import { logout } from '../../actions/UserActions';
import {toast} from 'react-toastify'
import ord from "../Assets/order.png";
import logouts from "../Assets/logout.png";




function Navbar()  {
  const navigate = useNavigate();
  const location = useLocation();
  const {isAuthenticated, user} = useSelector(state => state.authState);
  const { items:cartItems} = useSelector(state => state.cartState)
  const dispatch = useDispatch();
 const logoutHandler = () => {
  if(!isAuthenticated){
    toast.success("Logged out successfully")
  }
    dispatch(logout);
 }

 const isActive = (path) => {
  return location.pathname === path;
};

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="menu-mobile-screen">
          <Sidenav/>
        </div>
        <Link to="/"><img src={logo} alt="Logo" /></Link>
        <div className="profile">
        <button onClick={() => navigate('/cartpage')} style={{ position: 'relative' }}>
            <img src={cartIcon} alt="Cart" />
            <span style={{
              position: 'absolute',
              right: 3,
              top: 0,
              backgroundColor: '#D2FF3A',
              color: 'black',
              borderRadius: '50%',
              padding: '3px 6px',
              fontSize: '8px',
              fontWeight: 800,
            }}>
              {cartItems.length}
            </span>
          </button>        
          </div>
      </div>
      
      <div className="menu-large-screen">
        <div className="categories">
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/shop" className={isActive('/shop') ? 'active' : ''}>Shop</Link>
          <Link to="/explore" className={isActive('/explore') ? 'active' : ''}>Explore</Link>
          <Link to="/about-us" className={isActive('/about-us') ? 'active' : ''}>About Us</Link>
        </div>
        <input type="search" placeholder="Search" className="search-input"/>
        <div className="nav-buttons">
          <button onClick={() => navigate('/cartpage')} style={{ position: 'relative' }}>
            <img src={cartIcon} alt="Cart" />
            <span style={{
              position: 'absolute',
              right: 3,
              top: 0,
              backgroundColor: '#D2FF3A',
              color: 'black',
              borderRadius: '50%',
              padding: '3px 6px',
              fontSize: '8px',
              fontWeight: 800,
            }}>
              {cartItems.length}
            </span>
          </button>
          
          {/* Likes Button */}
          <button onClick={() => navigate('/likes')} style={{ position: 'relative' }}>
            <img src={likesIcon} alt="Likes" />
            <span style={{
              position: 'absolute',
              right: 3,
              top: 0,
              backgroundColor: '#D2FF3A',
              color: 'black',
              borderRadius: '50%',
              padding: '3px 6px',
              fontSize: '8px',
              fontWeight: 800,
            }}>
              1
            </span>
          </button>
        
         <div className="logbut">
          { isAuthenticated ? (
            <div className="logoutbut">
               <p>{user.name}</p>
               <div className="dropdown-content">
                <div className="myprofile">
              <Link to="/my-orders">My Profile</Link>
                </div>
                <div className="dashboardss">
                { user.role === 'admin' && <Link to="/admin/dashboard">Dashboard</Link>}
                </div>
                <div className="myorders">
                <img src={ord} alt='' />
                <Link to="/my-profile">My Orders</Link>
                </div>
                <div className="logoutdiv">
                <img src={logouts} alt='' />
                <p onClick={logoutHandler}>Logout</p>
                </div>
                </div>
            </div>
          ):
          <p onClick={() => navigate('/login')}>Login</p>
          }
          </div>
        </div>
      </div>
      
      <input type="search" placeholder="Search" className="search-input-mobile"/>
    </nav>
  );
};

export default Navbar;

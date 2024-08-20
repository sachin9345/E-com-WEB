import {Fragment, useEffect, useState } from 'react';
import './Loginss.css'
import wear from '../Assets/wearin.png'
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { clearAuthError, login } from '../../actions/UserActions';
import {toast} from 'react-toastify';

const Logins = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, isAuthenticated } = useSelector(state => state.authState)
  const redirect = location.search?'/'+location.search.split('=')[1]:'/';

  const  submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
  }

  useEffect(() => {
      if(isAuthenticated) {
        navigate(redirect)      
    }
      if(error) {
      toast(error,{
        type: 'error',
        onOpen: ()=> {dispatch(clearAuthError)}
      })
      return
      }

      
  },[isAuthenticated,dispatch,navigate,redirect,error])

  return (
    <Fragment>
    <div className="login-container">
    <div className="login-image-side">
       
    </div>
    <div className="login-form-side">
      <form onSubmit={submitHandler}>
        <div className="login-form">
        <img src={wear } alt="Login"  className="login-logo"/>
            <h2>Login to your account</h2>
            <p>Welcome to wearin</p>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email}
                            onChange={e =>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password}
                            onChange={e =>setPassword(e.target.value)}/>
            <button className="login-button" type="submit" disabled={loading}>LOGIN</button>
           
            <p>New user? <Link to="/register" className="register-link">Create account</Link></p>
        </div>
        </form>
    </div>
</div>
    </Fragment>
  );
}

export default Logins

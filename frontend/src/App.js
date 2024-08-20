
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Proddetails from './Components/Proddetails/Proddetails';
import CartPage from './Components/Cart/Cartpage';
import OrderingPage from './Components/Order/Orderpage';
import {ToastContainer} from 'react-toastify';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/UserActions';
import Register from './Components/LoginSign/Register';
import ShippingForm from './Components/Shippinginfo/Shippingform';
import ProtectedRoute from './Components/routes/protectedroute';
import ConfirmOrder from './Components/ConfrimOrder/ConfirmOrder';
import Payment from './Components/Cart/Payment';
import OrderSuccess from './Components/OrderSuccess/OrderSuccess';
import Admindash from './Admin/Admindash';

function App() {

  useEffect(()=>{
    store.dispatch(loadUser)

  })
  return (
    <>
      <Navbar/>
      <ToastContainer/>
      <div className='userroutes'>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/product/:id' element={<Proddetails/>} />
        <Route path="/Cartpage" element={<CartPage/>} />
        <Route path="/Orderpage" element={<OrderingPage/>} />
        <Route path='/shipping' element={<ProtectedRoute><ShippingForm/></ProtectedRoute> } />
        <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder/></ProtectedRoute> } />
        <Route path='/payment' element={<ProtectedRoute><Payment/></ProtectedRoute> } />
        <Route path='/order-success' element={<ProtectedRoute><OrderSuccess/></ProtectedRoute> } />
        </Routes>
        <Routes>
          <Route path='/admin/dashboard' element={ <ProtectedRoute isAdmin={true}><Admindash/></ProtectedRoute> } />
        </Routes>
        
        </div>
    

   </>
  );
}

export default App;

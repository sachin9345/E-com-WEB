import React, { useEffect } from 'react';
import Card from './Card';
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../actions/productActions';

function Dashboard() {
  const { products = [] } = useSelector( state => state.productsState );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAdminProducts);
  },[dispatch])
  
  return (
    <div className="dashboard">
      <h1 className="my-4">Admin Dashboard</h1>
      <div className="card-container">
        
        
        <Card title="PAYMENTS" value={products.length} color="primary" detailLink="#" />
        <Card title="PRODUCTS" value="23" color="success" detailLink="#" />
        <Card title="Orders" value="345" color="danger" detailLink="#" />
        <Card title="Users" value="55" color="info" detailLink="#" />
       
      </div>
    </div>
  );
}

export default Dashboard;

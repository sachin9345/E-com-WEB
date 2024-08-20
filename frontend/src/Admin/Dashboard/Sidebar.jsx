import React from 'react';
import './Sidebar.css'; // Import the CSS for sidebar styling
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>              
                      </li>
                <li className="sidebar-dropdown">
                    <a href="/admin/products" className="sidebar-toggle">Products</a>
                    <ul className="sidebar-submenu">
                        <li><a href="/admin/products">All</a></li>
                        <li><a href="/admin/products/create">Create</a></li>
                    </ul>
                </li>
                <li>
                    <Link to="/admin/orders">Orders</Link>
                </li>
                <li>
                    <a href="/admin/users">Users</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

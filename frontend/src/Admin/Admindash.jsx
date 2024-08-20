import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Dashboard/Sidebar';

function App() {
  return (
    <div className="container">
     <Sidebar/>
     <Dashboard/>
    </div>
  );
}

export default App;

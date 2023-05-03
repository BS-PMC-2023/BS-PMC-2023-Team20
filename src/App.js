
import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Singup from './Components/Singup/Singup';
import Singin from './Components/Singin/Singin';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import Myorders from './Components/Myorders/Myorders';
import ProtectedRoute from './Permissions/ProtectedRoute';
import { fetchUserData } from './utils/fetchLocalStorageData';

function App() {

  var userData = fetchUserData();
  var adminState=false;

  if (userData)
  {
    if(userData.userRoles.includes('admin'))
    adminState=true;
  }

  return (
    <Router>
    <>
    <Navbar/>
    <div className = 'content'>
      <Routes>
        <Route path="/" element={<Home />} />     

        <Route path="/Sing-up" element={<Singup />} />     

        <Route path="/Sing-in" element={<Singin />} />     

        <Route path="Order" element={<Order />} />

        <Route path="Myorders" element={<Myorders />} />

        <Route element={<ProtectedRoute user={adminState} />}>
          <Route path="Admin" element={<Admin />} />
        </Route>

      </Routes>
    </div>
    <Footer/>
    </>
    </Router>

  );
}

export default App;

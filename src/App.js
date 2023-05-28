
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
  var Logedin=false;

  if (userData)
  {
    if(userData.userRoles.includes('admin'))
    adminState=true;
  }
  if (userData){
    if(userData.userRoles.includes('user'))
    Logedin=true;
  }

  return (
    
      <Router>
      <>
      <Navbar/>
      <div className = 'content'>
        <Routes>
          <Route element={<ProtectedRoute user={Logedin} />}>
            <Route path="/" element={<Home />} />     
          </Route>

          <Route path="/Sing-up" element={<Singup />} />     

          <Route path="/Sing-in" element={<Singin />} />     

          <Route element={<ProtectedRoute user={Logedin} />}>
            <Route path="Order" element={<Order />} />    
          </Route>
          
          <Route element={<ProtectedRoute user={Logedin} />}>
            <Route path="Myorders" element={<Myorders />} />  
          </Route>

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

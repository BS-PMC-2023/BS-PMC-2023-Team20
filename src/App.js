
import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import Myorders from './Components/Myorders/Myorders';
import ProtectedRoute from './Permissions/ProtectedRoute';
import { fetchUserData } from './utils/fetchLocalStorageData';
import Confirmation from './Components/Confirmation/Confirmation';


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

        <Route path="/Sign-up" element={<Signup />} />     

        <Route path="/Sign-in" element={<Signin />} />     

          <Route element={<ProtectedRoute user={Logedin} />}>
            <Route path="Order" element={<Order />} />    
          </Route>
          
          <Route element={<ProtectedRoute user={Logedin} />}>
            <Route path="Myorders" element={<Myorders />} />  
          </Route>

        <Route element={<ProtectedRoute user={adminState} />}>
          <Route path="Admin" element={<Admin />} />
          <Route path="Confirmation" element={<Confirmation />} />
        </Route>

        </Routes>
      </div>
      <Footer/>
      </>
      </Router>

    
  );
}

export default App;

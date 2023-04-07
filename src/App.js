
import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Singup from './Components/Singup/Singup';
import Singin from './Components/Singin/Singin';
import Order from './Components/Order/Order';


function App() {
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


      </Routes>
    </div>
    <Footer/>
    </>
    </Router>

  );
}

export default App;

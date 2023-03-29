
import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Singup from './Components/Singup/Singup';
import Singin from './Components/Singin/Singin';


function App() {
  return (
    <Router>
    <>
    <Navbar/>
    <div className = 'content'>
      <Switch>
        <Route exact path="/">
          <Home/>       
        </Route>

        <Route path="/Sing-up">
          <Singup/>
        </Route>

        <Route path="/Sing-in">
          <Singin/>
        </Route>

      </Switch>
    </div>
    <Footer/>
    </>
    </Router>

  );
}

export default App;

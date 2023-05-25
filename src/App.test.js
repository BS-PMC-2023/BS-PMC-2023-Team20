import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Singup from './Components/Singup/Singup';
import Singin from './Components/Singin/Singin';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import Myorders from './Components/Myorders/Myorders';
import ProtectedRoute from './Permissions/ProtectedRoute';
import Confirmation from './Components/Confirmation/Confirmation';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });
// Mock fetchUserData function
jest.mock('./utils/fetchLocalStorageData', () => ({
    fetchUserData: jest.fn(),
  }));
  
  describe('App component', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
  
    it('renders the Navbar component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Navbar)).toHaveLength(1);
    });
  
    it('renders the Footer component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Footer)).toHaveLength(1);
    });
  
    it('renders the Singup component when the route matches "/Sing-up"', () => {
      const wrapper = shallow(<App />);
      const singupRoute = wrapper.find({ path: '/Sing-up' });
      expect(singupRoute.props().element).toEqual(<Singup />);
    });
  
    it('renders the Singin component when the route matches "/Sing-in"', () => {
      const wrapper = shallow(<App />);
      const singinRoute = wrapper.find({ path: '/Sing-in' });
      expect(singinRoute.props().element).toEqual(<Singin />);
    });
  });
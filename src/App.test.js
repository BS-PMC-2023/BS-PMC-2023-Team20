import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
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
  
    it('renders the Signinup component when the route matches "/Signin-up"', () => {
      const wrapper = shallow(<App />);
      const SignupRoute = wrapper.find({ path: '/Sign-up' });
      expect(SignupRoute.props().element).toEqual(<Signup />);
    });
  
    it('renders the Signinin component when the route matches "/Signin-in"', () => {
      const wrapper = shallow(<App />);
      const SigninRoute = wrapper.find({ path: '/Sign-in' });
      expect(SigninRoute.props().element).toEqual(<Signin />);
    });
  });
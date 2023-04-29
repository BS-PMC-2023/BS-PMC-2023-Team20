import React from 'react';
import Home from './Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Home component', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });


  it('renders a video', () => {
    const wrapper = shallow(<Home />);
    const video = wrapper.find('video');
    expect(video).toHaveLength(1);
  });

  it('renders a section with class "home"', () => {
    const wrapper = shallow(<Home />);
    const section = wrapper.find('section.home');
    expect(section).toHaveLength(1);
  });

  it('renders a Main component', () => {
    const wrapper = shallow(<Home />);
    const main = wrapper.find('Main');
    expect(main).toHaveLength(1);
  });
});

import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Footer from './Footer';
import { ReactComponent as SCEicon } from '../../Assets/SCEicon.svg';
Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains a video element with proper attributes', () => {
    const wrapper = shallow(<Footer />);
    const video = wrapper.find('video');
    expect(video).toHaveLength(1);
  });


  it('contains links to YouTube and Instagram pages', () => {
    const wrapper = shallow(<Footer />);
    const youtubeLink = wrapper.find('a[href="https://www.youtube.com/@scebsc"]');
    const instagramLink = wrapper.find('a[href="https://www.instagram.com/sce.academy/"]');
    expect(youtubeLink).toHaveLength(1);
    expect(instagramLink).toHaveLength(1);
  });
});

  describe('SCEicon', () => {
    it('renders without errors', () => {
        const wrapper = shallow(<SCEicon />);
        expect(wrapper.exists()).toBe(true);
    });
  });
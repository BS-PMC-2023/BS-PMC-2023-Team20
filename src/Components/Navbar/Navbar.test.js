import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Navbar from './Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar component when user is not logged in', () => {
    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Navbar />);
    });
    
    it('renders a Sign-in button', () => {
    expect(wrapper.find('Link[to="/Sing-in"]').text()).toEqual('Sing-in');
    });
    
    it('renders a Sign-up button', () => {
    expect(wrapper.find('Link[to="/Sing-up"]').text()).toEqual('Sing-up');
    });
    
    it('does not render My Orders link', () => {
    expect(wrapper.find('a[href="Myorders"]').exists()).toBeFalsy();
    });
    
    it('does not render admin link', () => {
    expect(wrapper.find('a[href="admin"]').exists()).toBeFalsy();
    });
    
    it('displays correct logo text', () => {
    expect(wrapper.find('h1').text()).toEqual('Warehouse.');
    });
    
    it('toggles navbar when toggleNavbar button is clicked', () => {
    const toggleNavbarBtn = wrapper.find('.toggleNavbar');
    toggleNavbarBtn.simulate('click');
    expect(wrapper.find('.navBar.activeNavbar').exists()).toBeTruthy();
    });
    
    it('closes navbar when closeNavbar button is clicked', () => {
    const toggleNavbarBtn = wrapper.find('.toggleNavbar');
    toggleNavbarBtn.simulate('click');
    const closeNavbarBtn = wrapper.find('.closeNavbar');
    closeNavbarBtn.simulate('click');
    expect(wrapper.find('.navBar').exists()).toBeTruthy();
    });
    });



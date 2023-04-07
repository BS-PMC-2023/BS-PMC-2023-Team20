import {render, screen,fireEvent} from '@testing-library/react'
import App from '../../App.js'
import '@testing-library/jest-dom'

test('its render specific page when the myorder clicking', () =>{
    //render the component 
    render(<App/>);
    //find the MyOrders button
    const MyOrders= screen.getByRole('link',{ name: /My Orders/i });
    //Simulate clicking the button
    fireEvent.click(MyOrders);
    expect(window.location.pathname).toBe('/Myorders');
    

    //find the admin button
    const admin= screen.getByRole('link',{ name: /admin/i });
    //Simulate clicking the button
    fireEvent.click(admin);
    expect(window.location.pathname).toBe('/admin');

    
    }
)

test('its render specific page when the admin clicking',() =>{
     //render the component 
     render(<App/>);
     //find the MyOrders button
     const admin= screen.getByRole('link',{ name: /admin/i });
     //Simulate clicking the button
     fireEvent.click(admin);
     expect(window.location.pathname).toBe('/admin');
     
    }
)

test('its render specific page when the Home clicking',() =>{
    //render the component 
    render(<App/>);
    //find the MyOrders button
    const Home= screen.getByRole('link',{ name: /Home/i });
    //Simulate clicking the button
    fireEvent.click(Home);
    expect(window.location.pathname).toBe('/');
    
   }
)

test('its check if the logo is exist and render to the right page',() =>{
    //render the component 
    render(<App/>);
    //find the MyOrders button
    const logoElement = screen.getByTestId('logo');
    //check if the logo is exsit
    expect(logoElement).toBeInTheDocument();
 
    //Simulate clicking the button
    fireEvent.click(logoElement);
    //checks if its render to the right page
    expect(window.location.pathname).toBe('/');

   }
)

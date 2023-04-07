import {render, screen,fireEvent} from '@testing-library/react'
import App from '../../App.js'
import '@testing-library/jest-dom'


test('its check if the video is working', ()=> {
    //render the component 
    render(<App/>);
    //
    const videoElement = screen.getByTestId('video');
    expect(videoElement).toBeInTheDocument();

    }
)
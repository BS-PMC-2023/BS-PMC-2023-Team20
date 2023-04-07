import {render, screen,fireEvent} from '@testing-library/react'
import App from '../../App.js'
import '@testing-library/jest-dom'


test('its check if the video is working', ()=> {
    //render the component 
    render(<App/>);
    //get the video
    const videoElement = screen.getByTestId('video');
    //check if the video is exsit
    expect(videoElement).toBeInTheDocument();

    }
)
import './Home.css'
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Main from '../Main/Main';


const Home = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])
    
    return (
    
        <><section id='home' className='home'>
          <div className="overlay"></div>
    
          <div data-aos="fade-down" className="homeContent container">
            <div className="textDiv">
              <span className="smallText">
                Our Warehouse
              </span>

              
            </div>
            
          </div>
    
          
        </section><Main /></> 
        
      )
  
}

export default Home
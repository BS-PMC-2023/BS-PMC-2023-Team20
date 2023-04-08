import React, { useEffect } from 'react'
import './Footer.css'
import video from "../../Assets/video2.mp4";
import { ReactComponent as SCEicon } from "../../Assets/SCEicon.svg";
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
const Footer = () => {
   useEffect(()=>{

      Aos.init({duration: 2000})
   }, [])
  return (
    <section id='footer'className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
     <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" data-aos-duration="2000" className="text">
        </div>
      </div>
       
       <div className="footerCard flex">
         <div className="footerIntro flex">
         <div className="logoDiv">
            <a href="#" className="logo flex"><h1><SCEicon className='icon' />  Warehouse.</h1></a>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000"  className="footerParagraph">
          The warehouse of the Department of Visual Communication
          Sami Shamoon College
          </div>

          <div data-aos="fade-up" data-aos-duration="3000"  className="footerSocials flex">       
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          </div>

         </div>

         <div className="footerDiv flex">
           <small>Warehouse.</small>
           <small>COPYRIGHTS RESERVED - Daniel Markov & Anton Volkov & Pavel Kormilchik & Orel Meir</small>
         </div>
       </div>

     </div>

    </section>
  )
}

export default Footer
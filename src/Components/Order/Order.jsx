import './Order.css'
import React, {useEffect,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import Aos from 'aos'
import { auth } from "../../firebase-config";
import {HiOutlineLocationMarker} from 'react-icons/hi'



const Order = () => {
    const { state: item } = useLocation();
    const [user, loading] = useAuthState(auth);
    const [FromDate, setFromDate] = useState("");
    const [ReturnDate, setReturnDate] = useState("");
    
    useEffect(()=>{
      Aos.init({duration: 4000})
  
    console.log(item)
    }, [user])


    return (
        <section id='main' className='main section container'>
        <div className="secTitle">
          <h3 className="title">
            Order item now
          </h3>
        </div>
  
        <div className="secContent grid">        
                  <div className="imageDiv">
                  <img src={item.ImageUrl} alt="" />
                  </div>
      
                <div className="cardInfo">
                  <h4 className="Title"> {item.ItemType}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">Location: {item.Location}</span>
                  </span>
  
                  <div className="Sirel">
                  <p>Serial: {item.Serial}</p>
                  </div>
        
                  <div className="desc">
                  <p>Description: {item.Description}</p>
                  </div>
  
                  </div>
                  </div>


      </section>

)
  
}

export default Order
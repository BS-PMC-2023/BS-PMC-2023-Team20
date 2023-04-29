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
  
         
      </section>

)
  
}

export default Order
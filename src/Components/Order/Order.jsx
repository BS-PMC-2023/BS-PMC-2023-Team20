import './Order.css'
import React, {useEffect,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import Aos from 'aos'
import { auth } from "../../firebase-config";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {doc, getDoc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore";
import { uid } from 'uid'
import { db,} from "../../firebase-config";




const Order = () => {
    const { state: item } = useLocation();
    const [user, loading] = useAuthState(auth);
    const [FromDate, setFromDate] = useState("");
    const [ReturnDate, setReturnDate] = useState("");
    
    useEffect(()=>{
      Aos.init({duration: 4000})
  
    console.log(item)
    }, [user])

    let navigate = useNavigate();

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
      
      const handleSubmit = async () => {
        const getuser = doc(db, 'users', user.uid);
        const data = await getDoc(getuser);
        var userData = data.data();
    
        const getitem = doc(db, 'items', item.uuid);
    
        var itemWithoutreservations = Object.assign({}, item);
        delete itemWithoutreservations.reservations; 
    
        var ruid = uid();
        await setDoc(doc(db, "reservations", ruid), {
          FirstName: userData.FirstName,
          LastName: userData.LastName,
          Userid: user.uid,
          Itemid: item.uuid,
          FromDate: FromDate,
          ReturnDate: ReturnDate,
          timeStamp: serverTimestamp(),
        });
    
        await updateDoc(getitem, {
          reservations: [...item.reservations, {"FirstName":userData.FirstName,"LastName":userData.LastName,"ruid":ruid}]
        });
    
    
        await updateDoc(getuser, {
          reservations: [...userData.reservations, ruid]
        });
    
    
            
            await updateDoc(getuser, {
            });
        await sleep(1000);
        navigate("/Myorders");
      }

      const disableDates=()=>{
        var today,dd,mm,yyyy;
        today=new Date();
        dd=today.getDate()+1;
        mm=today.getMonth()+1;
        yyyy=today.getFullYear();
        return yyyy+"-"+mm+"-"+dd;
      }

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
  
  
          <div >         
            <div>
                <form className="card-form">
                <div className="form-group ">
                <div className="DepartInput">
              <label htmlFor="date">From:</label>
              <div className="input flex">
              <input type="date" value={FromDate} min={new Date().toISOString().slice(0,10)} onChange={(event) => { setFromDate(event.target.value); } } />
              </div>
            </div>   
                  </div>
  
                  <div className="ReturnInput">
                <label htmlFor="date">Return:</label>
                <div className="input flex">
                  <input type="date" value={ReturnDate} min={FromDate} onChange={(event) => { setReturnDate(event.target.value); } } />
                </div>
              </div>
              {FromDate && ReturnDate && (
                <div>
                    <p>Number of rent days: {Math.ceil((new Date(ReturnDate) - new Date(FromDate)) / (1000 * 60 * 60 * 24))}</p>
                </div>
                )}
                </form>             
              <button  className="btn">
              <a onClick={ () => {  
                handleSubmit();
                }}>Submit</a> 
            </button> 
        </div>
             </div>              
            </div>
          </div>
      </section>     
)  
}

export default Order
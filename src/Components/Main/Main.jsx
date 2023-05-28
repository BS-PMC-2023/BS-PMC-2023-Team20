import React, {useEffect,useState} from 'react'
import './Main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiClipboardList} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

const Main = ({Filters}) => {

    const ItemsRef = collection(db,"items")
    const [Items,setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
      try{
        fetchItems();
      }catch(error){
        console.log(error.message);
        setErrorMessage('Database is down.');
      }

        Aos.init({duration: 4000})
      }, [Filters])

      async function fetchItems(){
        try {
          let itemQuery = ItemsRef;
      
          // If a filter has been set, apply it to the query.
          if (Filters && Filters[0] && Filters[0].ItemType) {
            itemQuery = query(ItemsRef, where("ItemType", "==", Filters[0].ItemType));
          }
      
          const data = await getDocs(itemQuery);
          setItems(data.docs.map((doc) => (doc.data())));
        } catch (error) {
          console.error("Error fetching items: ", error);
        }
      }

    const Order = async (item) => {
        navigate("Order", { state: item });
    };
    const renderErrorMessage = () => {
      if (errorMessage) {
        return (
          <div className="error-notification">
            <div className="error-bubble">
              {errorMessage}
            </div>
          </div>
        );
      }
      return null;
    };

    return (
        <section id='main' className='main section container'>
        <div className="secTitle">
          <h3 className="title">
            Available items
          </h3>
        </div>      
         <div className="secContent grid">
        {
          Items.map((item,index) => {
            return (
              
              <div key={index} data-aos="fade-up" className="singleDestination">
        
              <div className="imageDiv">
              <img src={item.ImageUrl} alt="" />
              </div>
   
             <div className="cardInfo">
              <span className="continent flex">
                 <HiOutlineLocationMarker className="icon"/>
                 <span className="name">location: {item.Location}</span>
              </span>
   
              <div className="fees flex">
                 <div className="grade ">

                   <span  className="textD ">Serial </span>
                   <span>{item.Serial} </span>
                 </div>  
                  
              </div>
                
                <div className="desc">
               <p>Description:{item.Description}</p>
              </div>
                <button className='btn flex'  onClick={() => Order(item)}>Order <HiClipboardList className="icon"/> </button>
                </div>
              </div>
      
            )
          }) 
        }{renderErrorMessage()}
      </div>     
</section>

)
  
}

export default Main
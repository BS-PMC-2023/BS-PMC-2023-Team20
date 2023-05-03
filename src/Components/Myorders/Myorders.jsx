import React, {useEffect,useState} from 'react'
import './Myorders.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { auth, db} from "../../firebase-config";
import {collection,doc,getDoc,getDocs,query, where} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Promise } from 'es6-promise';


const Myorders = () => {
    useEffect(()=>{
      Aos.init({duration: 4000})
   }, [])

   const [Reservations,setReservations] = useState([]);
   const [Items,setItems] = useState();
   const [user, loading] = useAuthState(auth);


  useEffect(() => {
    fetchItems();

  }, [Reservations,user])

  const fetchItems=async()=>{
    if (!user) return;

    const q = query(collection(db, "reservations"), where("Userid", "==", user.uid));
    const data = await getDocs(q);
    const reservations = data.docs.map((doc) => doc.data());
    setReservations(reservations);
  
    const items = await Promise.all(
      reservations.map((res) => {
        const itemId = res.Itemid;
        const itemDocRef = doc(db, "items", itemId);
        return getDoc(itemDocRef).then((doc) => doc.data());
      })
    );
    setItems(items);

  }

export default Myorders
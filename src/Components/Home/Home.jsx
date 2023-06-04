import React, { useEffect } from 'react'
import './Home.css'
import video from "../../Assets/video3.mp4";
import { GrLocation, GrPowerReset } from 'react-icons/gr'
import { AiOutlineSearch } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react';
import Main from '../Main/Main';


const Home = () => {

  const [ReciveDate, setReciveDate] = useState("");
  const [ReturnDate, setReturnDate] = useState("");
  const [Filters, setFilters] = useState(null);


  const [ItemType, setItemType] = useState(null);


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  const onChange = (event) => {
    setItemType(event.target.value);
  };

  const SetSearch = () => {
    const scrollOffset = 700; // Adjust this value to control the scroll distance
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    const newPosition = currentPosition + scrollOffset;
    window.scrollTo({
      top: newPosition,
      behavior: 'smooth' // You can use 'auto' for instant scrolling
    });
    setFilters(null); //reset old filters
    setFilters([{ ItemType }]);
  };


  const ResetSetSearch = () => {
    setFilters(null); //reset old filters
    setReciveDate("");
    setReturnDate("");
  };

  return (

    <><section id='home' className='home'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted type="video/mp4" className='Vid'></video>

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Warehouse
          </span>
          <h1 data-aos="fade-down" className="homeTitle">
            Search your item
          </h1>
        </div>

        <div data-aos="fade-down" className="cardDiv grid">

          <div className="FromInput">
            <label htmlFor="ticketsAmount">choose item type:</label>
            <div className="input flex">
              <select onChange={onChange}>
                <option value="1">Camera</option>
                <option value="2">Recording studio</option>
                <option value="3">Projector</option>
                <option value="4">Apple</option>
                <option value="5">Tripod</option>
                <option value="6">Cables</option>
                <option value="7">Lights</option>
                <option value="7">Convertors</option>
              </select>
            </div>
          </div>


          <div className="searchOptions flex" onClick={SetSearch}>
            <span>Search</span>
            <AiOutlineSearch className="icon" />
          </div>

          <div className="ResetsearchOptions flex" onClick={ResetSetSearch}>
            <span >Show All</span>
            <GrPowerReset className="icon" />
          </div>

        </div>

      </div>


    </section><Main Filters={Filters} /></>

  )

}

export default Home
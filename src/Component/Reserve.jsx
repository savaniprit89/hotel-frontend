import React, { useContext, useState } from 'react'
import './Reserve.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faList } from "@fortawesome/free-solid-svg-icons";
import useFetch from '../Hooks/useFetch'
import { SearchContext } from '../context/SearchContext'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Reserve({setopen,hotelId}) {//theser open for reserve pop up and hotel id for which room avaialable  here setopen variable will be share between reserve and hotel component one can uoadte in any conmponent
 
    const {data,loading,error}=useFetch(`https://booking-backend-6nn8.onrender.com/hotel/room/${hotelId}`)
    const [selectedroom,setselectedroom]=useState([])
    const {dates}=useContext(SearchContext)//here dates are in range
    const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
 
      const date = new Date(start.getTime());

      let list = [];
  
      while (date <= end) {
        list.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
      }
      console.log("q",list)
  
      return list;
    };
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);//it will get list of dates
    console.log("s",alldates)
    const isAvailable = (roomnumber) => {
      const isFound = roomnumber.unavailabledates.some((date) =>
        alldates.includes(new Date(date).getTime())
      );
  console.log("savani",!isFound)
      return !isFound;
    };
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setselectedroom(
          checked
            ? [...selectedroom, value]//if new room selected then add it 
            : selectedroom.filter((item) => item !== value)//if room is uncjecked then remove it
        );
      };
      console.log(selectedroom)
      const navigate=useNavigate()
      const handleClick = async () => {
      try {
        await Promise.all(selectedroom.map((roomId)=>{//promise used when map is useed for items
          console.log("preet",alldates)
          const res =axios.put(`https://booking-backend-6nn8.onrender.com/room/availability/${roomId}`,{dates:alldates});
        console.log(res.data)
          return res.data;
        }))
        setopen(false)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
      };
      console.log("preet",!isAvailable)
    return (
    <div className="reserve">
    <div className="rContainer">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="rClose"
        onClick={() => setopen(false)}
      />
  <span>Select your rooms:</span>
  {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomnumber.map((roomNumber) => (
                <div className="room">  
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
      </div>
  )
}

export default Reserve
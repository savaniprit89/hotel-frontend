import React, { useContext } from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faCarRear, faL, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { AuthContext } from '../context/AuthContext copy'
function Header({type}) {
    const [destination,setdestination]=useState("")
    const {user,loading,error}=useContext(AuthContext);
    const [dates, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[open,setOpen]=useState(false)
      const[openoption,setopenOption]=useState(false)
      const[options,setoptions]=useState({
        adult:1,
        children:0,
        room:1
      })
      const handleoption=(name,op)=>{
        setoptions(prev=>{
            return{
                ...prev,[name]:op === "i" ? options[name]+1 :options[name]-1
            }
        })
      }
      const navigate=useNavigate()
      const {dispatch}=useContext(SearchContext)
      const handlesearch=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})    //here first time new search is amade in main page
navigate('hotels',{state:{
    destination,dates,options
}})
      }


  return (
    <div className='header'>
    <div className={type !== "list" ? "headerContainer" : "listmode"}>
    <div className='headerlist'>
        <div className='headerListItem active'>
        <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faCar}/>
            <span>Car Rental</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
        </div>
    </div>
    { type !== "list" &&<><h1 className='headertitle'>A lifetime of discount? It's Genius</h1>
    <p className='headerdescription'>Get rewarder for your travels , unlock instant saving of 10% or more with a free ABCBOOKING account</p>

    { !user &&<Link to="/login" style={{color:"inherit",textDecoration:"none"}}><button className='headerbtn'>Sign In/Register</button> </Link>}
    <div className='headersearch'>
    <div className='headersearchitem'>
    <FontAwesomeIcon icon={faBed}  className='headerIcon'/>
        <input type="text" placeholder='where are you going' className='headersearchinput' onChange={e=>setdestination(e.target.value)}></input>
    </div>
    <div className='headersearchitem'>
    <FontAwesomeIcon icon={faCalendar}  className='headerIcon'/>
        <span onClick={()=>setOpen(!open)} className='headersearchtext'>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")} `}</span>
       {open && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={dates} className='date'
  minDate={new Date()}
/>}
    </div>
    <div className='headersearchitem'>
    <FontAwesomeIcon icon={faPerson}  className='headerIcon'/>
    <span onClick={()=>setopenOption(!openoption)}  className='headersearchtext'>{`${options.adult}adult ${options.children}children ${options.room}room` }</span>
    { openoption && <div className='options'>
<div className='optionItem'>
<span className='optiontext'>Adult</span>
<div className='optioncount'>
<button className='counterbtn' onClick={()=>handleoption("adult","d")} disabled={options.adult <=1}>-</button>
<span className='counterno'>{options.adult}</span>
<button className='counterbtn' onClick={()=>handleoption("adult","i")}>+</button>
</div>
</div>
<div className='optionItem'>
<span className='optiontext'>children</span>
<div className='optioncount'>
<button className='counterbtn' onClick={()=>handleoption("children","d")} disabled={options.children <=0}>-</button>
<span className='counterno'>{options.children}</span>
<button className='counterbtn' onClick={()=>handleoption("children","i")}>+</button>
</div>
</div>
<div className='optionItem'>
<span className='optiontext' >Room</span>
<div className='optioncount'>
<button className='counterbtn' onClick={()=>handleoption("room","d")} disabled={options.room <=1}>-</button>
<span className='counterno'>{options.room}</span>
<button className='counterbtn' onClick={()=>handleoption("room","i")}>+</button>
</div>
</div>
    </div> }
    </div>

    <div className='headersearchitem'>
        <button className='headerbtn' onClick={handlesearch}>search</button>
    </div>
    </div>
   </> }
    </div>
    </div>
  )
}

export default Header



/*   before backend



import React from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faCarRear, faL, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'
function Header({type}) {
    const [destination,setdestination]=useState("")
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[open,setOpen]=useState(false)
      const[openoption,setopenOption]=useState(false)
      const[options,setoptions]=useState({
        adult:1,
        children:0,
        room:1
      })
      const handleoption=(name,op)=>{
        setoptions(prev=>{
            return{
                ...prev,[name]:op === "i" ? options[name]+1 :options[name]-1
            }
        })
      }
      const navigate=useNavigate()
      const handlesearch=()=>{
navigate('hotels',{state:{
    destination,date,options
}})
      }
  return (
    <div className='header'>
    <div className={type !== "list" ? "headerContainer" : "listmode"}>
    <div className='headerlist'>
        <div className='headerListItem active'>
        <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faCar}/>
            <span>Car Rental</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
        </div>
    </div>
    { type !== "list" &&<><h1 className='headertitle'>A lifetime of discount? It's Genius</h1>
    <p className='headerdescription'>Get rewarder for your travels , unlock instant saving of 10% or more with a free ABCBOOKING account</p>
    <button className='headerbtn'>Sign In/Register</button>
    <div className='headersearch'>
    <div className='headersearchitem'>
    <FontAwesomeIcon icon={faBed}  className='headerIcon'/>
        <input type="text" placeholder='where are you going' className='headersearchinput' onChange={e=>setdestination(e.target.value)}></input>
    </div>
    <div className='headersearchitem'>
    <FontAwesomeIcon icon={faCalendar}  className='headerIcon'/>
        <span onClick={()=>setOpen(!open)} className='headersearchtext'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
       {open && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date} className='date'
  minDate={new Date()}
/>}
    </div>
    <div className='headersearchitem'>
    <FontAwesomeIcon icon={faPerson}  className='headerIcon'/>
    <span onClick={()=>setopenOption(!openoption)}  className='headersearchtext'>{`${options.adult}adult ${options.children}children ${options.room}room` }</span>
    { openoption && <div className='options'>
<div className='optionItem'>
<span className='optiontext'>Adult</span>
<div className='optioncount'>
<button className='counterbtn' onClick={()=>handleoption("adult","d")} disabled={options.adult <=1}>-</button>
<span className='counterno'>{options.adult}</span>
<button className='counterbtn' onClick={()=>handleoption("adult","i")}>+</button>
</div>
</div>
<div className='optionItem'>
<span className='optiontext'>children</span>
<div className='optioncount'>
<button className='counterbtn' onClick={()=>handleoption("children","d")} disabled={options.children <=0}>-</button>
<span className='counterno'>{options.children}</span>
<button className='counterbtn' onClick={()=>handleoption("children","i")}>+</button>
</div>
</div>
<div className='optionItem'>
<span className='optiontext' >Room</span>
<div className='optioncount'>
<button className='counterbtn' onClick={()=>handleoption("room","d")} disabled={options.room <=1}>-</button>
<span className='counterno'>{options.room}</span>
<button className='counterbtn' onClick={()=>handleoption("room","i")}>+</button>
</div>
</div>
    </div> }
    </div>

    <div className='headersearchitem'>
        <button className='headerbtn' onClick={handlesearch}>search</button>
    </div>
    </div>
   </> }
    </div>
    </div>
  )
}

export default Header

*/
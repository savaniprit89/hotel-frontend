import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import './list.css'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Searchitem from '../Component/Searchitem'
import Maillist from '../Component/Maillist'
import Footer from '../Component/Footer'
import useFetch from '../Hooks/useFetch'
function List() {
 
const [opendate,setopendate]=useState(false)
  const location=useLocation()
  const [destination,setdestination]=useState(location.state.destination)
  const [dates,setdate]=useState(location.state.dates)
  const [options,setoptions] =useState(location.state.options)
  const [min,setmin]=useState(undefined)
  const [max,setmax]=useState(undefined)
  console.log(dates,"preet")

  const {data,loading,error,reFetch}=useFetch(`https://booking-backend-6nn8.onrender.com/hotel?city=${destination}&min=${min ||0}&max=${max || 999}`)
  // const {data,loading,error}=useFetch(`http://localhost:9000/hotel?city=${destination}`)//only destination query
console.log("savani",data)

const handleclick=()=>{
  console.log("hii")
reFetch();
}
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listcontainer'>
      <div className='listwrapper'>
      <div className='listsearch'>
<h1 className='ltitle'>Search</h1>
<div className='litem'>
   <label>destination</label>
   <input type='text' placeholder={destination} onChange={e=>setdestination(e.target.value)}></input>
</div>
<div className='litem'>
   <label>Check in date</label>
   <span onClick={()=>setopendate(!opendate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")} `}</span>
  { opendate &&  <DateRange

  onChange={(item) => setdate([item.selection])}
  ranges={dates} 
  editableDateInputs={true}

  moveRangeOnFirstSelection={false}
  minDate={new Date()}
/>}
</div>
<div className='litem'>
<label>Options
</label>
<div className='loptions'>
<div className='loptionitem'>
<span className='optiontext'>Min price <small>per night</small></span>
<input type='number'  min={0} className='loptioninput' onChange={e=>setmin(e.target.value)}></input>
</div>
<div className='loptionitem'>
<span className='optiontext'>Max price <small>per night</small></span>
<input type='number' min={0} className='loptioninput' onChange={e=>setmax(e.target.value)}></input>
</div>
<div className='loptionitem'>
<span className='optiontext'>Adult</span>
<input type='number' min={1} className='loptioninput' placeholder={options.adult}></input>
</div>
<div className='loptionitem'>
<span className='optiontext'> children</span>
<input type='number' min={0} className='loptioninput' placeholder={options.children}></input>
</div>
<div className='loptionitem'>
<span className='optiontext'>Room</span>
<input type='number'  min={1} className='loptioninput' placeholder={options.room}></input>
</div>
</div>
</div>
<button onClick={handleclick}>Search</button>
      </div>
      <div className='listresult'>


{loading ? "loading":<>{data.map(item=>(
  <Searchitem key={item._id} item={item}/>
))}</>}

</div>
      </div>

      </div>
      <Maillist />
      <Footer />
    </div>
  )
}

export default List



/*   before backend implemented

 <div>
      <Navbar />
      <Header type='list' />
      <div className='listcontainer'>
      <div className='listwrapper'>
      <div className='listsearch'>
<h1 className='ltitle'>Search</h1>
<div className='litem'>
   <label>destination</label>
   <input type='text' placeholder={destination}></input>
</div>
<div className='litem'>
   <label>Check in date</label>
   <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
  { opendate &&  <DateRange

  onChange={(item) => setdate([item.selection])}
  ranges={date} 

  minDate={new Date()}
/>}
</div>
<div className='litem'>
<label>Options
</label>
<div className='loptions'>
<div className='loptionitem'>
<span className='optiontext'>Min price <small>per night</small></span>
<input type='number'  min={0} className='loptioninput'></input>
</div>
<div className='loptionitem'>
<span className='optiontext'>Max price <small>per night</small></span>
<input type='number' min={0} className='loptioninput'></input>
</div>
<div className='loptionitem'>
<span className='optiontext'>Adult</span>
<input type='number' min={1} className='loptioninput' placeholder={options.adult}></input>
</div>
<div className='loptionitem'>
<span className='optiontext'> children</span>
<input type='number' min={0} className='loptioninput' placeholder={options.children}></input>
</div>
<div className='loptionitem'>
<span className='optiontext'>Room</span>
<input type='number'  min={1} className='loptioninput' placeholder={options.room}></input>
</div>
</div>
</div>
<button>Search</button>
      </div>
      <div className='listresult'>

<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
<Searchitem />
</div>
      </div>

      </div>
      <Maillist />
      <Footer />
    </div>
  )
}

export default List



*/
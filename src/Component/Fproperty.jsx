import React from 'react'
import './Fproperty.css'
import imgp from '../download (2).jpeg'
import useFetch from '../Hooks/useFetch'
function Fproperty() {
  const {data,loading,error}=useFetch("https://booking-backend-6nn8.onrender.com/hotel?featured=true&limit=4")
  return (
    <div className='fp'>{
      loading? ("loading"):(<>
    {data.map((item,i)=>(<div className='fpitem' key={item._id}>
    <img src={item.photos[0]} className='fpimg'></img>
    <span className='fpname'>{item.name}</span>
    <span className='fpcity'>{item.city}</span>
    <span className='fpprice'>Starting from ${item.cheapestprice}</span>
    
    
    {item.rating &&<span className='fprating'>
        <button>{item.rating}</button>
        
    </span>}
    </div>))}</>)
    }
    </div>
  )
}
//by default there is no rating so span cover like these
export default Fproperty


/*  before backend implemented
 return (
    <div className='fp'>
    <div className='fpitem'>
    <img src={imgp} className='fpimg'></img>
    <span className='fpname'>Apartment stare miasto</span>
    <span className='fpcity'>Madrid</span>
    <span className='fpprice'>Starting from $120</span>
    <span className='fprating'>
        <button>8.9</button>
        
    </span>
    </div>
    <div className='fpitem'>
    <img src={imgp} className='fpimg'></img>
    <span className='fpname'>Apartment stare miasto</span>
    <span className='fpcity'>Madrid</span>
    <span className='fpprice'>Starting from $120</span>
    <span className='fprating'>
        <button>8.9</button>
        
    </span>
    </div>
    <div className='fpitem'>
    <img src={imgp} className='fpimg'></img>
    <span className='fpname'>Apartment stare miasto</span>
    <span className='fpcity'>Madrid</span>
    <span className='fpprice'>Starting from $120</span>
    <span className='fprating'>
        <button>8.9</button>
        
    </span>
    </div>
    </div>
  )
}



*/
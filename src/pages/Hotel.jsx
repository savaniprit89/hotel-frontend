
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useContext } from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import './Hotel.css'
import img from '../12.avif'
import img3 from '../download (2).jpeg'
import Maillist from '../Component/Maillist'
import Footer from '../Component/Footer'
import useFetch from '../Hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { AuthContext } from '../context/AuthContext copy'
import Reserve from '../Component/Reserve'
function Hotel() {
  const {user}=useContext(AuthContext);
  //to get id from url
  const location=useLocation();
  const navigate=useNavigate()
  //location =/hotel/2947297392372                //null 0/hotel 1/abdbaba 2
  const id =location.pathname.split("/")[2]
  const {data,loading,error}=useFetch(`https://booking-backend-6nn8.onrender.com/hotel/find/${id}`)
  const {dates,options}=useContext(SearchContext)
  console.log(dates)
  const milli=1000*60*60*24;
  function daydiff(date1,date2){
    const timediff=Math.abs(date2.getTime()-date1.getTime());
    const diffdays=Math.ceil(timediff/milli);
    return diffdays;
  }
  console.log(daydiff(dates[0].endDate,dates[0].startDate))
  const days=daydiff(dates[0].endDate,dates[0].startDate)
  const [slide,setslide]=useState(0);
  const [open,setopen]=useState(false);
  const [openmodal,setmodal]=useState(false);
  const handleopen =(i)=>{
console.log("o",i)
setslide(i);
setopen(true)
  }
const handleclick = ()=>{
  if(user){
setmodal(true)
  }
  else{
navigate("/login")
  }
}

  const handlemove=(direction)=>{
    let newslideno;
    if(direction === "l"){
      newslideno = slide === 0 ? 5 : slide-1
    }
    else{
      newslideno = slide === 5 ? 0 : slide+1
    }
    setslide(newslideno)
  }
  return (
    <div>
    <Navbar />
    <Header type='list' />
    { loading ? ("loading"):(<div className='hotelcontainer'>
    { open && (<div className='sliderr'>
    <FontAwesomeIcon icon={faCircleXmark}  className='close' onClick={()=>setopen(false)} />
    <FontAwesomeIcon icon={faCircleArrowLeft}  className='arrow' onClick={()=>handlemove("l")}/>
    <div className='slidderwrapper'>
    <img src={data.photos[slide]} className='sliderimg'  ></img>
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handlemove("r")} />
    </div>)
}
    <div className='hotelwrapper'>
    
    <button className='booknow' onClick={handleclick}>Reserve or book now</button>
<h1 className='hoteltitle'>{data.name}</h1>
<div className='hoteladd'>
  <FontAwesomeIcon icon={faLocation} />
  <span>{data.address}</span>
</div>
<span className='hoteldist'>Excellent location- {data.distance}m from center</span>
<span className='hotelpriced'>Bokk a stay over ${data.cheapestprice} at this property and get a free airport taxi</span>
 
    <div className='hotelimages'>
{data.photos?.map((photo,i)=>(
<div className='hotelimgwrapper'>
<img src={photo} onClick={()=>handleopen(i)}  className='hotelimage'></img>

</div>
))}
</div>
<div className='hoteldetail'>
<div className='hoteldetailtext'>
<h1 className='hoteltitle'>{data.title}
</h1>
<p className='hoteldesc'>{data.desc}</p>

</div>
<div className='hoteldetailprice'>
<h1>Perfect stay for {days} night</h1>
<span>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images 
</span>
<h2><b>${days*data.cheapestprice*options.room}</b>({days} night)</h2>
<button onClick={handleclick}>Reserve or book now</button>
</div>

</div>
    
    </div>

    </div>)}
    
    <Maillist />
    <Footer />
    {
      openmodal && <Reserve  setopen={setmodal} hotelId={id}/>
    }
    </div>
  )
}

export default Hotel
/*  before applying reducer and not getting how many night to stay
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import './Hotel.css'
import img from '../12.avif'
import img3 from '../download (2).jpeg'
import Maillist from '../Component/Maillist'
import Footer from '../Component/Footer'
import useFetch from '../Hooks/useFetch'
import { useLocation } from 'react-router-dom'
function Hotel() {

  //to get id from url
  const location=useLocation();
  //location =/hotel/2947297392372                //null 0/hotel 1/abdbaba 2
  const id =location.pathname.split("/")[2]
  const {data,loading,error}=useFetch(`http://localhost:9000/hotel/find/${id}`)
  const [slide,setslide]=useState(0);
  const [open,setopen]=useState(false);
  const handleopen =(i)=>{
console.log("o",i)
setslide(i);
setopen(true)
  }


  const handlemove=(direction)=>{
    let newslideno;
    if(direction === "l"){
      newslideno = slide === 0 ? 5 : slide-1
    }
    else{
      newslideno = slide === 5 ? 0 : slide+1
    }
    setslide(newslideno)
  }
  return (
    <div>
    <Navbar />
    <Header type='list' />
    { loading ? ("loading"):(<div className='hotelcontainer'>
    { open && (<div className='sliderr'>
    <FontAwesomeIcon icon={faCircleXmark}  className='close' onClick={()=>setopen(false)} />
    <FontAwesomeIcon icon={faCircleArrowLeft}  className='arrow' onClick={()=>handlemove("l")}/>
    <div className='slidderwrapper'>
    <img src={data.photos[slide]} className='sliderimg'  ></img>
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handlemove("r")} />
    </div>)
}
    <div className='hotelwrapper'>
    
    <button className='booknow'>Reserve or book now</button>
<h1 className='hoteltitle'>{data.name}</h1>
<div className='hoteladd'>
  <FontAwesomeIcon icon={faLocation} />
  <span>{data.address}</span>
</div>
<span className='hoteldist'>Excellent location- {data.distance}m from center</span>
<span className='hotelpriced'>Bokk a stay over ${data.cheapestprice} at this property and get a free airport taxi</span>
 
    <div className='hotelimages'>
{data.photos?.map((photo,i)=>(
<div className='hotelimgwrapper'>
<img src={photo} onClick={()=>handleopen(i)}  className='hotelimage'></img>

</div>
))}
</div>
<div className='hoteldetail'>
<div className='hoteldetailtext'>
<h1 className='hoteltitle'>{data.title}
</h1>
<p className='hoteldesc'>{data.desc}</p>

</div>
<div className='hoteldetailprice'>
<h1>Perfect stay for 2 night</h1>
<span>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images 
</span>
<h2><b>$925</b>(2 night)</h2>
<button>Reserve or book now</button>
</div>

</div>
    
    </div>

    </div>)}
    <Maillist />
    <Footer />
    </div>
  )
}

export default Hotel
*/

/*  before backend
function Hotel() {
  const {data,loading,error}=useFetch("http://localhost:9000/hotel")
  const photos=[
    {
      src:img
        },
        {
          src:img3
            },
            {
              src:img
                },
                {
                  src:img3
                    }, {
                      src:img
                    }, {
                      src:img3
                        }
        
  ]
  const [slide,setslide]=useState(0);
  const [open,setopen]=useState(false);
  const handleopen =(i)=>{
console.log("o",i)
setslide(i);
setopen(true)
  }


  const handlemove=(direction)=>{
    let newslideno;
    if(direction === "l"){
      newslideno = slide === 0 ? 5 : slide-1
    }
    else{
      newslideno = slide === 5 ? 0 : slide+1
    }
    setslide(newslideno)
  }
  return (
    <div>
    <Navbar />
    <Header type='list' />
    <div className='hotelcontainer'>
    { open && (<div className='sliderr'>
    <FontAwesomeIcon icon={faCircleXmark}  className='close' onClick={()=>setopen(false)} />
    <FontAwesomeIcon icon={faCircleArrowLeft}  className='arrow' onClick={()=>handlemove("l")}/>
    <div className='slidderwrapper'>
    <img src={photos[slide].src} className='sliderimg'  ></img>
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handlemove("r")} />
    </div>)
}
    <div className='hotelwrapper'>
    
    <button className='booknow'>Reserve or book now</button>
<h1 className='hoteltitle'>Grand Hotel</h1>
<div className='hoteladd'>
  <FontAwesomeIcon icon={faLocation} />
  <span>Elton st 125 new york</span>
</div>
<span className='hoteldist'>Excellent location- 500m from center</span>
<span className='hotelpriced'>Bokk a stay over $114 at this property and get a free airport taxi</span>
 
    <div className='hotelimages'>
{photos.map((photo,i)=>(
<div className='hotelimgwrapper'>
<img src={photo.src} onClick={()=>handleopen(i)}  className='hotelimage'></img>
</div>
))}
</div>
<div className='hoteldetail'>
<div className='hoteldetailtext'>
<h1 className='hoteltitle'>Stay in heart if krakow
</h1>
<p className='hoteldesc'>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images img elements must have an alt prop, either with meaningful text, or an empty string for decorative images img elements must have an alt prop, either with meaningful text, or an empty string for decorative images img elements must have an alt prop, either with meaningful text, or an empty string for decorative images img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>

</div>
<div className='hoteldetailprice'>
<h1>Perfect stay for 2 night</h1>
<span>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images 
</span>
<h2><b>$925</b>(2 night)</h2>
<button>Reserve or book now</button>
</div>

</div>
    
    </div>

    </div>
    <Maillist />
    <Footer />
    </div>
  )
}

export default Hotel



*/
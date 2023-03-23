import React from 'react'
import './Property.css'
import img3 from '../download (2).jpeg'
import useFetch from '../Hooks/useFetch'
function Property() {
const images=[
  img3,
  img3,
  img3,
  img3,
  img3
]

  const {data,loading,error}=useFetch("https://booking-backend-6nn8.onrender.com/hotel/countbytype")//url\

  console.log("preeet",data)
  return (
    <div className='plist'>
    { loading ? ("loading"):(<>
    {data && images.map((img,i) => (<div className='plistitem' key={i}>
    <img src={img} className='plistimg'></img>
    <div className='plisttitlt'>
<h1>{data[i]?.type}</h1>
<h2>{data[i]?.count} {data[i]?.type}</h2>
    </div>
    </div>))}
    
    </>)}
    </div>
  )
}

export default Property


/*
it was before backedn connected static loading


function Property() {


  const {data,loading,error}=useFetch("http://localhost:9000/hotel/countbytype")//url\

  console.log("preeet",data)
  return (
    <div className='plist'>
    <div className='plistitem'>
    <img src={img3} className='plistimg'></img>
    <div className='plisttitlt'>
<h1>Hotels</h1>
<h2>233 hotels</h2>

    </div>

    </div>
    <div className='plistitem'>
    <img src={img3} className='plistimg'></img>
    <div className='plisttitlt'>
<h1>Villa</h1>
<h2>233 hotels</h2>

    </div>

    </div>
    <div className='plistitem'>
    <img src={img3} className='plistimg'></img>
   
    <div className='plisttitlt'>
<h1>Appartment</h1>
<h2>233 hotels</h2>

    </div>

    </div>
    <div className='plistitem'>
    <img src={img3} className='plistimg'></img>
    <div className='plisttitlt'>
<h1>Resort</h1>
<h2>233 hotels</h2>

    </div>

    </div>
    
    </div>
  )
}
*/
import React from 'react'
import './Feature.css'

import img from '../12.avif'
import useFetch from '../Hooks/useFetch'
function Feauture() {
//if not proper then proxy during vidoe learned(1):(36)
  const {data,loading,error}=useFetch("https://booking-backend-6nn8.onrender.com/hotel/countbycity?cities=berlin,mumbai,london")//url\

  
  //if loading true then one fragment and not then other fragment
  return (
    <div className='featured'>{loading?("loading please wait"):(<>
    <div className='featureitem'>
    <img src={img} alt='nknc' className='featureimg'></img>
    <div className='featuretitle'>
    <h1>Dublin</h1>
    <h2>{data[0]} properties</h2>
    </div>

    </div>
     <div className='featureitem'>
     <img src={img} alt='nknc' className='featureimg'></img>
    <div className='featuretitle'>
    <h1>Austin</h1>
    <h2>{data[1]}  properties</h2>
    </div>

    </div>
     <div className='featureitem'>
     <img src={img} alt='nknc' className='featureimg'></img>
    <div className='featuretitle'>
    <h1>Reno</h1>
    <h2>{data[2]}  properties</h2>
    </div>

    </div></>)}
    </div>
  )
}

export default Feauture


/*
function Feauture() {
//if not proper then proxy during vidoe learned(1):(36)
  const {data,loading,error}=useFetch("http://localhost:9000/hotel/countbycity?cities=berlin,abcd@gmail.com")//url\

  console.log("preeet",data)
  return (
    <div className='featured'>
    <div className='featureitem'>
    <img src={img} alt='nknc' className='featureimg'></img>
    <div className='featuretitle'>
    <h1>Dublin</h1>
    <h2>123 properties</h2>
    </div>

    </div>
     <div className='featureitem'>
     <img src={img} alt='nknc' className='featureimg'></img>
    <div className='featuretitle'>
    <h1>Austin</h1>
    <h2>123 properties</h2>
    </div>

    </div>
     <div className='featureitem'>
     <img src={img} alt='nknc' className='featureimg'></img>
    <div className='featuretitle'>
    <h1>Reno</h1>
    <h2>123 properties</h2>
    </div>

    </div>
    </div>
  )
}
//it was during static site and now loading feuture added



*/
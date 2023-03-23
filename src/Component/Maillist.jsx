import React from 'react'
import './Maillist.css'
function Maillist() {
  return (
    <div className='mail'>
   <h1 className='mailtitle'> Save time, save money</h1>
   <span className='maildesc'>Sign up and we'll send</span>
   <div className='mailcontainer'>
   <input type='text' placeholder='your mail'></input>
   <button>subscribe</button> 

   </div>
    </div>
  )
}

export default Maillist
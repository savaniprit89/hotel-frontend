import React, { useContext, useState }  from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import { AuthContext } from '../context/AuthContext copy'
function Navbar() {
  const {user,loading,error,dispatch}=useContext(AuthContext);
  const handlelogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='navbar'>
        <div className='navContainer'>
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className='logo'>ABCBOOKING</span></Link>
            { user ?  (<div className='navlogout'><span>{user.username}</span> 
            <button className='navButton' onClick={handlelogout}>Logout</button>
            </div>) :(
            <div className='navItems'>
            <Link to="/register" style={{color:"inherit",textDecoration:"none"}}>
                <button className='navButton' >Register</button></Link>
                <Link to="/login" style={{color:"inherit",textDecoration:"none"}}>
                <button className='navButton' >Login</button></Link>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar

/*  before backend
import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  const {user,loading,error,dispatch}=useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className='navContainer'>
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className='logo'>ABCBOOKING</span></Link>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar


*/

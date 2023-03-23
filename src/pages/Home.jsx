import React from 'react'
import Feauture from '../Component/Feauture'
import Footer from '../Component/Footer'
import Fproperty from '../Component/Fproperty'
import Header from '../Component/Header'
import Maillist from '../Component/Maillist'
import Navbar from '../Component/Navbar'
import Property from '../Component/Property'
import './Home.css'
function Home() {
  return (
    <div>
    <Navbar />
    <Header />
    <div className='homecontainer'>
        <Feauture />
        <h1 className='hometitle'>Browse by property title</h1>
<Property /> 
<h1 className='hometitle'>Homes guests love</h1>
<Fproperty />   
<Maillist />
<Footer />
    </div>
    </div>
  )
}

export default Home
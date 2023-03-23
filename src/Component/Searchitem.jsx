import React from 'react'
import './Searchitem.css'
import img3 from '../download (2).jpeg'
import { Link } from 'react-router-dom'
function Searchitem({item}) {
  return (
    <div className='searchitem'>
    <img src={item.photos[0]} ></img>
    <div className='searchitemd'>
<h1 className='stitle'>{item.name}</h1>
<span className='sdistance'>{item.distance}</span>
<span className='staxi'>Free airport taxi</span>
<span className='ssubtitle'> Studio apartment with AC</span>
<span className='sfeauture'>{item.desc}</span>
<span className='scancel'>Free cancellation</span>
<span className='scancelop'>You can cancel later,so lock in this great price</span>
    </div>
    <div className='searchitemdetails'>
{item.rating && <div className='srating'>
<button>{item.rating}</button>
</div>}
<div className='sdetailtext'>
<span className='sprice'>${item.cheapestprice}</span>
<span className='stax'>Includes taxes and fees</span>
<Link to={`/hotels/${item._id}`}>
<button className='savai'>see availibilty</button>
</Link>
</div>
    </div>
    </div>
  )
}

export default Searchitem

/*
before backend

 <div className='searchitem'>
    <img src={img3} ></img>
    <div className='searchitemd'>
<h1 className='stitle'>Tower Street Apartments</h1>
<span className='sdistance'>500m from center</span>
<span className='staxi'>Free airport taxi</span>
<span className='ssubtitle'> Studio apartment with AC</span>
<span className='sfeauture'>Entire studio + 1 bathroom + 1 full bed</span>
<span className='scancel'>Free cancellation</span>
<span className='scancelop'>You can cancel later,so lock in this great price</span>
    </div>
    <div className='searchitemdetails'>
<div className='srating'>
<button>8.9</button>
</div>
<div className='sdetailtext'>
<span className='sprice'>$123</span>
<span className='stax'>Includes taxes and fees</span>
<button className='savai'>see availibilty</button>
</div>
    </div>
    </div>
  )
}

*/
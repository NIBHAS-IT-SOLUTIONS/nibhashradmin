import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Allempheader.css'

function Allempheader() {
    const navigate =useNavigate();
  return (
    <>
 <header>
    <nav className="nav">
      <a href="/" className="nav__brand">
        Nibhas HRD Admin 
      </a>

      <button className='allemployerbackbutton' onClick={()=>{navigate('/');}}>Back</button>
    

      
     

 
  

    
    </nav>
    </header>

    </>
  )
}

export default Allempheader
import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate =useNavigate();
  console.log(navigate);
  return (

    <>
    <header>
    <nav className="nav">
      <a href="/" className="nav__brand">
        Nibhas HRD Admin
      </a>

      
    

      
      <button className='allemployerbutton' onClick={()=>{navigate('/appliedjobs');}}>Applied candidates</button>


      <button className='allemployerbutton' onClick={()=>{navigate('/addvacancy');}}>Vacancies</button>

  

    
    </nav>
    </header>
    </>
  )
}

export default Header